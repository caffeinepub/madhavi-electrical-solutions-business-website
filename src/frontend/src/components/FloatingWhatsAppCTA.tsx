import { Button } from '@/components/ui/button';
import { SiWhatsapp } from 'react-icons/si';
import { getWhatsAppChatURL, DEFAULT_BOOKING_MESSAGE } from '@/lib/whatsapp';

export function FloatingWhatsAppCTA() {
  const handleClick = () => {
    window.open(getWhatsAppChatURL(DEFAULT_BOOKING_MESSAGE), '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      aria-label="Book Now on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 p-0 flex items-center justify-center"
      style={{
        bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))',
        right: 'max(1.5rem, env(safe-area-inset-right, 1.5rem))'
      }}
    >
      <SiWhatsapp className="h-7 w-7" />
    </Button>
  );
}
