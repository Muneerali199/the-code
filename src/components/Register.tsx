import { useState } from 'react';
import { User, Mail, Users, Code, Send } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeaderName: '',
    teamLeaderEmail: '',
    teamSize: '2',
    experience: 'intermediate',
    preferredTheme: 'ai'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Registration data:', formData);
    alert('Registration successful! Welcome to the family.');
  };

  return (
    <section id="register" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-primary mb-6">
            JOIN THE RANKS
          </h2>
          <p className="font-playfair text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Peaky Blinders are always looking for fresh talent. 
            Fill out your credentials and earn your place in the family.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <div className="reveal-section">
              <div className="bg-card border border-border rounded-lg p-8 shadow-vintage">
                <h3 className="font-bebas text-2xl tracking-wider text-foreground mb-6 flex items-center">
                  <User size={24} className="text-primary mr-3" />
                  RECRUITMENT FORM
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Team Name */}
                  <div>
                    <label className="block font-bebas text-sm tracking-wider text-muted-foreground mb-2">
                      GANG NAME *
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                      placeholder="The Sharp Coders"
                    />
                  </div>

                  {/* Team Leader Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bebas text-sm tracking-wider text-muted-foreground mb-2">
                        LEADER NAME *
                      </label>
                      <input
                        type="text"
                        name="teamLeaderName"
                        value={formData.teamLeaderName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                        placeholder="Thomas Shelby"
                      />
                    </div>

                    <div>
                      <label className="block font-bebas text-sm tracking-wider text-muted-foreground mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="teamLeaderEmail"
                        value={formData.teamLeaderEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                        placeholder="tommy@peakyblinders.com"
                      />
                    </div>
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="block font-bebas text-sm tracking-wider text-muted-foreground mb-2">
                      GANG SIZE *
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    >
                      <option value="1">Solo Operator (1)</option>
                      <option value="2">Dynamic Duo (2)</option>
                      <option value="3">Power Trio (3)</option>
                      <option value="4">Full Squad (4)</option>
                    </select>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block font-bebas text-sm tracking-wider text-muted-foreground mb-2">
                      EXPERIENCE LEVEL *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    >
                      <option value="beginner">Rookie (0-1 years)</option>
                      <option value="intermediate">Seasoned (2-4 years)</option>
                      <option value="advanced">Veteran (5+ years)</option>
                      <option value="expert">Legend (10+ years)</option>
                    </select>
                  </div>

                  {/* Preferred Theme */}
                  <div>
                    <label className="block font-bebas text-sm tracking-wider text-muted-foreground mb-2">
                      PREFERRED BATTLEGROUND
                    </label>
                    <select
                      name="preferredTheme"
                      value={formData.preferredTheme}
                      onChange={handleInputChange}
                      className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    >
                      <option value="ai">Artificial Intelligence</option>
                      <option value="mobile">Mobile Revolution</option>
                      <option value="security">Cybersecurity</option>
                      <option value="gaming">Gaming & Entertainment</option>
                      <option value="fintech">FinTech</option>
                      <option value="social">Social Impact</option>
                      <option value="open">Open Innovation</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-vintage flex items-center justify-center group"
                  >
                    <Send size={20} className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    ENLIST NOW
                  </button>
                </form>
              </div>
            </div>

            {/* Info Panel */}
            <div className="reveal-section" style={{ animationDelay: '200ms' }}>
              <div className="space-y-8">
                {/* Registration Info */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bebas text-xl tracking-wider text-primary mb-4 flex items-center">
                    <Users size={20} className="mr-3" />
                    RECRUITMENT DETAILS
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-bebas tracking-wider text-muted-foreground">REGISTRATION FEE:</span>
                      <span className="font-playfair text-foreground">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bebas tracking-wider text-muted-foreground">TEAM SIZE:</span>
                      <span className="font-playfair text-foreground">1-4 Members</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bebas tracking-wider text-muted-foreground">AGE LIMIT:</span>
                      <span className="font-playfair text-foreground">16+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bebas tracking-wider text-muted-foreground">DEADLINE:</span>
                      <span className="font-playfair text-accent">Dec 15, 2024</span>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bebas text-xl tracking-wider text-primary mb-4 flex items-center">
                    <Code size={20} className="mr-3" />
                    WHAT YOU NEED
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Laptop/Computer with development setup",
                      "Internet connection for research",
                      "Determination and creative thinking",
                      "Team coordination skills",
                      "48 hours of your finest work"
                    ].map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="font-playfair text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bebas text-xl tracking-wider text-primary mb-4 flex items-center">
                    <Mail size={20} className="mr-3" />
                    QUESTIONS?
                  </h4>
                  <p className="font-playfair text-muted-foreground text-sm mb-4">
                    Need help or have questions about the registration? 
                    The Peaky Blinders are here to assist.
                  </p>
                  <div className="text-sm space-y-2">
                    <div>
                      <span className="font-bebas tracking-wider text-muted-foreground">EMAIL: </span>
                      <span className="font-playfair text-foreground">info@peakyhackathon.com</span>
                    </div>
                    <div>
                      <span className="font-bebas tracking-wider text-muted-foreground">PHONE: </span>
                      <span className="font-playfair text-foreground">+44 121 XXX XXXX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;