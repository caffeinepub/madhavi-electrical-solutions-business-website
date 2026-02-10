import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, Loader2, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { toast } from 'sonner';
import { useSubmitContactForm } from '@/hooks/useQueries';
import { getWhatsAppChatURL } from '@/lib/whatsapp';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const submitContactForm = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitContactForm.mutateAsync(formData);
      
      toast.success('Message sent successfully!', {
        description: 'We will contact you as soon as possible.'
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly via phone or email.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppChatURL(), '_blank', 'noopener,noreferrer');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      value: 'H. NO -277, KH NO-254, GR Garden, Chipyana Bujurg, Ghaziabad, Uttar Pradesh (201009)',
      link: null,
      emoji: '📍'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '9953854470',
      link: 'tel:9953854470',
      emoji: '📞'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'madhavielectricalsolutions@gmail.com',
      link: 'mailto:madhavielectricalsolutions@gmail.com',
      emoji: '📧'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Monday–Saturday, 9:00 AM – 7:00 PM',
      link: null,
      emoji: '🕘'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-industrial-blue">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get in touch with us for professional electrical services and solutions
          </p>
          
          {/* Quick Contact CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-industrial-orange hover:bg-industrial-orange/90 text-white"
            >
              <a href="tel:9953854470">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <SiWhatsapp className="mr-2 h-5 w-5" />
              Book Now
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-2 transition-all duration-300 hover:shadow-lg hover:border-industrial-orange/50 group"
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{info.emoji}</div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="block hover:text-industrial-orange transition-colors text-foreground font-medium break-words"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium break-words">
                        {info.value}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold mb-2">
                Get a <span className="text-industrial-orange">Free Consultation</span>
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you shortly. Request quotes for any of our services including home wiring, emergency repairs, panel upgrades, LED work, and appliance installation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-industrial-orange transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-industrial-orange transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-industrial-orange transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your service needs (e.g., home wiring, emergency repair, panel upgrade, LED installation, or appliance setup)..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-2 focus:border-industrial-orange transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitContactForm.isPending}
                  className="w-full h-12 bg-industrial-orange hover:bg-industrial-orange/90 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {submitContactForm.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
