import { useEffect, useState } from 'react';
import heroVideo from '@/assets/herovideo.mp4';

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHoveringInteractive(
        target.closest('button, a, [data-interactive]') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style jsx global>{`
        .telescope-lens {
          --size: ${isHoveringInteractive ? '320px' : '280px'};
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
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none">
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
          </video>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Telescope Effect */}
        <div className="telescope-lens">
          <div className="telescope-frame">
            <div className="telescope-crosshair crosshair-horizontal" />
            <div className="telescope-crosshair crosshair-vertical" />
            <div className="telescope-ring" style={{ inset: '15%' }} />
            <div className="telescope-ring" style={{ inset: '30%' }} />
            <div className="telescope-ring" style={{ inset: '45%' }} />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider">
              <span className="block text-white drop-shadow-lg">THE CODE</span>
              <span className="block text-primary drop-shadow-md">BY ORDER OF THE</span>
              <span className="block text-accent font-bold drop-shadow-lg">HACKATHON</span>
            </h1>
            
            <p className="font-playfair text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
              "In the bleak midwinter, when the code runs cold, only the sharpest minds survive. 
              Join us for 48 hours of rebellion against ordinary programming."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <button 
                onClick={() => document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-vintage"
                data-interactive
              >
                REGISTER NOW
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bebas text-lg tracking-wider text-white hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary pb-1"
                data-interactive
              >
                LEARN MORE
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;