import { useEffect } from 'react';
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

// Import your audio file from assets
import backgroundMusic from '@/assets/music.mp3';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Themes />
      <Timeline />
      <Prizes />
      <Register />
      <Footer />
      
      {/* Add the AudioPlayer component with your audio file */}
      <AudioPlayer audioSrc={backgroundMusic} />
    </div>
  );
};

export default Index;