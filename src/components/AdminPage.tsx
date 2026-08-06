import React, { useState } from 'react';

const prefixes = [
  "Mr.",
  "Mrs.",
  "Mr. & Mrs.",
  "Ms.",
  "Dr.",
  "Dr. & Mrs.",
  "Dr. & Mr.",
  "Prof.",
  "Rev."
];

export const AdminPage: React.FC = () => {
  const [prefix, setPrefix] = useState(prefixes[2]); // Default to Mr. & Mrs.
  const [name, setName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!name.trim()) return;
    const url = new URL(window.location.origin);
    url.searchParams.set('prefix', prefix);
    url.searchParams.set('name', name.trim());
    setGeneratedLink(url.toString());
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!generatedLink) return;
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-6 font-sans">
      <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[#A68846]/30 relative z-10">
        <h1 className="text-3xl font-serif text-[#A68846] mb-8 text-center" style={{ textShadow: "0 0 20px rgba(166,136,70,0.5)" }}>Link Generator</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2 font-bold">Prefix</label>
            <select 
              value={prefix} 
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full bg-black/50 border border-[#A68846]/50 text-[#A68846] rounded-lg p-3 focus:outline-none focus:border-[#A68846] transition-colors cursor-pointer"
            >
              {prefixes.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2 font-bold">Guest Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full bg-black/50 border border-[#A68846]/50 text-[#A68846] rounded-lg p-3 focus:outline-none focus:border-[#A68846] transition-colors placeholder:text-[#A68846]/30"
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={!name.trim()}
            className="w-full py-3 bg-gradient-to-r from-[#A68846] to-[#91763A] text-[#111111] font-extrabold uppercase tracking-[0.2em] text-sm rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity mt-4 shadow-[0_0_15px_rgba(166,136,70,0.3)]"
          >
            Generate Link
          </button>

          {generatedLink && (
            <div className="mt-8 p-5 bg-black/60 border border-[#A68846]/30 rounded-lg break-all text-[#A0A0A0] text-sm">
              <p className="mb-5 leading-relaxed selection:bg-[#A68846] selection:text-white">{generatedLink}</p>
              <button 
                onClick={handleCopy}
                className="w-full py-2 border border-[#A68846] text-[#A68846] font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-[#A68846]/10 transition-colors flex items-center justify-center gap-2"
              >
                {copied ? '✓ Copied!' : 'Copy Link'}
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Background aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at center, #A68846 0%, transparent 70%)" }} />
    </div>
  );
};
