import { Award, Users, Wrench, Shield, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SiWhatsapp } from 'react-icons/si';
import { scrollToSection } from '@/lib/scroll';
import { getWhatsAppChatURL } from '@/lib/whatsapp';
import { ReducedMotionMedia } from '@/components/ReducedMotionMedia';

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
            Madhavi Electrical Solutions is a trusted provider of comprehensive electrical services in Ghaziabad. With years of experience and a commitment to excellence, we deliver reliable, safe, and efficient electrical solutions for residential, commercial, and industrial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why Choose <span className="text-industrial-orange">Madhavi Electrical</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our team of certified electricians brings expertise, professionalism, and dedication to every project. From routine maintenance to complex installations, we ensure the highest standards of safety and quality in all our work.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We pride ourselves on transparent pricing, timely service, and building long-term relationships with our clients. Your satisfaction and safety are our top priorities.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-industrial-orange hover:bg-industrial-orange/90 text-white"
              >
                Get a Free Quote
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-industrial-orange text-industrial-orange hover:bg-industrial-orange hover:text-white"
              >
                <a href="tel:9953854470">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-industrial-orange/20">
              <ReducedMotionMedia
                animatedSrc="/assets/generated/team-photo.dim_1200x800.gif"
                staticSrc="/assets/generated/team-photo.dim_1200x800.jpg"
                alt="Madhavi Electrical Solutions team at work"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Trust & Quality Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-industrial-blue/30 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <ReducedMotionMedia
                    animatedSrc="/assets/generated/trust-quality-panel-inspection.dim_1200x800.gif"
                    staticSrc="/assets/generated/electrical-panel-installation.dim_800x600.jpg"
                    alt="Professional electrician inspecting organized electrical panel"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-industrial-blue/5 to-transparent">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Quality & <span className="text-industrial-blue">Trust</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our skilled electricians inspect every installation with meticulous attention to detail. We ensure well-organized electrical panels, proper safety compliance, and premium professional standards in every project we undertake.
                  </p>
                  <div className="flex items-center gap-3 text-industrial-blue">
                    <Shield className="h-8 w-8" />
                    <span className="font-semibold text-lg">Certified & Trusted Professionals</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-industrial-blue/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-industrial-blue/10 mb-4">
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
