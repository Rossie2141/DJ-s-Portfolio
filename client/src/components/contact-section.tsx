import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center" data-testid="contact-title">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-12 text-center" data-testid="contact-description">
          Let's collaborate on exciting data science projects and opportunities
        </p>
        
        <div className="bg-card rounded-lg p-8 netflix-shadow">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" data-testid="contact-info-title">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start" data-testid="contact-email">
                  <Mail className="text-2xl text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:contact@dataforge.dev" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      shriprasaddj7@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start" data-testid="contact-linkedin">
                  <Linkedin className="text-2xl text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/shriprasad-dj-485312248" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/Shriprasad DJ
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start" data-testid="contact-github">
                  <Github className="text-2xl text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/Rossie2141?tab=repositories" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/dataforge-umass
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start" data-testid="contact-location">
                  <MapPin className="text-2xl text-primary mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Dartmouth, Massachusetts</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6" data-testid="contact-form-title">Quick Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold mb-2">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold mb-2">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold mb-2">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-background border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground px-6 py-3 rounded font-semibold transition-all netflix-shadow hover:scale-105"
                  data-testid="button-send-message"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
