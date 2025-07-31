import { useEffect, useState } from 'react';
import heroVideo from '@/assets/herovideo2.mp4';

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchDevice) return;
      
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHoveringInteractive(
        target.closest('button, a, [data-interactive]') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  return (
    <>
      <style jsx global>{`
        .telescope-lens {
          --size: ${isHoveringInteractive ? 'min(320px, 40vw)' : 'min(280px, 35vw)'};
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          position: absolute;
          left: ${cursorPosition.x}px;
          top: ${cursorPosition.y}px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 20;
          box-shadow: 0 0 0 200vmax rgba(0, 0, 0, 0.85);
          clip-path: circle(50% at 50% 50%);
          transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
          display: ${isTouchDevice ? 'none' : 'block'};
        }
        
        .telescope-frame {
          position: absolute;
          inset: 0;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.2),
                      inset 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .telescope-crosshair {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
        }
        
        .crosshair-horizontal {
          width: 100%;
          height: 1px;
          top: 50%;
          left: 0;
        }
        
        .crosshair-vertical {
          width: 1px;
          height: 100%;
          left: 50%;
          top: 0;
        }
        
        .telescope-ring {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
        }
        
        .btn-vintage {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.1em;
          padding: 0.8rem 2.5rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: white;
          border-radius: 2px;
          border: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          font-size: clamp(1rem, 2vw, 1.2rem);
        }
        
        .btn-vintage:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
        }
        
        .btn-vintage::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          transition: all 0.3s;
        }
        
        .btn-vintage:hover::after {
          left: 100%;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
          }
          .btn-container {
            flex-direction: column;
            gap: 1rem !important;
          }
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark Overlay - Lighter on mobile for better readability */}
        <div className={`absolute inset-0 z-10 ${isTouchDevice ? 'bg-black/50' : 'bg-black/60'}`} />
        
        {/* Telescope Effect - Hidden on touch devices */}
        {!isTouchDevice && (
          <div className="telescope-lens">
            <div className="telescope-frame">
              <div className="telescope-crosshair crosshair-horizontal" />
              <div className="telescope-crosshair crosshair-vertical" />
              <div className="telescope-ring" style={{ inset: '15%' }} />
              <div className="telescope-ring" style={{ inset: '30%' }} />
              <div className="telescope-ring" style={{ inset: '45%' }} />
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-30 text-center px-4 max-w-6xl mx-auto w-full">
          <div className="space-y-4 md:space-y-8 px-4">
            <h1 className="hero-title font-bebas text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider leading-tight">
              <span className="block text-white drop-shadow-lg">THE CODE</span>
              <span className="block text-primary drop-shadow-md">BY ORDER OF THE</span>
              <span className="block text-accent font-bold drop-shadow-lg">HACKATHON</span>
            </h1>
            
            <p className="hero-subtitle font-playfair text-lg sm:text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
              "In the bleak midwinter, when the code runs cold, only the sharpest minds survive. 
              Join us for 48 hours of rebellion against ordinary programming."
            </p>
            
            <div className="btn-container flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 md:mt-12">
              <button 
                onClick={() => document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-vintage"
                data-interactive
              >
                REGISTER NOW
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bebas text-base sm:text-lg tracking-wider text-white hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary pb-1"
                data-interactive
              >
                LEARN MORE
              </button>
            </div>
          </div>
          
          {/* Scroll indicator - hidden on mobile */}
          {!isTouchDevice && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;