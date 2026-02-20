import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-card py-6 border-t shadow-inner">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          rel="noreferrer noopener"
          href="/"
          className="font-bold text-xl flex items-center gap-2"
        >
          <LogoIcon />
          HAIP
        </a>

        <h3 className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} HAIP. All rights reserved.
        </h3>
      </div>
    </footer>
  );
};
