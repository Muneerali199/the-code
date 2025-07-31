import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loadingscreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Themes from '@/components/Themes';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/Prizes';
import Register from '@/components/Register';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/audioplayer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import backgroundMusic from '@/assets/music.mp3';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useScrollAnimation();

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Loading Screen */}
      {isLoading && isMounted && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Content (always in DOM but hidden during loading) */}
      <div className={isLoading ? 'hidden' : 'block'}>
        <Navigation />
        <Hero />
        <About />
        <Themes />
        <Timeline />
        <Prizes />
        <Register />
        <Footer />
        <AudioPlayer audioSrc={backgroundMusic} />
      </div>
    </div>
  );
};

export default Index;