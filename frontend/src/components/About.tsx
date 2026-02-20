import { Shield } from "lucide-react";
import { lectures } from "../data/lectures";

export const About = () => {
  return (
    <section id="about" className="container py-8 sm:py-12">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-white/40 dark:border-slate-800/60">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <div className="flex items-center text-primary font-bold tracking-widest text-[10px] md:text-xs lg:text-sm uppercase mb-3">
            <Shield className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
            Disaster Preparedness Training
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-50 tracking-tighter uppercase relative leading-[1.1] md:leading-tight lg:leading-tight drop-shadow-sm">
            <span className="relative z-10">
              Hazard Awareness Interactive Portal
            </span>
          </h1>
          <p className="text-slate-700 dark:text-slate-400 mt-4 md:mt-6 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
            a learning platform dedicated to natural disasters—explaining their
            science, impact, and prevention through clear, structured, and
            engaging educational content.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-8 md:mt-0 self-start md:self-end">
          <div className="text-left md:text-right pl-4 md:pl-6 border-l-2 border-slate-200 dark:border-slate-800">
            <div className="text-4xl lg:text-5xl font-black text-primary leading-none">
              {lectures.length}
            </div>
            <div className="text-[10px] lg:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1 md:mt-2">
              Active Modules
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
