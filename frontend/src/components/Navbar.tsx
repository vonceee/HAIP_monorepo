import { Link } from "react-router-dom";
import { LogOut, LayoutDashboard, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/navbar/useAuth";
import { useLogout } from "@/hooks/navbar/useLogout";
import { useUserInitials } from "@/hooks/navbar/useUserInitials";

export const Navbar = () => {
  const { user } = useAuth();
  const { logout} = useLogout();
  const initials = useUserInitials();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">

        {/* Logo */}
        <Link
          to="/"
          aria-label="HAIP — Hazard Awareness home"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground"
        >
          HAIP
          <span className="hidden text-base font-normal text-muted-foreground sm:inline">
            | Hazard Awareness
          </span>
        </Link>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.avatar}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                    />
                    <AvatarFallback className="text-xs">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <UserCog className="h-4 w-4" />
                    Profile Settings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={ () => logout() }
                  className="flex items-center gap-2 text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
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