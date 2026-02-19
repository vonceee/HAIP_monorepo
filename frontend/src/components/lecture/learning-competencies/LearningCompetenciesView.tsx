import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Competency } from "../../../types";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { THEME_STYLES } from "../theme";

interface LearningCompetenciesViewProps {
  competencies: Competency[];
  onNext: () => void;
}

export const LearningCompetenciesView: React.FC<
  LearningCompetenciesViewProps
> = ({ competencies, onNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = THEME_STYLES.General; // Default theme for consistency

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-full md:min-h-[60vh] flex flex-col transition-all duration-700 ease-out text-white ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex-1 space-y-8 p-4">
        {/* Header Section */}
        <div className="space-y-4 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-lg">
              Learning Competencies
            </h3>
            <p className="text-slate-400 text-sm md:text-lg font-light mt-2 max-w-2xl mx-auto md:mx-0">
              master the following key skills to successfully complete the
              mission objectives.
            </p>
          </div>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {competencies.map((comp, index) => (
            <Card
              key={index}
              className="group bg-black/40 backdrop-blur-md border-white/10 hover:bg-black/50 transition-all duration-300 overflow-hidden relative"
            >
              {/* Card Accent Line */}
              <div
                className={`absolute top-0 left-0 w-1 h-full ${theme.buttonBg} opacity-50 group-hover:opacity-100 transition-opacity`}
              />

              <CardHeader className="pb-2 pl-6">
                <div className="flex justify-between items-start gap-4">
                  <Badge
                    variant="outline"
                    className="font-mono text-xs border-white/20 bg-white/5 text-slate-300"
                  >
                    {comp.code}
                  </Badge>
                  <CheckCircle2
                    className={`w-5 h-5 text-slate-600 group-hover:${theme.accentColor} transition-colors`}
                  />
                </div>
              </CardHeader>
              <CardContent className="pl-6">
                <p className="text-sm md:text-base leading-relaxed font-medium text-slate-200">
                  {comp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="sticky bottom-0 backdrop-blur-sm p-8 mt-8 -mx-4 md:static md:mt-12 md:mx-0">
        <div className="flex justify-end">
          <Button
            onClick={onNext}
            size="lg"
            className={`w-full md:w-auto shadow-lg hover:shadow-xl transition-all font-bold text-lg h-14 md:h-12 uppercase tracking-wide ${theme.buttonBg} ${theme.buttonHover} text-white border-0 ring-0`}
          >
            Next <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
