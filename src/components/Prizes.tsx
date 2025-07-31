import { Trophy, Crown, Award, Gift } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      rank: "1ST PLACE",
      title: "THE CROWN",
      amount: "£5,000",
      description: "Rule the entire operation. Cash prize, latest tech gadgets, and eternal glory.",
      icon: Crown,
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
      glow: "shadow-[0_0_40px_rgba(234,179,8,0.4)]",
      items: [
        "£5,000 Cash Prize",
        "Latest MacBook Pro M3",
        "Gaming Setup Worth £2,000",
        "Internship Opportunities",
        "Mentorship Program"
      ]
    },
    {
      rank: "2ND PLACE", 
      title: "THE LIEUTENANT",
      amount: "£3,000",
      description: "Tommy's right hand. Substantial rewards for the worthy second.",
      icon: Trophy,
      gradient: "from-slate-300 via-slate-400 to-slate-500",
      glow: "shadow-[0_0_30px_rgba(148,163,184,0.4)]",
      items: [
        "£3,000 Cash Prize",
        "iPad Pro + Apple Pencil",
        "Mechanical Keyboard Set",
        "Tech Course Vouchers",
        "Industry Networking"
      ]
    },
    {
      rank: "3RD PLACE",
      title: "THE ENFORCER", 
      amount: "£2,000",
      description: "Muscle of the operation. Respected and well compensated.",
      icon: Award,
      gradient: "from-amber-600 via-amber-700 to-amber-800",
      glow: "shadow-[0_0_25px_rgba(217,119,6,0.4)]",
      items: [
        "£2,000 Cash Prize",
        "Wireless Headphones",
        "Smart Watch",
        "Online Course Access",
        "Certificate of Excellence"
      ]
    }
  ];

  const specialPrizes = [
    {
      title: "BEST INNOVATION",
      description: "For the most creative and groundbreaking solution",
      reward: "£1,000 + Innovation Award"
    },
    {
      title: "PEOPLE'S CHOICE",
      description: "Voted by participants for the most impressive presentation",
      reward: "£750 + Community Trophy"
    },
    {
      title: "BEST DESIGN",
      description: "For exceptional user experience and visual appeal",
      reward: "£500 + Design Tools License"
    },
    {
      title: "ROOKIE OF THE YEAR",
      description: "Best project by first-time hackathon participants",
      reward: "£500 + Mentorship Program"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-primary mb-6">
            CLAIM YOUR FORTUNE
          </h2>
          <p className="font-playfair text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In the Peaky Blinders' world, loyalty is rewarded and excellence is celebrated. 
            These are the spoils of victory for those brave enough to seize them.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div 
              key={prize.rank}
              className="reveal-section group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`relative h-full bg-card border-2 border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 ${prize.glow} group-hover:${prize.glow}`}>
                {/* Rank Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`bg-gradient-to-r ${prize.gradient} text-black font-bebas text-sm tracking-wider px-4 py-2 rounded-full shadow-lg`}>
                    {prize.rank}
                  </div>
                </div>

                {/* Icon */}
                <div className="text-center mb-6 mt-4">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${prize.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <prize.icon size={32} className="text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="font-bebas text-2xl tracking-wider text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {prize.title}
                  </h3>
                  <div className="font-bebas text-3xl tracking-wider text-primary mb-4">
                    {prize.amount}
                  </div>
                  <p className="font-playfair text-muted-foreground leading-relaxed">
                    {prize.description}
                  </p>
                </div>

                {/* Prize Items */}
                <div className="space-y-2">
                  {prize.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="font-playfair">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Prizes */}
        <div className="reveal-section">
          <div className="text-center mb-12">
            <h3 className="font-bebas text-3xl md:text-4xl tracking-wider text-accent mb-4">
              SPECIAL RECOGNITIONS
            </h3>
            <p className="font-playfair text-muted-foreground">
              Additional rewards for exceptional achievements in specific categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((prize, index) => (
              <div 
                key={prize.title}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-vintage transition-all duration-300 group hover:border-accent/50"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <Gift size={20} className="text-accent mr-3" />
                  <h4 className="font-bebas text-lg tracking-wider text-foreground group-hover:text-accent transition-colors duration-300">
                    {prize.title}
                  </h4>
                </div>
                
                <p className="font-playfair text-sm text-muted-foreground mb-4 leading-relaxed">
                  {prize.description}
                </p>
                
                <div className="text-center">
                  <span className="font-bebas text-primary tracking-wider">
                    {prize.reward}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Prize Pool */}
        <div className="mt-16 text-center reveal-section">
          <div className="bg-secondary/50 border-2 border-primary/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-bebas text-2xl md:text-3xl tracking-wider text-foreground mb-4">
              TOTAL PRIZE POOL
            </h3>
            <div className="font-bebas text-5xl md:text-6xl tracking-wider text-primary mb-4 animate-glow-pulse">
              £15,000+
            </div>
            <p className="font-playfair text-muted-foreground italic">
              "The spoils of war for those who dare to challenge the status quo"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;