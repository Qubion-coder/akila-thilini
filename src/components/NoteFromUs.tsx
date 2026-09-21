import React from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';

export const NoteFromUs: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');
  const guestName = name ? `${prefix ? `${prefix} ` : ''}${name}` : null;

  return (
    <section aria-label="A note from us" id="note" className="relative py-24 sm:py-36 px-6 overflow-hidden bg-[#111111] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} aria-hidden="true" />
      
      {/* Background Watermark */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/WhatsApp Image 2026-09-22 at 01.21.02 (1).jpeg" 
          alt="Background Watermark" 
          className="w-full h-full object-cover opacity-60" 
        />
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-12">
          <motion.div 
            className="md:col-span-12 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="leading-none select-none mb-2" aria-hidden="true">
              <span className="font-display font-bold" style={{ fontSize: "clamp(4rem, 14vw, 7rem)", color: "white", opacity: 0.7, lineHeight: 1 }}>“</span>
            </div>
            <p className="font-display font-bold italic leading-[1.4] px-2 text-center" style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)", color: "rgba(255,255,255, 0.9)", marginTop: "-1rem" }}>
              <span className="block mt-4 mb-4 text-white uppercase tracking-wider font-sans text-sm md:text-base font-semibold drop-shadow-md">
                Mr. &amp; Mrs. K. Shantha<br/>
                together with<br/>
                Mr. &amp; Mrs. Abeywickrama
              </span>
              <span className="uppercase tracking-wide font-sans text-xs md:text-sm leading-relaxed block mt-6 mb-6 drop-shadow-md">
                Request the honour of your presence of<br/>
                <span className="font-bold text-white text-sm md:text-base mt-2 inline-block">
                  {guestName ? guestName : 'Mr. / Mrs. / Miss. / Family'}
                </span>
                <br/>
                <span className="mt-2 block">on the occasion of marriage of their children</span>
              </span>
              <span className="font-serif text-3xl md:text-5xl text-white block my-6 drop-shadow-md">
                Akila &amp; Thilini
              </span>
              <span className="uppercase tracking-wide font-sans text-xs md:text-sm leading-relaxed block mt-6 text-white drop-shadow-md">
                Join us as we celebrate love, laughter and the beginning of a beautiful journey together
              </span>
            </p>
            <div className="mt-8 sm:mt-10">
              <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
                <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8))" }} />
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#FFFFFF" fillOpacity="0.85" />
                </svg>
                <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(270deg, transparent, rgba(255,255,255,0.8))" }} />
              </div>
              <p className="font-serif text-2xl sm:text-3xl" style={{ color: "white" }}>
                Akila &amp; Thilini
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
