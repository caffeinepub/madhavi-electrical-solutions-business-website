import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Wrench, Plug, Settings, Fan, Lightbulb, 
  Shield, Camera,
  Wind, Palette, Phone
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { scrollToSection } from '@/lib/scroll';
import { getWhatsAppChatURL } from '@/lib/whatsapp';
import { ReducedMotionMedia } from '@/components/ReducedMotionMedia';

export function Services() {
  const handleBookService = () => {
    scrollToSection('contact');
  };

  const handleWhatsAppClick = (serviceName: string) => {
    const message = `Hello! I would like to book ${serviceName} service.`;
    window.open(getWhatsAppChatURL(message), '_blank', 'noopener,noreferrer');
  };

  // Core 4 services highlighted at the top
  const coreServices = [
    {
      title: 'Home Wiring',
      description: 'Complete residential wiring solutions including new installations, rewiring, and electrical system upgrades. Safe, code-compliant wiring for your home with quality materials and expert workmanship.',
      icon: Home,
      animatedImage: '/assets/generated/service-home-wiring.dim_800x600.gif',
      staticImage: '/assets/generated/service-home-wiring.dim_800x600.jpg'
    },
    {
      title: 'Fuse/Panel Upgrades',
      description: 'Professional electrical panel and fuse box upgrades to meet modern power demands. Safe installation of circuit breakers, load centers, and distribution panels with proper load balancing.',
      icon: Settings,
      animatedImage: '/assets/generated/services-panel-wiring-closeup.dim_1200x800.gif',
      staticImage: '/assets/generated/service-fuse-panel-upgrades.dim_800x600.jpg'
    },
    {
      title: 'Light Fitting/LED Work',
      description: 'Expert installation and repair of all types of lighting fixtures including LED lights, chandeliers, recessed lighting, and outdoor lighting. Energy-efficient LED solutions for homes and businesses.',
      icon: Lightbulb,
      animatedImage: '/assets/generated/light-installation-led-ceiling.dim_1200x800.gif',
      staticImage: '/assets/generated/service-led-light-fitting.dim_800x600.jpg'
    },
    {
      title: 'Appliance Installation',
      description: 'Professional installation of electrical appliances including fans, air conditioners, water heaters, and kitchen appliances. Proper electrical connections ensuring safety and optimal performance.',
      icon: Fan,
      animatedImage: '/assets/generated/service-appliance-installation.dim_800x600.gif',
      staticImage: '/assets/generated/service-appliance-installation.dim_800x600.jpg'
    }
  ];

  const additionalServices = [
    {
      title: 'Electrical Engineering',
      description: 'Complete electrical engineering services including comprehensive system design, detailed planning, and professional implementation. Expert solutions for complex electrical projects with focus on safety, efficiency, and reliability.',
      icon: Lightbulb,
      image: '/assets/generated/electrical-engineering-tools.dim_800x600.gif',
      category: 'Engineering Services'
    },
    {
      title: 'General Installation, Repair & Maintenance',
      description: 'Comprehensive electrical installation, repair, and preventive maintenance services. Regular inspections, testing, troubleshooting, and maintenance programs to ensure system reliability and prevent unexpected failures.',
      icon: Wrench,
      image: '/assets/generated/electrical-maintenance.dim_800x600.gif',
      category: 'Installation & Maintenance'
    },
    {
      title: 'Electrical Socket & Switch Installation/Repair/Relocation',
      description: 'Complete socket and switch services including installation, repair, and relocation. Professional installation of outlets, switches, dimmers, and specialty receptacles with proper grounding and safety compliance.',
      icon: Plug,
      image: '/assets/generated/socket-switch-installation.dim_800x600.gif',
      category: 'Wiring & Components'
    },
    {
      title: 'Electrical Fuse Changing',
      description: 'Expert fuse replacement and electrical protection services. Professional assessment and replacement of fuses, circuit protection devices, and safety equipment to maintain electrical system integrity.',
      icon: Shield,
      image: '/assets/generated/electrical-fuse-changing.dim_800x600.gif',
      category: 'Wiring & Components'
    },
    {
      title: 'Cooler Installation',
      description: 'Complete air cooler installation and setup services. Professional installation of evaporative coolers with proper electrical connections, water supply setup, and ventilation requirements.',
      icon: Wind,
      image: '/assets/generated/cooler-installation.dim_800x600.gif',
      category: 'HVAC & Cooling'
    },
    {
      title: 'AC Service (Installation, Repair & Maintenance)',
      description: 'Comprehensive air conditioning services including installation, repair, and regular maintenance. Expert technicians for all AC types with proper electrical connections, refrigerant handling, and performance optimization.',
      icon: Fan,
      image: '/assets/generated/residential-ac-installation.dim_800x600.gif',
      category: 'HVAC & Cooling'
    },
    {
      title: 'CCTV Camera Installation',
      description: 'Professional CCTV camera installation and security system setup. Complete surveillance solutions with proper camera placement, wiring, network configuration, and remote viewing capabilities.',
      icon: Camera,
      image: '/assets/generated/cctv-camera-installation.dim_800x600.gif',
      category: 'Security Systems'
    },
    {
      title: 'Outdoor Lighting',
      description: 'Expert outdoor lighting installation including landscape lighting, security lights, pathway illumination, and decorative outdoor fixtures. Weather-resistant installations with proper electrical protection.',
      icon: Lightbulb,
      image: '/assets/generated/outdoor-lighting.dim_800x600.gif',
      category: 'Lighting Solutions'
    },
    {
      title: 'Decorative Lighting',
      description: 'Creative decorative lighting solutions for homes and businesses. Installation of chandeliers, pendant lights, accent lighting, and custom lighting designs to enhance ambiance and aesthetics.',
      icon: Palette,
      image: '/assets/generated/light-fixture-repair.dim_800x600.gif',
      category: 'Lighting Solutions'
    }
  ];

  return (
    <section id="services" className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-industrial-orange">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional electrical services tailored to meet your residential, commercial, and industrial needs
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreServices.map((service, index) => (
              <Card key={index} className="group border-2 hover:border-industrial-orange/50 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <ReducedMotionMedia
                    animatedSrc={service.animatedImage}
                    staticSrc={service.staticImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-industrial-orange/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-industrial-orange" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleBookService}
                      className="flex-1 bg-industrial-orange hover:bg-industrial-orange/90"
                    >
                      Get Quote
                    </Button>
                    <Button
                      onClick={() => handleWhatsAppClick(service.title)}
                      variant="outline"
                      className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                    >
                      <SiWhatsapp className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1"
                    >
                      <a href="tel:9953854470">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group border-2 hover:border-industrial-blue/50 transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-semibold text-industrial-blue uppercase tracking-wide mb-2">
                    {service.category}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="h-5 w-5 text-industrial-blue flex-shrink-0" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex gap-2">
                    <Button
                      onClick={handleBookService}
                      size="sm"
                      className="flex-1 bg-industrial-blue hover:bg-industrial-blue/90"
                    >
                      Book Now
                    </Button>
                    <Button
                      onClick={() => handleWhatsAppClick(service.title)}
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <SiWhatsapp className="mr-1 h-4 w-4" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
