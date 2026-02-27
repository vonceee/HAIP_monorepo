import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Gamepad2, PlayCircle } from "lucide-react";

import { lectures } from "../data/lectures"; // Importing from modular lecture registry
import { Lecture } from "../types";
import backgroundImg from "@/assets/background-img.webp";

// --- DYNAMIC STYLING MAPS ---
const TOPIC_STYLES: Record<string, string> = {
  Earthquake: "bg-orange-500",
  Flood: "bg-blue-500",
  Volcano: "bg-red-500",
  General: "bg-slate-500",
};

const TOPIC_HOVER_STYLES: Record<string, string> = {
  Earthquake:
    "hover:shadow-[0_20px_40px_-5px_rgba(249,115,22,0.4)] hover:border-orange-500/50",
  Flood:
    "hover:shadow-[0_20px_40px_-5px_rgba(59,130,246,0.4)] hover:border-blue-500/50",
  Volcano:
    "hover:shadow-[0_20px_40px_-5px_rgba(239,68,68,0.4)] hover:border-red-500/50",
  General:
    "hover:shadow-[0_20px_40px_-5px_rgba(100,116,139,0.4)] hover:border-slate-500/50",
};

interface FeaturesProps {
  onLectureSelect?: (lecture: Lecture) => void;
}

export const Features = ({ onLectureSelect }: FeaturesProps) => {
  return (
    <section
      id="library"
      className="relative w-full min-h-[100dvh] lg:h-screen lg:max-h-[100dvh] flex flex-col justify-center py-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      {/* Overlay to ensure text readability across both Light/Dark modes */}
      <div className="absolute inset-0 z-0 bg-background/75 dark:bg-background/90 backdrop-blur-md" />

      {/* Main Content (Elevated above background & overlay) */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-20 xl:px-32">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
          <div className="inline-block px-4 py-2">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              Available{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
                Modules
              </span>
            </h2>
          </div>
          <p className="max-w-[85%] text-muted-foreground sm:text-md drop-shadow-sm font-medium">
            explore our interactive disaster readiness modules designed for
            high-impact learning.
          </p>
        </div>

        {/* Grid Layout containing the shadcn Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {lectures.map((lecture) => {
            const colorStyle =
              TOPIC_STYLES[lecture.topic] || TOPIC_STYLES.General;
            const hoverStyle =
              TOPIC_HOVER_STYLES[lecture.topic] || TOPIC_HOVER_STYLES.General;

            return (
              <Card
                key={lecture.id}
                onClick={() => onLectureSelect?.(lecture)}
                className={`bg-card text-card-foreground shadow-lg group relative overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] ${hoverStyle}`}
              >
                {/* Tactical Header Bar */}
                <div className={`h-1.5 w-full ${colorStyle}`} />

                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-slate-900 w-full overflow-hidden">
                  <img
                    src={lecture.imageUrl}
                    alt={lecture.title}
                    className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
                  />

                  {/* Play Overlay (Visible on Hover) */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                    <div className="scale-75 rounded-full border border-white/50 bg-white/20 p-3 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-100">
                      <PlayCircle className="h-10 w-10 fill-current text-white" />
                    </div>
                  </div>

                  {/* Topic Badge using shadcn Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-black/80 hover:bg-black/90 text-white border border-white/10 shadow-lg uppercase tracking-widest text-[10px] font-bold">
                      {lecture.topic}
                    </Badge>
                  </div>

                  {/* Game Indicator */}
                  {lecture.gameType !== "none" && (
                    <div
                      className="absolute bottom-4 right-4 z-10 animate-pulse rounded bg-emerald-500 p-1.5 text-white shadow-lg"
                      title="Simulation Active"
                    >
                      <Gamepad2 className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Card Text Content */}
                <CardHeader className="flex-1 pb-4">
                  <CardTitle className="text-xl font-black text-foreground leading-tight group-hover:text-primary transition-colors uppercase">
                    {lecture.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-2 font-medium mt-2">
                    {lecture.description}
                  </p>
                </CardHeader>

                {/* Card Stats Footer */}
                <CardContent className="pb-6">
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                        Duration
                      </span>
                      <div className="flex items-center text-foreground font-bold text-sm">
                        <Clock className="w-3.5 h-3.5 mr-1.5 text-primary" />
                        {lecture.readTime}m
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                        Modules
                      </span>
                      <div className="flex items-center text-foreground font-bold text-sm">
                        <BookOpen className="w-3.5 h-3.5 mr-1.5 text-primary" />
                        {lecture.sections?.length || 0}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
