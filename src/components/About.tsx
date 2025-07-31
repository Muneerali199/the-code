import { Code, Users, Trophy, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "SHARP MINDS",
      description: "48 hours of intense coding where only the smartest survive the challenge."
    },
    {
      icon: Users,
      title: "LOYAL CREW",
      description: "Form your gang of 2-4 members and take on the competition together."
    },
    {
      icon: Trophy,
      title: "GRAND PRIZES",
      description: "Claim your territory with prizes worth £10,000 for the winning families."
    },
    {
      icon: Clock,
      title: "NO SURRENDER",
      description: "From Friday evening to Sunday night - a test of endurance and skill."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-primary mb-6">
            BY ORDER OF THE PEAKY CODERS
          </h2>
          <p className="font-playfair text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In the smoke-filled factories of Birmingham's digital age, a new kind of rebellion emerges. 
            This isn't just a hackathon - it's a declaration of war against mediocrity. 
            Where code meets cunning, and algorithms dance with ambition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="reveal-section text-center group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-card border-2 border-primary rounded-full flex items-center justify-center group-hover:shadow-gold-glow transition-all duration-300">
                  <feature.icon size={32} className="text-primary" />
                </div>
                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="font-bebas text-xl tracking-wider text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="font-playfair text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center reveal-section">
          <blockquote className="font-playfair italic text-2xl md:text-3xl text-primary max-w-4xl mx-auto">
            "We're not a gang, we're a family. And in this family, 
            <span className="text-accent font-bold"> the code is law</span>."
          </blockquote>
          <cite className="block mt-4 font-bebas text-lg tracking-wider text-muted-foreground">
            - THOMAS SHELBY, LEAD DEVELOPER
          </cite>
        </div>
      </div>
    </section>
  );
};

export default About;