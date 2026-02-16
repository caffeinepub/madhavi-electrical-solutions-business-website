import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Phone, Zap, Clock, Award } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { getWhatsAppChatURL, DEFAULT_BOOKING_MESSAGE } from '@/lib/whatsapp';
import { scrollToSection } from '@/lib/scroll';
import { ReducedMotionMedia } from '@/components/ReducedMotionMedia';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppChatURL(DEFAULT_BOOKING_MESSAGE), '_blank', 'noopener,noreferrer');
  };

  const highlights = [
    { icon: Zap, text: '24/7 Emergency Service' },
    { icon: Award, text: 'Certified Professionals' },
    { icon: Clock, text: 'Same-Day Service Available' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: 'var(--header-height, 120px)' }}>
      {/* Background with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <ReducedMotionMedia
          animatedSrc="/assets/generated/hero-electrician-distribution-board.dim_1600x900.gif"
          staticSrc="/assets/generated/hero-background.dim_1200x600.jpg"
          alt="Professional electrician working inside modern electrical distribution board"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-navy/96 via-industrial-navy/93 to-industrial-dark/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,127,0,0.15),transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start animate-fade-in-up">
              <img
                src="/assets/generated/madhavi-logo-transparent.dim_200x200.png"
                alt="Madhavi Electrical Solutions"
                className="h-24 w-auto md:h-28"
              />
            </div>
            
            {/* Heading */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Madhavi Electrical
                <span className="block text-industrial-orange mt-2">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-semibold">
                Your Trusted Provider of Comprehensive Electrical Services
              </p>
            </div>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Expert electrical engineering, installation, maintenance, and specialized systems for residential, commercial, and industrial applications in Ghaziabad
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <item.icon className="h-4 w-4 text-industrial-orange" />
                  <span className="text-sm text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-industrial-orange hover:bg-industrial-orange/90 text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-industrial-orange text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                <a href="tel:9953854470">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - AMC Highlight Card */}
          <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative max-w-md w-full">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-industrial-orange/20 blur-3xl rounded-3xl" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-industrial-orange/50 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-[0_0_60px_rgba(255,127,0,0.4)] transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-industrial-orange/20 rounded-2xl">
                    <Shield className="h-12 w-12 md:h-16 md:w-16 text-industrial-orange" />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-center text-industrial-orange mb-4 tracking-wide">
                  AMC Services
                </h2>
                
                <p className="text-center text-base md:text-lg text-gray-200 mb-3 leading-relaxed">
                  Annual Maintenance Contract
                </p>
                
                <p className="text-center text-sm md:text-base text-gray-300 leading-relaxed">
                  Ensure uninterrupted performance with our reliable, cost-effective AMC services — priority support for your electrical systems year-round.
                </p>

                {/* Features list */}
                <div className="mt-6 space-y-3">
                  {['Priority Response', 'Regular Inspections', 'Cost Savings', 'Peace of Mind'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white">
                      <div className="h-2 w-2 rounded-full bg-industrial-orange" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
