import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { getWhatsAppChatURL } from '@/lib/whatsapp';

export function FloatingWhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppChatURL(), '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 floating-safe-area">
      {/* Call Button */}
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full shadow-2xl bg-industrial-orange hover:bg-industrial-orange/90 text-white p-0 hover:scale-110 transition-all duration-300"
        aria-label="Call us at 9953854470"
      >
        <a href="tel:9953854470">
          <Phone className="h-6 w-6" />
        </a>
      </Button>

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white p-0 hover:scale-110 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <SiWhatsapp className="h-7 w-7" />
      </Button>
    </div>
  );
}
