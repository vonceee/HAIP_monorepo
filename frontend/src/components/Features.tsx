import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  BarChart,
  ChevronRight,
  Gamepad2,
  PlayCircle,
} from "lucide-react";

import { lectures } from "../data/lectures"; // Importing from modular lecture registry
import { Lecture } from "../types";

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
    <section id="library" className="container py-8 sm:py-12 space-y-8">
      {/* Section Header */}
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        <span className="inline-block bg-card px-8 py-3 rounded-full shadow-lg border">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Disaster Library
          </span>
        </span>
      </h2>

      {/* Grid Layout containing the shadcn Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <CardTitle className="text-xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors uppercase">
                  {lecture.title}
                </CardTitle>
                <p className="text-slate-500 text-sm line-clamp-2 font-medium mt-2">
                  {lecture.description}
                </p>
              </CardHeader>

              {/* Card Stats Footer */}
              <CardContent className="pb-6">
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                      Duration
                    </span>
                    <div className="flex items-center text-slate-700 font-bold text-sm">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-primary" />
                      {lecture.readTime}m
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                      Difficulty
                    </span>
                    <div className="flex items-center text-slate-700 font-bold text-sm">
                      <BarChart className="w-3.5 h-3.5 mr-1.5 text-primary" />
                      {lecture.difficulty}
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Hover "Deploy" Call to Action */}
              <div className="absolute bottom-0 left-0 z-20 flex w-full translate-y-full items-center justify-between bg-slate-900 px-6 py-3 text-white transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-widest">
                  Deploy
                </span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
