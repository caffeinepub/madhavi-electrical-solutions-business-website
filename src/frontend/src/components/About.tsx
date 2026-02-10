import { Award, Users, Wrench, Shield, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SiWhatsapp } from 'react-icons/si';
import { scrollToSection } from '@/lib/scroll';
import { getWhatsAppChatURL } from '@/lib/whatsapp';

export function About() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppChatURL(), '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Commitment to safety standards and best practices'
    },
    {
      icon: Wrench,
      title: 'Comprehensive Services',
      description: 'Full-spectrum electrical and engineering solutions'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Dedicated to reliable service and long-term relationships'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-industrial-blue">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Madhavi Electrical Solutions is a trusted provider of comprehensive electrical services in Ghaziabad, Uttar Pradesh. 
            We specialize in electrical engineering, installation, maintenance, and specialized systems across residential, commercial, and industrial sectors.
          </p>
        </div>

        {/* Team Photo */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-industrial-blue/20 shadow-lg overflow-hidden">
            <div className="aspect-[3/2] relative">
              <img
                src="/assets/generated/team-photo.dim_1200x800.jpg"
                alt="Madhavi Electrical Solutions professional team of certified electricians and engineers"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-industrial-blue/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Goal</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our primary goal is to provide customer satisfaction and reliable service. We bring comprehensive expertise in 
                electrical engineering solutions, panel installation and repair, wiring systems, solar energy, security systems, 
                HVAC installations, and specialized electrical services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of certified electricians, engineers, and technicians takes pride in delivering exceptional service quality, 
                maintaining the highest safety standards, and building long-term relationships with our clients. From residential 
                projects to large-scale commercial and industrial installations, Madhavi Electrical Solutions is your trusted partner 
                for all electrical and engineering needs in the Ghaziabad area.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-industrial-orange hover:bg-industrial-orange/90 text-white"
                >
                  Get a Free Quote
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-industrial-orange text-industrial-orange hover:bg-industrial-orange hover:text-white"
                >
                  <a href="tel:9953854470">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-industrial-blue/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-industrial-blue/10 mb-4 group-hover:bg-industrial-blue/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-industrial-blue" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
