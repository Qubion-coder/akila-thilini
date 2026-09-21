import React from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';

interface ViewInvitationProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<ViewInvitationProps> = ({ onComplete }) => {
  const [searchParams] = useSearchParams();
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#FDFBF7] overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/ChatGPT Image Aug 6, 2026, 05_51_32 PM.png" 
          alt="Intro Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at center, #A68846 0%, transparent 70%)" }} />
      <div className="relative z-10 text-center flex flex-col items-center justify-between sm:justify-center w-full h-[100dvh] py-24 sm:py-0 px-4">
        <h1 className="flex flex-col items-center gap-2 sm:gap-3 mt-4 sm:mt-0 mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm md:text-base tracking-[0.3em] sm:tracking-[0.4em] uppercase text-white mb-2 sm:mb-4 font-semibold">
            The Wedding Invitation
          </span>

          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            AKILA
          </span>
          <div className="flex items-center gap-3 opacity-90">
            <div className="h-[1px] w-8 sm:w-16 bg-white/60"></div>
            <span className="text-3xl sm:text-4xl font-display italic text-white lowercase tracking-widest px-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              and
            </span>
            <div className="h-[1px] w-8 sm:w-16 bg-white/60"></div>
          </div>
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            THILINI
          </span>
        </h1>
        <button
          onClick={onComplete}
          className="mb-8 sm:mb-0 group relative px-10 sm:px-12 py-4 sm:py-5 bg-white/30 backdrop-blur-sm border border-[#111111]/50 text-[#111111] rounded-full uppercase tracking-[0.25em] text-xs sm:text-sm overflow-hidden hover:scale-105 transition-all duration-500 hover:border-[#111111] hover:bg-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] cursor-pointer"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#111111]/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          <span className="relative z-10 font-bold">View Invitation</span>
        </button>
      </div>
    </motion.div>
  );
};
