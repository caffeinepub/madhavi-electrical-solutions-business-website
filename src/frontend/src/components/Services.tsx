import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, Zap, Home, Bolt, Sun, Battery, 
  Wrench, Plug, Settings, Fan, Lightbulb, 
  Snowflake, Shield, Camera, ShoppingBag, Package,
  Wind, LampDesk, Palette
} from 'lucide-react';

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      title: 'Commercial Electrical Engineering',
      description: 'Professional electrical engineering solutions for commercial buildings and facilities. Complete design, planning, and implementation services ensuring optimal performance, energy efficiency, and compliance with commercial building codes.',
      icon: Building2,
      image: '/assets/generated/commercial-electrical-engineering.dim_800x600.jpg',
      category: 'Engineering Services'
    },
    {
      title: 'Electrical Engineering',
      description: 'Complete electrical engineering services including comprehensive system design, detailed planning, and professional implementation. Expert solutions for complex electrical projects with focus on safety, efficiency, and reliability.',
      icon: Zap,
      image: '/assets/generated/electrical-engineering-tools.dim_800x600.jpg',
      category: 'Engineering Services'
    },
    {
      title: 'Residential Engineering',
      description: 'Specialized residential electrical engineering and system design services. Custom solutions for homes including power distribution planning, lighting design, smart home integration, and energy-efficient electrical systems.',
      icon: Home,
      image: '/assets/generated/residential-engineering.dim_800x600.jpg',
      category: 'Engineering Services'
    },
    {
      title: 'General Installation, Repair & Maintenance',
      description: 'Comprehensive electrical installation, repair, and preventive maintenance services. Regular inspections, testing, troubleshooting, and maintenance programs to ensure system reliability and prevent unexpected failures.',
      icon: Wrench,
      image: '/assets/generated/electrical-maintenance.dim_800x600.jpg',
      category: 'Installation & Maintenance'
    },
    {
      title: 'Electrical Panel Installation',
      description: 'Complete electrical panel installation services with safety compliance and modern systems. Professional installation of distribution panels, load centers, and circuit breaker panels with proper sizing and load balancing.',
      icon: Settings,
      image: '/assets/generated/electrical-panel-installation.dim_800x600.jpg',
      category: 'Installation & Maintenance'
    },
    {
      title: 'Electrical Panel Repair & Replacement',
      description: 'Professional repair and replacement services for electrical panels and upgrades. Expert diagnosis and resolution of panel issues, circuit breaker replacement, and complete panel upgrade services for enhanced safety.',
      icon: Settings,
      image: '/assets/generated/electrical-panel-installation.dim_800x600.jpg',
      category: 'Installation & Maintenance'
    },
    {
      title: 'Medium & High-Voltage Systems',
      description: 'Expert installation and maintenance of medium and high-voltage electrical systems. Specialized services for industrial power distribution, transformer installations, switchgear, and high-voltage equipment maintenance.',
      icon: Bolt,
      image: '/assets/generated/medium-high-voltage-systems.dim_800x600.jpg',
      category: 'Specialized Systems'
    },
    {
      title: 'Solar Energy',
      description: 'Solar panel installation, maintenance, and renewable energy solutions. Complete solar power system design, installation, grid integration, and ongoing maintenance for residential and commercial applications.',
      icon: Sun,
      image: '/assets/generated/solar-energy-installation.dim_800x600.jpg',
      category: 'Specialized Systems'
    },
    {
      title: 'Standby Power Systems',
      description: 'Backup power system installation and maintenance for uninterrupted power supply. Generator installation, UPS systems, automatic transfer switches, and emergency power solutions for critical applications.',
      icon: Battery,
      image: '/assets/generated/standby-power-systems.dim_800x600.jpg',
      category: 'Specialized Systems'
    },
    {
      title: 'Security System Installation',
      description: 'Professional security system installation and monitoring solutions. Complete security infrastructure including access control, alarm systems, surveillance integration, and 24/7 monitoring capabilities.',
      icon: Shield,
      image: '/assets/generated/electrical-maintenance.dim_800x600.jpg',
      category: 'Specialized Systems'
    },
    {
      title: 'Electrical Wiring Installation & Repair',
      description: 'Professional electrical wiring solutions for all types of buildings. Complete wiring services including power distribution, control wiring, data cabling, and comprehensive cable management systems.',
      icon: Plug,
      image: '/assets/generated/industrial-wiring.dim_800x600.jpg',
      category: 'Wiring & Components'
    },
    {
      title: 'Electrical Socket & Switch Installation/Repair/Relocation',
      description: 'Complete socket and switch services including installation, repair, and relocation. Professional installation of outlets, switches, dimmers, and specialty receptacles with proper grounding and safety compliance.',
      icon: Plug,
      image: '/assets/generated/socket-switch-installation.dim_800x600.jpg',
      category: 'Wiring & Components'
    },
    {
      title: 'Electrical Parts Assembly',
      description: 'Professional assembly and installation of electrical components and parts. Expert assembly of control panels, junction boxes, electrical enclosures, and custom electrical component installations.',
      icon: Package,
      image: '/assets/generated/electrical-parts-assembly.dim_800x600.jpg',
      category: 'Wiring & Components'
    },
    {
      title: 'Electrical Fuse Changing',
      description: 'Safe and professional electrical fuse replacement and maintenance services. Expert fuse box inspection, fuse replacement, circuit protection upgrades, and electrical safety assessments.',
      icon: Zap,
      image: '/assets/generated/electrical-fuse-changing.dim_800x600.jpg',
      category: 'Wiring & Components'
    },
    {
      title: 'Light Fixture Repair',
      description: 'Professional repair services for all types of light fixtures and lighting systems. Expert troubleshooting and repair of indoor and outdoor lighting, fixture replacement, and lighting system upgrades.',
      icon: Lightbulb,
      image: '/assets/generated/light-fixture-repair.dim_800x600.jpg',
      category: 'Lighting & Fixtures'
    },
    {
      title: 'Outdoor Lighting Installation',
      description: 'Complete outdoor lighting solutions for residential and commercial properties. Professional installation of landscape lighting, security lighting, pathway lights, and architectural lighting systems.',
      icon: LampDesk,
      image: '/assets/generated/outdoor-lighting.dim_800x600.jpg',
      category: 'Lighting & Fixtures'
    },
    {
      title: 'Fan Installation & Repair',
      description: 'Professional ceiling fan and ventilation fan installation and repair services. Expert installation, balancing, and repair of all types of fans including ceiling fans, exhaust fans, and industrial ventilation systems.',
      icon: Fan,
      image: '/assets/generated/fan-installation.dim_800x600.jpg',
      category: 'Lighting & Fixtures'
    },
    {
      title: 'Residential AC Installation & Maintenance',
      description: 'Complete air conditioning installation, repair, and maintenance services. Professional AC installation, system diagnostics, preventive maintenance, and emergency repair services for residential properties.',
      icon: Snowflake,
      image: '/assets/generated/residential-ac-installation.dim_800x600.jpg',
      category: 'HVAC & Cooling'
    },
    {
      title: 'Cooler Installation & Repair',
      description: 'Professional cooler installation, maintenance, and repair services. Expert installation and servicing of evaporative coolers, air coolers, and cooling systems for residential and commercial applications.',
      icon: Wind,
      image: '/assets/generated/cooler-installation.dim_800x600.jpg',
      category: 'HVAC & Cooling'
    },
    {
      title: 'Electrical Design',
      description: 'Professional electrical system design and planning services. Comprehensive design solutions including load calculations, circuit layouts, lighting design, and electrical system specifications for new construction and renovations.',
      icon: Palette,
      image: '/assets/generated/electrical-design.dim_800x600.jpg',
      category: 'Design & Supply'
    },
    {
      title: 'Electrical Supply',
      description: 'Quality electrical parts, components, and equipment supply. Wide range of electrical materials including wiring, switches, panels, fixtures, and specialized electrical equipment from trusted manufacturers.',
      icon: ShoppingBag,
      image: '/assets/generated/electrical-maintenance.dim_800x600.jpg',
      category: 'Design & Supply'
    },
    {
      title: 'Electrical Repair Shop',
      description: 'On-site and workshop electrical repair services. Professional repair of electrical equipment, motors, appliances, and electrical components with quick turnaround and quality workmanship.',
      icon: Wrench,
      image: '/assets/generated/motor-drive-components.dim_600x400.jpg',
      category: 'Design & Supply'
    },
    {
      title: 'Camera Shop Services',
      description: 'Security camera sales, installation, and maintenance services. Complete CCTV solutions including camera selection, professional installation, system configuration, and ongoing maintenance support.',
      icon: Camera,
      image: '/assets/generated/electrical-maintenance.dim_800x600.jpg',
      category: 'Design & Supply',
      subServices: [
        {
          title: 'CCTV Camera Installation & Setup',
          description: 'Professional surveillance system installation and configuration. Expert setup of CCTV cameras, DVR/NVR systems, remote viewing, and complete security monitoring solutions.',
          image: '/assets/generated/cctv-camera-installation.dim_800x600.jpg'
        }
      ]
    }
  ];

  // Group services by category
  const categories = [
    'Engineering Services',
    'Installation & Maintenance',
    'Specialized Systems',
    'Wiring & Components',
    'Lighting & Fixtures',
    'HVAC & Cooling',
    'Design & Supply'
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-industrial-blue">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive electrical solutions to meet all your residential, commercial, and industrial needs
          </p>
        </div>

        {categories.map((category, categoryIndex) => {
          const categoryServices = services.filter(s => s.category === category);
          
          return (
            <div key={category} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                <span className="text-industrial-orange">{category}</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service, index) => (
                  <div key={index}>
                    <Card 
                      className="border-2 hover:border-industrial-orange/50 transition-all duration-300 hover:shadow-xl overflow-hidden group flex flex-col animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/90 via-industrial-navy/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-industrial-orange shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl mb-2 group-hover:text-industrial-blue transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {service.description}
                        </CardDescription>
                        <div className="mt-auto pt-4">
                          <Button
                            onClick={scrollToContact}
                            className="w-full bg-industrial-orange hover:bg-industrial-orange/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                          >
                            Book Service
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Sub-services for Camera Shop Services */}
                    {service.subServices && service.subServices.map((subService, subIndex) => (
                      <Card 
                        key={`sub-${subIndex}`}
                        className="border-2 hover:border-industrial-orange/50 transition-all duration-300 hover:shadow-xl overflow-hidden group flex flex-col animate-fade-in-up mt-8"
                        style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={subService.image}
                            alt={subService.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/90 via-industrial-navy/50 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-industrial-orange shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Camera className="w-7 h-7 text-white" />
                            </div>
                          </div>
                        </div>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-xl mb-2 group-hover:text-industrial-blue transition-colors duration-300">
                            {subService.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                          <CardDescription className="text-base leading-relaxed mb-4">
                            {subService.description}
                          </CardDescription>
                          <div className="mt-auto pt-4">
                            <Button
                              onClick={scrollToContact}
                              className="w-full bg-industrial-orange hover:bg-industrial-orange/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                            >
                              Book Service
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
