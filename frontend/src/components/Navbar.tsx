import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useGoogleLogin } from "@react-oauth/google";

export const Navbar = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch("http://localhost:8000/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });
        const data = await response.json();
        console.log("Backend response:", data);
        if (data.user) {
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
