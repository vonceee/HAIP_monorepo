import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { Link } from "react-router-dom"
import backgroundImg from "@/assets/background-img.webp"

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            Interactive Safety Education
          </span>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Teaching Youth to <span className="text-primary">Stay Safe</span> Through Play
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            HAIP makes hazard awareness fun and memorable for learners with interactive lectures, quizzes, and real-world scenarios they can explore at their own pace.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="lg" asChild>
              <Link to="#lectures">
                Explore Lectures
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="#how-it-works">
                <Play className="mr-2 h-4 w-4" />
                How It Works
              </Link>
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold  text-foreground">50+</span>
              <span className="text-xs text-muted-foreground">Kids Learning</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold  text-foreground">2+</span>
              <span className="text-xs text-muted-foreground">Lectures</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold  text-foreground">98%</span>
              <span className="text-xs text-muted-foreground">Parent Approval</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={backgroundImg}
              alt="Children learning about safety in an interactive classroom"
              className="max-h-[400px] w-full object-cover"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-card px-5 py-3 shadow-lg border border-border">
            <p className="text-sm font-bold text-foreground ">Hazard Awareness</p>
          </div>
        </div>
      </div>
    </section>
  )
}
