import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, Map, Gamepad2, Award } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Map className="w-12 h-12 text-primary" />,
    title: "1. Choose a Module",
    description:
      "browse our library of safety topics including fire, road, water, online, and home hazards.",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    title: "2. Learn Concepts",
    description:
      "each lecture uses simulation and real-world scenarios with built-in checkpoints.",
  },
  {
    icon: <Gamepad2 className="w-12 h-12 text-primary" />,
    title: "3. Interactive Simulation",
    description:
      "fun quizzes reinforce key lessons and help kids test their knowledge.",
  },
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: "4. Test Your Knowledge",
    description:
      "complete a topic to unlock a collectible safety badge and share your achievement.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="w-full min-h-[100dvh] lg:h-screen lg:max-h-[100dvh] flex flex-col justify-center bg-muted/20 py-16 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl mb-4">
          How It{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
            Works
          </span>
        </h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-md drop-shadow-sm font-medium mx-auto mb-12">
          master disaster readiness through our simple, four-step learning
          process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {features.map(({ icon, title, description }: FeatureProps) => (
            <Card
              key={title}
              className="bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/50 relative z-10"
            >
              <CardHeader className="pb-4">
                <CardTitle className="grid gap-4 place-items-center text-xl font-bold">
                  <div className="p-4 rounded-full bg-primary/10 mb-2 transition-transform duration-300 group-hover:scale-110">
                    {icon}
                  </div>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground font-medium text-sm sm:text-base leading-relaxed">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
