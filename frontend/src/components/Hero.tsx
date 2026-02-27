import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import backgroundImg from "@/assets/background-img.webp";

export function Hero() {
  return (
    <section className="w-full min-h-[100dvh] lg:h-screen lg:max-h-[100dvh] flex flex-col justify-center bg-background pt-24 pb-12 md:pt-0">
      <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="flex flex-col gap-6 md:gap-8 lg:pr-8">
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Teaching Youth to <span className="text-primary">Stay Safe</span>{" "}
            Through Play
          </h1>
          <p className="max-w-[85%] text-pretty leading-relaxed text-muted-foreground sm:text-lg sm:max-w-md md:max-w-lg lg:text-lg">
            HAIP makes hazard awareness fun and memorable for learners with
            interactive lectures, quizzes, and real-world scenarios they can
            explore at their own pace.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-2 md:pt-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#library">
                Explore Lectures
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="#howItWorks">
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                How It Works
              </a>
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="flex items-center gap-4 sm:gap-6 pt-4 md:pt-6">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                50+
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">
                Kids Learning
              </span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                2+
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">
                Lectures
              </span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                98%
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">
                Parent Approval
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:max-w-none md:mt-0">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={backgroundImg}
              className="h-[300px] sm:h-[400px] lg:h-[450px] w-full object-cover"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 rounded-xl bg-card px-4 py-2 sm:px-6 sm:py-4 shadow-xl border border-border">
            <p className="text-xs sm:text-sm font-bold text-foreground">
              Hazard Awareness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
