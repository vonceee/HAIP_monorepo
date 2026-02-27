import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import api from "@/lib/axios";
import { useAuth } from "@/hooks/navbar/useAuth";

export function useAuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (error) setError(null);
  };

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      await api.get("/sanctum/csrf-cookie");
      const response = await api.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.user) {
        setUser(response.data.user);
        navigate("/dashboard");
      }
    } catch (err: any) {
      if (err.response?.data?.errors) {
        const firstError = Object.values(
          err.response.data.errors,
        )[0] as string[];
        setError(firstError[0]);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("invalid credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setError(null);
    setLoading(true);
    try {
      await api.get("/sanctum/csrf-cookie");
      const response = await api.post("/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password,
      });

      if (response.data.user) {
        setUser(response.data.user);
        navigate("/dashboard");
      }
    } catch (err: any) {
      if (err.response?.data?.errors) {
        const firstError = Object.values(
          err.response.data.errors,
        )[0] as string[];
        setError(firstError[0]);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("error occurred during signup.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  const loginWithGoogle = useGoogleLogin({
    prompt: "select_account",
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      setError(null);
      try {
        await api.get("/sanctum/csrf-cookie");
        const response = await api.post("/google", {
          token: tokenResponse.access_token,
        });

        if (response.data.user) {
          setUser(response.data.user);
          navigate("/dashboard");
        }
      } catch (err: any) {
        setError("Google authentication failed.");
        setLoading(false);
      }
    },
    onError: () => {
      setError("Google authentication failed.");
      setLoading(false);
    },
  });

  return {
    isLogin,
    setIsLogin,
    formData,
    loading,
    error,
    setError,
    handleChange,
    handleSubmit,
    loginWithGoogle,
  };
}
