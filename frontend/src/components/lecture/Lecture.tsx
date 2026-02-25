import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";

const lectures = [
  {
    title: "Fire Safety Fundamentals",
    description:
      "Learn what to do in a fire, how to use emergency exits, and why smoke detectors matter.",
    image: "/images/fire-safety.jpg",
    age: "5-8",
    duration: "20 min",
    enrolled: "12K",
    rating: 4.9,
    tag: "Popular",
  },
  {
    title: "Road Safety Adventures",
    description:
      "Master pedestrian rules, understand traffic signals, and practice safe crossing.",
    image: "/images/road-safety.jpg",
    age: "6-10",
    duration: "25 min",
    enrolled: "9.5K",
    rating: 4.8,
    tag: "New",
  },
  {
    title: "Home Hazard Heroes",
    description:
      "Discover hidden dangers at home and learn how to keep your living space safe.",
    image: "/images/home-safety.jpg",
    age: "5-12",
    duration: "15 min",
    enrolled: "8K",
    rating: 4.7,
    tag: "Interactive",
  },
];

export function Lectures() {
  return (
    <section id="lectures" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-primary">
            Our Lectures
          </span>
          <h2 className="mt-2 text-balance  text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Interactive Safety Lessons Kids Love
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Each lecture is designed by child safety experts and educators to
            make learning about hazards engaging and age-appropriate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {lectures.map((lecture) => (
            <Card
              key={lecture.title}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={lecture.image}
                  alt={lecture.title}
                  width={480}
                  height={320}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute right-3 top-3 bg-accent text-accent-foreground">
                  {lecture.tag}
                </Badge>
              </div>
              <CardContent className="flex flex-col gap-3 p-6">
                <h3 className=" text-lg font-bold text-card-foreground">
                  {lecture.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {lecture.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {lecture.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {lecture.enrolled}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    {lecture.rating}
                  </span>
                  <Badge variant="secondary" className="ml-auto text-xs">
                    Age {lecture.age}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
