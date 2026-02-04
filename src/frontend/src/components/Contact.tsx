import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, Loader2, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { useSubmitContactForm } from '@/hooks/useQueries';

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
          <p className="text-lg text-muted-foreground">
            Get in touch with us for professional electrical services and solutions
          </p>
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
                      <p className="text-foreground break-words font-medium">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-industrial-orange/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get a Free Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we will contact you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={submitContactForm.isPending}
                      className="border-2 focus:border-industrial-orange transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      disabled={submitContactForm.isPending}
                      className="border-2 focus:border-industrial-orange transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    disabled={submitContactForm.isPending}
                    className="border-2 focus:border-industrial-orange transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your electrical service needs..."
                    rows={6}
                    required
                    disabled={submitContactForm.isPending}
                    className="border-2 focus:border-industrial-orange resize-none transition-colors duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitContactForm.isPending}
                  className="w-full bg-industrial-orange hover:bg-industrial-orange/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {submitContactForm.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
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
