/**
 * WhatsApp business integration helper
 * Centralizes the WhatsApp chat URL for Madhavi Electrical Solutions
 */

const WHATSAPP_BUSINESS_NUMBER = '919953854470'; // India country code + number

/**
 * Returns the WhatsApp chat URL for the business
 * Opens WhatsApp app on mobile or WhatsApp Web on desktop
 */
export function getWhatsAppChatURL(message?: string): string {
  const baseURL = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}`;
  
  if (message) {
    const encodedMessage = encodeURIComponent(message);
    return `${baseURL}?text=${encodedMessage}`;
  }
  
  return baseURL;
}

/**
 * Default message for booking inquiries
 */
export const DEFAULT_BOOKING_MESSAGE = 'Hello! I would like to book your electrical services.';
