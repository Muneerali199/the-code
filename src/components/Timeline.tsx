import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      time: "6:00 PM",
      title: "REGISTRATION & ARRIVALS",
      description: "Check-in begins. Get your team credentials and enter the den.",
      icon: Users,
      day: "FRIDAY"
    },
    {
      time: "7:00 PM", 
      title: "OPENING CEREMONY",
      description: "Welcome to the family. Rules are explained, challenges revealed.",
      icon: Calendar,
      day: "FRIDAY"
    },
    {
      time: "8:00 PM",
      title: "HACKING BEGINS",
      description: "The clock starts ticking. 48 hours of intense coding commence.",
      icon: Clock,
      day: "FRIDAY"
    },
    {
      time: "12:00 AM",
      title: "MIDNIGHT FUEL",
      description: "Coffee, energy drinks, and late-night sustenance for the warriors.",
      icon: MapPin,
      day: "SATURDAY"
    },
    {
      time: "8:00 AM",
      title: "SUNRISE CHECKPOINT",
      description: "Morning briefing and team progress check-ins.",
      icon: Calendar,
      day: "SATURDAY"
    },
    {
      time: "12:00 PM",
      title: "MIDDAY MASSACRE",
      description: "Lunch and tech talks from industry veterans and mentors.",
      icon: Users,
      day: "SATURDAY"
    },
    {
      time: "6:00 PM",
      title: "EVENING EVALUATION",
      description: "Mentor sessions and progress reviews with the bosses.",
      icon: Clock,
      day: "SATURDAY"
    },
    {
      time: "12:00 PM",
      title: "FINAL SUBMISSIONS",
      description: "Pencils down. Your fate is sealed. No more changes allowed.",
      icon: MapPin,
      day: "SUNDAY"
    },
    {
      time: "2:00 PM",
      title: "JUDGEMENT DAY",
      description: "Present your creation to the jury. Make Tommy proud.",
      icon: Calendar,
      day: "SUNDAY"
    },
    {
      time: "5:00 PM",
      title: "CORONATION",
      description: "Winners announced. The new kings and queens are crowned.",
      icon: Users,
      day: "SUNDAY"
    }
  ];

  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.day]) {
      acc[event.day] = [];
    }
    acc[event.day].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <section id="timeline" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-primary mb-6">
            THE GRAND SCHEDULE
          </h2>
          <p className="font-playfair text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Time is money, and in this business, every minute counts. 
            Here's how the next 48 hours will unfold.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {Object.entries(groupedEvents).map(([day, dayEvents], dayIndex) => (
            <div key={day} className="mb-16 reveal-section" style={{ animationDelay: `${dayIndex * 200}ms` }}>
              <div className="text-center mb-12">
                <h3 className="font-bebas text-3xl md:text-4xl tracking-wider text-accent mb-2">
                  {day}
                </h3>
                <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full hidden md:block" />

                {dayEvents.map((event, index) => (
                  <div 
                    key={`${day}-${index}`}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-vintage transition-all duration-300 group hover:border-primary/50">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 group-hover:shadow-gold-glow transition-all duration-300">
                            <event.icon size={20} className="text-primary-foreground" />
                          </div>
                          <span className="font-bebas text-xl tracking-wider text-primary">
                            {event.time}
                          </span>
                        </div>
                        
                        <h4 className="font-bebas text-xl tracking-wider text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </h4>
                        
                        <p className="font-playfair text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Mobile timeline indicator */}
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background absolute left-4 md:hidden" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-16 text-center reveal-section">
          <div className="bg-card border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MapPin size={32} className="text-primary mr-3" />
              <h3 className="font-bebas text-2xl md:text-3xl tracking-wider text-primary">
                GARRISON PUB & TECH CENTER
              </h3>
            </div>
            <p className="font-playfair text-muted-foreground mb-4">
              Small Heath, Birmingham - Where legends are born and code is forged
            </p>
            <p className="font-playfair text-sm text-muted-foreground/70">
              * All times are GMT. Latecomers will face the wrath of the Peaky Blinders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;