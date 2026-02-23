// hooks/useLogout.ts
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { authService } from "@/services/auth.service";

export const useLogout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
      navigate("/", { replace: true });
    }
  };

  return { logout };
};