import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    name: "Sarah Jenkins",
    userName: "@sarahj_teacher",
    comment:
      "HAIP has completely transformed how my 4th graders learn about natural disasters. It's engaging and they genuinely remember what to do!",
  },
  {
    image: "https://i.pravatar.cc/150?img=2",
    name: "Michael Chen",
    userName: "@mikechen88",
    comment:
      "As a parent living in an earthquake-prone area, I've always struggled to explain the dangers without scaring my kids. HAIP perfectly balances education and fun.",
  },

  {
    image: "https://i.pravatar.cc/150?img=3",
    name: "Elena Rodriguez",
    userName: "@elenarh",
    comment:
      "The interactive mini-games are fantastic. My son actually asks to play the 'volcano game' now, and he's learning real geological facts while doing it!",
  },
  {
    image: "https://i.pravatar.cc/150?img=4",
    name: "David Kim",
    userName: "@dkim_educator",
    comment:
      "Highly recommend this platform for any science teacher. The bite-sized lectures combined with interactive quizzes make for perfect supplementary material.",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    name: "Rachel Foster",
    userName: "@rachel_foster",
    comment:
      "I love how visual the learning is. It takes complex scientific concepts about floods and earthquakes and makes them incredibly accessible for youth.",
  },
  {
    image: "https://i.pravatar.cc/150?img=6",
    name: "James Wilson",
    userName: "@j_wilson_parent",
    comment:
      "Finally, a disaster readiness tool that doesn't feel like a boring textbook. The UI is gorgeous and the content is top-notch. Great job to the team behind HAIP!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Parents & Educators Love{" "}
        </span>
        HAIP
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        hear from our community about how interactive learning is making a real
        difference in hazard awareness.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>
                    {name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};
