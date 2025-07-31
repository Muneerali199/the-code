// components/AudioPlayer.js
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showVolume, setShowVolume] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Simplified whiskey wave animation for mobile
  const whiskeyWave = {
    hidden: { height: 0 },
    visible: (i) => ({
      height: `${Math.random() * 20 + 5}px`,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1
      }
    })
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setShowVolume(false);
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleVolume = () => {
    setShowVolume(!showVolume);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className={`fixed z-50 ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'}`}
    >
      {/* Main Player */}
      <div className="relative">
        {/* Whiskey Glass Animation (Mobile version is simpler) */}
        {isPlaying && (
          <motion.div 
            className={`absolute pointer-events-none ${
              isMobile 
                ? '-top-10 -left-10 w-20 h-20 opacity-15' 
                : '-top-16 -left-16 w-32 h-32 opacity-20'
            }`}
          >
            <svg viewBox="0 0 100 100" className="text-amber-900">
              <path 
                d="M30,10 L70,10 L75,90 L25,90 Z" 
                fill="currentColor" 
                opacity="0.8"
              />
              {[...Array(3)].map((_, i) => (
                <motion.rect
                  key={i}
                  custom={i}
                  variants={whiskeyWave}
                  initial="hidden"
                  animate="visible"
                  x={40 + i * 6}
                  y={60}
                  width="3"
                  fill="#D1A054"
                />
              ))}
            </svg>
          </motion.div>
        )}

        {/* Player Container - Compact on mobile */}
        <motion.div
          className={`
            bg-gradient-to-br from-black to-gray-900
            border border-amber-800/50 rounded-lg
            backdrop-blur-sm p-2 shadow-lg
            ${isMobile ? 'w-40' : 'w-60 hover:w-64'}
            transition-all duration-300
          `}
        >
          {/* Play Button and Controls */}
          <div className="flex items-center justify-between">
            <motion.button
              onClick={togglePlay}
              whileTap={{ scale: 0.9 }}
              className={`
                p-2 rounded-full 
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
                    className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-amber-100`}
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
                    className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-amber-100`}
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

            {/* Volume Button (Mobile) */}
            {isMobile && (
              <button 
                onClick={toggleVolume}
                className="p-2 rounded-full focus:outline-none"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-amber-100" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343" />
                </svg>
              </button>
            )}

            {/* Volume Control (Desktop shows on hover, mobile shows on tap) */}
            {(!isMobile || showVolume) && (
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, width: 0 }}
                animate={{ 
                  opacity: 1,
                  width: isMobile ? '80px' : '100px'
                }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
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
                  className={`ml-2 w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-600 ${
                    isMobile ? 'mr-1' : ''
                  }`}
                />
              </motion.div>
            )}
          </div>

          {/* Status Text - Smaller on mobile */}
          <div className={`text-center mt-1 font-serif tracking-wider text-amber-100/50 ${
            isMobile ? 'text-xxxs' : 'text-xxs'
          }`}>
            {isPlaying ? "■ Playing" : "▲ Idle"}
          </div>
        </motion.div>
      </div>

      {/* Hidden Audio Element */}
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