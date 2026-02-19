import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export const Navbar = () => {
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
          <Button variant="ghost" onClick={() => console.log("Help clicked")}>
            Help
          </Button>
          <Button asChild>
            <a href="http://localhost:8000/login?provider=google">Log in</a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
