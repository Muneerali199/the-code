import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-smoke" />
      
      {/* Smoke Animation Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-smoke-gray/20 rounded-full blur-3xl animate-smoke-drift" />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-smoke-gray/15 rounded-full blur-2xl animate-smoke-drift" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-smoke-gray/10 rounded-full blur-3xl animate-smoke-drift" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Main Title */}
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider text-shadow-vintage">
            <span className="block text-foreground">THE CODE</span>
            <span className="block text-primary animate-glow-pulse">BY ORDER OF THE</span>
            <span className="block text-accent font-bold">HACKATHON</span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-playfair text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
            "In the bleak midwinter, when the code runs cold, only the sharpest minds survive. 
            Join us for 48 hours of rebellion against ordinary programming."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button 
              onClick={() => document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-vintage animate-glow-pulse"
            >
              REGISTER NOW
            </button>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-bebas text-lg tracking-wider text-foreground hover:text-primary transition-all duration-300 border-b-2 border-transparent hover:border-primary"
            >
              LEARN MORE
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;