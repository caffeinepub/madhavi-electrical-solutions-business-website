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
      description: 'Comprehensive air conditioning services including installation, repair, and regular maintenance. Expert AC installation, troubleshooting, refrigerant charging, cleaning, and preventive maintenance for optimal cooling performance.',
      icon: Wind,
      image: '/assets/generated/residential-ac-installation.dim_800x600.gif',
      category: 'HVAC & Cooling'
    },
    {
      title: 'Outdoor Lighting Installation',
      description: 'Specialized outdoor lighting solutions for security, aesthetics, and functionality. Professional installation of landscape lighting, security lights, pathway lighting, and decorative outdoor fixtures.',
      icon: Lightbulb,
      image: '/assets/generated/outdoor-lighting.dim_800x600.gif',
      category: 'Lighting Solutions'
    },
    {
      title: 'CCTV Camera Installation',
      description: 'Professional CCTV camera installation and surveillance system setup. Complete security camera solutions with HD recording, remote viewing, and 24/7 monitoring capabilities for homes and businesses.',
      icon: Camera,
      image: '/assets/generated/cctv-camera-installation.dim_800x600.gif',
      category: 'Security & Surveillance'
    },
    {
      title: 'Electrical Design',
      description: 'Professional electrical design services for new construction and renovation projects. Detailed electrical plans, load calculations, and system specifications ensuring code compliance and optimal performance.',
      icon: Palette,
      image: '/assets/generated/electrical-design.dim_800x600.gif',
      category: 'Design Services'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-industrial-blue">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional electrical services for residential, commercial, and industrial needs
          </p>
        </div>

        {/* Core Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-industrial-orange">Core Services</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular electrical services — trusted by hundreds of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-industrial-orange/50 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <ReducedMotionMedia
                    animatedSrc={service.animatedImage}
                    staticSrc={service.staticImage}
                    alt={`${service.title} - Professional electrical service`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-industrial-orange/10">
                      <service.icon className="w-6 h-6 text-industrial-orange" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    onClick={handleBookService}
                    className="w-full bg-industrial-orange hover:bg-industrial-orange/90 text-white"
                  >
                    Get a Free Quote
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => handleWhatsAppClick(service.title)}
                      variant="outline"
                      size="sm"
                      className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                    >
                      <SiWhatsapp className="mr-1.5 h-4 w-4" />
                      Book Now
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-industrial-orange text-industrial-orange hover:bg-industrial-orange hover:text-white"
                    >
                      <a href="tel:9953854470">
                        <Phone className="mr-1.5 h-4 w-4" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional <span className="text-industrial-blue">Services</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-industrial-blue/50 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - ${service.category}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-industrial-blue/10">
                      <service.icon className="w-5 h-5 text-industrial-blue" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleBookService}
                    variant="outline"
                    className="w-full border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-white"
                  >
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
