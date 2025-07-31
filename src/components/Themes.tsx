import { Brain, Smartphone, Shield, Gamepad2, Banknote, Heart } from 'lucide-react';

const Themes = () => {
  const themes = [
    {
      icon: Brain,
      title: "ARTIFICIAL INTELLIGENCE",
      description: "Build the future with machine learning, neural networks, and intelligent systems that think like a Shelby.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "MOBILE REVOLUTION", 
      description: "Create mobile applications that rule the streets. iOS, Android, or cross-platform - claim your territory.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "CYBERSECURITY",
      description: "Protect the family's secrets. Build security solutions that would make even Tommy Shelby feel safe.",
      color: "text-primary"
    },
    {
      icon: Gamepad2,
      title: "GAMING & ENTERTAINMENT",
      description: "Develop games and entertainment platforms that captivate like a Peaky Blinders episode.",
      color: "text-accent"
    },
    {
      icon: Banknote,
      title: "FINTECH",
      description: "Revolutionary financial technology. Because in this business, money talks and code whispers.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "SOCIAL IMPACT",
      description: "Build solutions that help the community. Even the Peaky Blinders looked after their own.",
      color: "text-accent"
    }
  ];

  return (
    <section id="themes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-primary mb-6">
            CHOOSE YOUR BATTLEFIELD
          </h2>
          <p className="font-playfair text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every great empire has its territories. Pick your domain and show the world 
            what happens when innovation meets determination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div 
              key={theme.title}
              className="reveal-section group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full bg-card border border-border rounded-lg p-8 hover:shadow-vintage transition-all duration-300 hover:border-primary/50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold-glow transition-all duration-300">
                      <theme.icon size={24} className={`${theme.color} group-hover:text-primary-foreground transition-colors duration-300`} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bebas text-xl tracking-wider text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {theme.title}
                    </h3>
                    
                    <p className="font-playfair text-muted-foreground leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="mt-6 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center reveal-section">
          <div className="bg-secondary/50 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-bebas text-2xl md:text-3xl tracking-wider text-primary mb-4">
              CAN'T CHOOSE JUST ONE?
            </h3>
            <p className="font-playfair text-muted-foreground mb-6">
              True Peaky Blinders never limit themselves. Combine themes, break boundaries, 
              and create something the world has never seen before.
            </p>
            <button className="btn-vintage">
              EXPLORE ALL POSSIBILITIES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Themes;