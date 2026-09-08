import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
      <div
        className="
          h-full 
          bg-primary-500 
          shadow-[0_0_12px_rgba(0,255,180,0.9),0_0_20px_rgba(0,255,180,0.6)]
          animate-[pulseGlow_1.8s_ease-in-out_infinite]
          transition-all duration-75
        "
        style={{ width: `${progress}%` }}
      />

      {/* Pulse animation */}
      <style>
        {`
          @keyframes pulseGlow {
            0% { opacity: 0.85; }
            50% { opacity: 1; }
            100% { opacity: 0.85; }
          }
        `}
      </style>
    </div>
  );
};
