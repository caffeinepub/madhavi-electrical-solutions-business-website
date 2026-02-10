import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { getWhatsAppChatURL, DEFAULT_BOOKING_MESSAGE } from '@/lib/whatsapp';
import { scrollToSection } from '@/lib/scroll';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppChatURL(DEFAULT_BOOKING_MESSAGE), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: 'var(--header-height, 120px)' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1200x600.gif"
          alt="Professional electrical services and solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-navy/95 via-industrial-navy/92 to-industrial-navy-light/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-orange/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* AMC Highlight Section */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-industrial-orange/20 backdrop-blur-sm border-2 border-industrial-orange rounded-2xl shadow-[0_0_30px_rgba(255,127,0,0.4)] hover:shadow-[0_0_40px_rgba(255,127,0,0.6)] transition-all duration-300">
              <Shield className="h-7 w-7 text-industrial-orange" />
              <span className="text-2xl md:text-3xl font-bold text-industrial-orange tracking-wide">
                AMC (Annual Maintenance Contract)
              </span>
            </div>
            <p className="mt-4 text-base md:text-lg text-gray-200 max-w-3xl mx-auto px-4 leading-relaxed">
              Ensure uninterrupted performance with our Annual Maintenance Contract services — reliable, cost-effective, and priority support for your electrical systems.
            </p>
          </div>

          <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <img
              src="/assets/Logo design for Madh.png"
              alt="Madhavi Electrical Solutions"
              className="h-32 w-auto md:h-40"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Madhavi Electrical
            <span className="block text-industrial-orange mt-2">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-semibold animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Your Trusted Provider of Comprehensive Electrical Services
          </p>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Expert electrical engineering, installation, maintenance, and specialized systems for residential, commercial, and industrial applications in Ghaziabad
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-industrial-orange hover:bg-industrial-orange/90 text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <SiWhatsapp className="mr-2 h-5 w-5" />
              Book Now
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-industrial-gray/60 text-white hover:bg-industrial-gray/20 hover:border-industrial-orange text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="tel:9953854470">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
