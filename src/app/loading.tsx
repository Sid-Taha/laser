// src\app\loading.tsx
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 z-[999] overflow-hidden">
      {/* Animated laser beam effect */}
      <div className="absolute inset-0 animate-laser-scan">
        <div className="h-[2px] bg-red-500/80 shadow-[0_0_20px_2px_rgba(255,0,0,0.8)] w-full" />
      </div>

      {/* Wood texture background overlay */}
      <div className="absolute inset-0 bg-[url('/wood-texture.png')] opacity-20 mix-blend-overlay" />

      <div className="relative flex flex-col items-center space-y-8">
        {/* Animated CNC machine text */}
        <div className={orbitron.className}>
          <h1 className="text-4xl font-bold text-center mb-4 animate-pulse">
            <span className="text-red-500">{"//"}</span>
            <span className="text-gray-100"> LASER EDGE TECH </span>
            <span className="text-red-500">{"//"}</span>
          </h1>
          <h2 className="text-2xl text-center text-amber-200 font-light tracking-widest animate-glow">
            Crafting Precision Designs
          </h2>
        </div>

        {/* Animated CNC visualization */}
        <div className="relative w-64 h-48 border-2 border-amber-800/50 bg-neutral-800/50">
          {/* Laser head animation */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 animate-laser-move">
            <div className="w-8 h-8 bg-red-500/90 rounded-full shadow-[0_0_20px_5px_rgba(255,0,0,0.5)]" />
          </div>
          
          {/* Wood pattern preview animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 animate-pattern">
            <div className="w-full h-[2px] bg-amber-400/50 absolute animate-pulse" />
            <div className="h-full w-[2px] bg-amber-400/50 absolute animate-pulse" />
          </div>
        </div>

        {/* Progress indicator with wood grain effect */}
        <div className="w-72 h-3 bg-amber-900/30 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 w-full h-full bg-[url('/wood-grain.png')] opacity-30" />
          <div className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 animate-laser-progress w-full" />
        </div>

        {/* Percentage counter */}
        <div className={`${orbitron.className} text-amber-400/70 text-sm tracking-widest`}>
          INITIALIZING CUTTING PATTERN: <span className="text-red-400">...</span>
        </div>
      </div>
    </div>
  );
}

