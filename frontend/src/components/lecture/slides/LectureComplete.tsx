import React from "react";
interface LectureCompleteProps {}

export const LectureComplete: React.FC<LectureCompleteProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-4 max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase tracking-tighter">
          Lecture Completed
        </h2>
      </div>
    </div>
  );
};
