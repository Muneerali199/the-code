import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import trailerVideo from '@/assets/loading.mp4';

const LoadingScreen = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // First try to play with sound
    const playVideo = () => {
      video.play()
        .then(() => console.log("Video playing successfully"))
        .catch(err => {
          console.log("Autoplay failed, trying muted:", err);
          video.muted = true;
          video.play()
            .then(() => console.log("Video playing muted"))
            .catch(err => {
              console.error("Video failed completely:", err);
              setVideoError(true);
              setTimeout(onComplete, 2000); // Skip after 2s if video fails
            });
        });
    };

    // Different strategies to start playback
    const handleCanPlay = () => playVideo();
    const handleLoadedData = () => playVideo();

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', () => setVideoError(true));

    // Fallback timeout if nothing works
    const fallbackTimer = setTimeout(() => {
      if (video.readyState < 3) { // If video not loaded yet
        setVideoError(true);
        onComplete();
      }
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.pause();
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          {/* Video Player with Multiple Fallbacks */}
          {!videoError ? (
            <video
              ref={videoRef}
              src={trailerVideo}
              muted={false}
              playsInline
              loop={false}
              preload="auto"
              className="w-full h-full object-cover"
              onEnded={onComplete}
            >
              <source src={trailerVideo} type="video/mp4" />
            </video>
          ) : (
            <div className="text-white text-center p-8">
              <p className="text-2xl mb-4">Video unavailable</p>
              <button 
                onClick={onComplete}
                className="px-6 py-2 bg-amber-600 hover:bg-amber-700 transition-colors"
              >
                ENTER SITE
              </button>
            </div>
          )}

          {/* Loading Text (shown even if video fails) */}
          <div className="absolute bottom-20 left-0 right-0 text-center">
            <p className="font-bebas text-2xl text-amber-400 tracking-widest">
              BY ORDER OF THE PEAKY HACKERS
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;