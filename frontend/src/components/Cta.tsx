import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Ready to
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Start Learning?{" "}
            </span>
            Join HAIP Today
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Empower your child with vital knowledge on hazard awareness. Explore
            interactive lectures and mini-games designed to make learning fun
            and memorable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:col-start-2 items-center justify-center lg:justify-start">
          <Button className="w-full sm:w-auto" asChild>
            <a href="/login">Get Started</a>
          </Button>
          <Button variant="outline" className="w-full sm:w-auto" asChild>
            <a href="#library">View all modules</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
