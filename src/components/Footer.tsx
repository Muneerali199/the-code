import { Github, Twitter, Linkedin, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Themes", href: "#themes" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Register", href: "#register" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-coal-black border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              {/* Razor Blade Icon */}
              <div className="w-12 h-12 mr-4 relative">
                <div className="absolute inset-0 bg-gradient-gold rounded-full opacity-20" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-1 bg-primary transform rotate-12 rounded-full" />
                  <div className="w-8 h-1 bg-primary transform -rotate-12 rounded-full mt-1" />
                </div>
              </div>
              <div>
                <h3 className="font-bebas text-2xl tracking-widest text-primary">
                  THE CODE HACKATHON
                </h3>
                <p className="font-playfair text-sm text-muted-foreground italic">
                  By Order of the Peaky Blinders
                </p>
              </div>
            </div>
            
            <p className="font-playfair text-muted-foreground max-w-md leading-relaxed mb-6">
              "In the bleak midwinter, when ordinary code fails, 
              the Peaky Blinders rise to forge the future. 
              Join us in this rebellion against mediocrity."
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <MapPin size={16} className="mr-2 text-primary" />
                <span className="font-playfair">Small Heath, Birmingham, UK</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock size={16} className="mr-2 text-primary" />
                <span className="font-playfair">Dec 20-22, 2024</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2 text-primary" />
                <span className="font-playfair">info@peakyhackathon.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-foreground mb-6">
              NAVIGATION
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block font-playfair text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-foreground mb-6">
              FOLLOW THE FAMILY
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-gold-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-bebas text-sm tracking-wider text-muted-foreground mb-3">
                STAY INFORMED
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-input border border-border rounded-l-md px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors text-sm font-bebas tracking-wider">
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-playfair text-muted-foreground text-sm">
                © 2024 The Code Hackathon. All rights reserved.
              </p>
              <p className="font-playfair text-muted-foreground/70 text-xs mt-1">
                "By order of the Peaky Blinders" - Inspired by the legendary series
              </p>
            </div>
            
            <div className="flex space-x-6 text-xs">
              <a href="#" className="font-playfair text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-playfair text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-playfair text-muted-foreground hover:text-primary transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>
    </footer>
  );
};

export default Footer;