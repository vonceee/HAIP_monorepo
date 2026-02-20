import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import api from "@/lib/axios";
import { useAuth } from "@/hooks/useAuth";
import { googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await api.post("/api/logout");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      googleLogout();
      setUser(null);
      window.location.href = "/";
    }
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <div className="container h-14 px-4 w-full flex justify-between items-center mx-auto">
        <div className="font-bold flex">
          <a
            rel="noreferrer noopener"
            href="/"
            className="ml-2 font-bold text-xl flex items-center"
          >
            <span className="ml-3 text-xl font-bold text-slate-800 tracking-tight">
              HAIP{" "}
              <span className="text-slate-400 font-normal hidden sm:inline">
                | Hazard Awareness
              </span>
            </span>{" "}
          </a>
        </div>

        <div className="flex gap-2 items-center">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.avatar}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                    />
                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
