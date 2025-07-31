// components/AudioPlayer.js
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  // Whiskey glass wave animation (only visible when playing)
  const whiskeyWave = {
    hidden: { height: 0 },
    visible: (i) => ({
      height: `${Math.random() * 30 + 10}px`,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1
      }
    })
  };

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-6 right-6 z-50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Main Player - Sleek & Timeless */}
      <div className="relative">
        {/* Whiskey Glass Animation (Hidden when paused) */}
        {isPlaying && (
          <motion.div 
            className="absolute -top-16 -left-16 w-32 h-32 opacity-20 pointer-events-none"
            animate={{ rotate: isHovered ? 5 : 0 }}
          >
            <svg viewBox="0 0 100 100" className="text-amber-900">
              <path 
                d="M30,10 L70,10 L75,90 L25,90 Z" 
                fill="currentColor" 
                opacity="0.8"
              />
              {[...Array(5)].map((_, i) => (
                <motion.rect
                  key={i}
                  custom={i}
                  variants={whiskeyWave}
                  initial="hidden"
                  animate="visible"
                  x={35 + i * 6}
                  y={60}
                  width="4"
                  fill="#D1A054"
                />
              ))}
            </svg>
          </motion.div>
        )}

        {/* Player Container - Dark Leather & Gold */}
        <motion.div
          animate={{
            boxShadow: isHovered 
              ? "0 10px 25px -5px rgba(188, 141, 57, 0.4)" 
              : "0 4px 6px -1px rgba(0, 0, 0, 0.5)"
          }}
          className={`
            bg-gradient-to-br from-black to-gray-900
            border border-amber-800/50 rounded-lg
            backdrop-blur-sm p-3 shadow-lg
            w-60 hover:w-64 transition-all duration-300
          `}
        >
          {/* Razor Blade Play Button */}
          <div className="flex items-center justify-between">
            <motion.button
              onClick={togglePlay}
              whileTap={{ scale: 0.9 }}
              className={`
                p-3 rounded-full 
                ${isPlaying ? 'bg-amber-900/80' : 'bg-amber-800'}
                relative overflow-hidden
                focus:outline-none focus:ring-2 focus:ring-amber-600
              `}
            >
              <AnimatePresence>
                {isPlaying ? (
                  <motion.svg
                    key="pause"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="play"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Volume Control (Only appears on hover) */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, width: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                width: isHovered ? '100px' : '0px'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-100 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => {
                  setVolume(e.target.value);
                  audioRef.current.volume = e.target.value;
                }}
                className="ml-2 w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </motion.div>
          </div>

          {/* Hidden Status Text (No timers) */}
          <motion.div 
            className="text-xxs text-center mt-1 font-serif tracking-wider text-amber-100/50"
            animate={{ 
              textShadow: isPlaying ? '0 0 4px rgba(188, 141, 57, 0.6)' : 'none'
            }}
          >
            {isPlaying ? "■ Playing" : "▲ Idle"}
          </motion.div>
        </motion.div>
      </div>

      {/* Hidden Audio Element (Auto-looped) */}
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        preload="auto"
        loop
      />
    </motion.div>
  );
};

export default AudioPlayer;