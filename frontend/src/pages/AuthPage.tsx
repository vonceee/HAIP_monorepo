import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/lib/axios";
import { useAuth } from "@/hooks/useAuth";
import illustration from "@/assets/auth-page/cvnesbsefbe.jpg";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    prompt: "select_account",
    onSuccess: async (tokenResponse) => {
      try {
        await api.get("/sanctum/csrf-cookie");
        const response = await api.post("/api/google", {
          token: tokenResponse.access_token,
        });

        if (response.data.user) {
          setUser(response.data.user);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-slate-950 font-sans">
      {/* Left Panel: Auth Form */}
      <div className="flex flex-col p-8 sm:p-12 lg:px-24 justify-center relative min-h-screen">
        {/* Brand Header */}
        <div className="absolute top-8 left-8 sm:left-12 lg:left-24">
          <Link to="/" className="text-xl font-bold flex items-center">
            <span className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
              HAIP{" "}
              <span className="text-slate-400 font-normal hidden sm:inline">
                | Hazard Awareness
              </span>
            </span>
          </Link>
        </div>

        <div className="w-full max-w-sm mx-auto space-y-8 mt-12 lg:mt-0">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">
              {isLogin ? "Log In" : "Sign Up"}
            </h1>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {isLogin ? "Don't have an account? " : "Already a user? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary/80 font-bold transition-colors"
                type="button"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase font-medium">
              <span className="bg-white dark:bg-slate-950 px-2 text-slate-500">
                continue with
              </span>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-1.5">
                <Label
                  htmlFor="name"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter Full Name"
                  type="text"
                  className="rounded-sm border-slate-300 h-11"
                />
              </div>
            )}
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter Email Address"
                type="email"
                className="rounded-sm border-slate-300 h-11"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="password"
                className="text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Password"
                className="rounded-sm border-slate-300 h-11"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="keepLogged"
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <Label
                  htmlFor="keepLogged"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 cursor-pointer"
                >
                  Keep me logged in
                </Label>
              </div>
              {isLogin && (
                <Link
                  to="#"
                  className="text-xs font-bold text-primary hover:text-primary/80"
                >
                  Forgot password?
                </Link>
              )}
            </div>

            <Button className="w-full h-12 bg-slate-400 hover:bg-slate-500 text-white font-bold rounded-sm text-base mt-4 transition-colors">
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
          </form>

          <div className="relative pt-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase font-medium">
              <span className="bg-white dark:bg-slate-950 px-2 text-slate-500">
                or
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-2">
            <Button
              variant="outline"
              onClick={() => loginWithGoogle()}
              className="w-full h-11 bg-white hover:bg-slate-50 border-slate-300 text-slate-700 font-medium rounded-sm flex items-center justify-center gap-3 transition-colors"
              type="button"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              <span>Google</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Panel: Branding/Illustration */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-primary p-12 relative overflow-hidden">
        {/* Subtle background pattern or gradient overlay if desired */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-lg mx-auto">
          <img
            src={illustration}
            alt="Dashboard UI and Data Tools Illustration"
            className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
          />

          <div className="text-center mt-12 space-y-4">
            <h2 className="text-3xl font-bold text-primary-foreground tracking-tight">
              Welcome Back!
            </h2>
            <p className="text-lg text-primary-foreground/80 font-medium">
              Your disaster readiness modules have missed you
            </p>
          </div>
        </div>

        {/* Close/Back button top right */}
        <Link
          to="/"
          className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Link>
      </div>
    </div>
  );
}
