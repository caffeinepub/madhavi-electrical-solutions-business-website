import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { HEADER_TAGLINE } from '@/lib/branding';
import { getWhatsAppChatURL } from '@/lib/whatsapp';
import { scrollToSection } from '@/lib/scroll';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update CSS variable for scroll padding
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${header.offsetHeight}px`
        );
      }
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppChatURL(), '_blank', 'noopener,noreferrer');
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Work Video', id: 'work-video' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="bg-industrial-dark text-white border-b border-industrial-gray/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 py-2 text-sm">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <a
                href="tel:9953854470"
                className="flex items-center gap-2 hover:text-industrial-orange transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Phone:</span>
                <span className="font-medium">9953854470</span>
              </a>
              
              {/* Mobile Click to Call Button */}
              <Button
                asChild
                size="sm"
                className="md:hidden bg-industrial-orange hover:bg-industrial-orange/90 text-white h-7 px-3 text-xs"
              >
                <a href="tel:9953854470">
                  Click to Call
                </a>
              </Button>
            </div>

            {/* Email */}
            <a
              href="mailto:madhavielectricalsolutions@gmail.com"
              className="hidden md:flex items-center gap-2 hover:text-industrial-orange transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden lg:inline">Email:</span>
              <span className="font-medium">madhavielectricalsolutions@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white h-7 px-3 text-xs"
            >
              <SiWhatsapp className="h-3.5 w-3.5 mr-1.5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo and Business Name with Tagline */}
          <div className="flex items-center space-x-3 min-w-0">
            <img
              src="/assets/Logo design for Madh.png"
              alt="Madhavi Electrical Solutions"
              className="h-12 w-auto flex-shrink-0 sm:h-14"
            />
            <div className="min-w-0">
              <h1 className="text-base font-bold text-primary leading-tight sm:text-xl">
                Madhavi Electrical
              </h1>
              <p className="text-xs text-muted-foreground leading-tight">Solutions</p>
              <p className="text-[10px] text-muted-foreground/80 leading-tight mt-0.5 sm:text-xs">
                {HEADER_TAGLINE}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
