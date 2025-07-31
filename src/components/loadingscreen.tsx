import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import trailerVideo from '@/assets/loading.mp4';
import loadingAudio from '@/assets/loadingmusic.mp3'; // Import your audio file

const LoadingScreen = ({ onComplete }) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video || !audio) return;

    // When both media are ready
    const handleCanPlay = () => {
      const playMedia = () => {
        video.play()
          .then(() => audio.play())
          .catch(() => {
            // Fallback muted if autoplay fails
            video.muted = true;
            audio.muted = true;
            video.play().then(() => audio.play());
          })
          .finally(() => setIsReady(true));
      };

      if (video.readyState > 3 && audio.readyState > 3) {
        playMedia();
      } else {
        video.addEventListener('canplay', playMedia, { once: true });
        audio.addEventListener('canplay', playMedia, { once: true });
      }
    };

    // Auto-complete after 10s
    const timer = setTimeout(onComplete, 10000);

    // Start loading media
    handleCanPlay();

    return () => {
      clearTimeout(timer);
      video.pause();
      audio.pause();
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={trailerVideo}
          muted={false}
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Audio Element (hidden) */}
        <audio
          ref={audioRef}
          src={loadingAudio}
          preload="auto"
        />

        {/* Loading Indicator */}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-pulse font-bebas text-2xl text-amber-400">
              LOADING THE SYNDICATE...
            </div>
          </div>
        )}

        {/* Peaky Blinders Text */}
        <div className="absolute bottom-20 left-0 right-0 text-center">
          <p className="font-bebas text-2xl text-amber-400 tracking-widest">
            BY ORDER OF THE PEAKY HACKERS
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;