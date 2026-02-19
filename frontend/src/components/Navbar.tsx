import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useGoogleLogin } from "@react-oauth/google";
import api from "@/lib/axios";

export const Navbar = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await api.get("/sanctum/csrf-cookie");
        const response = await api.post("/auth/google", {
          token: tokenResponse.access_token,
        });
        console.log("Backend response:", response.data);
        if (response.data.user) {
          // Optionally handle successful login (e.g. redirect or state update)
          window.location.href = "/dashboard";
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="container h-14 px-4 w-full flex justify-between items-center mx-auto">
        <div className="font-bold flex">
          <a
            rel="noreferrer noopener"
            href="/"
            className="ml-2 font-bold text-xl flex items-center"
          >
            <span className="ml-2">HAIP</span>
          </a>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => login()}>
            Login
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
