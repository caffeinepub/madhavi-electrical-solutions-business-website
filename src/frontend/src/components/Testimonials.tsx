import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      review: 'Excellent service! They completed the complete home wiring for my new house. Very professional team and quality work. Highly recommended for any electrical work.',
      location: 'Ghaziabad'
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      review: 'Called them for an emergency repair at midnight. They arrived within 30 minutes and fixed the issue quickly. Very reliable and professional service.',
      location: 'Noida'
    },
    {
      name: 'Amit Verma',
      rating: 5,
      review: 'Got my electrical panel upgraded and LED lights installed throughout the office. The team was punctual, efficient, and the pricing was very reasonable. Great experience!',
      location: 'Ghaziabad'
    },
    {
      name: 'Sunita Gupta',
      rating: 5,
      review: 'Very satisfied with their AC installation service. They explained everything clearly and completed the work on time. Will definitely use their services again.',
      location: 'Greater Noida'
    },
    {
      name: 'Vikram Singh',
      rating: 5,
      review: 'Professional electricians who know their work well. They installed ceiling fans and fixed all the socket issues in my home. Excellent service at fair prices.',
      location: 'Ghaziabad'
    },
    {
      name: 'Neha Agarwal',
      rating: 5,
      review: 'Madhavi Electrical Solutions provided outstanding service for our commercial property. From CCTV installation to complete electrical maintenance, everything was done perfectly.',
      location: 'Noida Sector 62'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-center mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Customer <span className="text-industrial-blue">Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our satisfied customers have to say about our electrical services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-industrial-orange/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                {renderStars(testimonial.rating)}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div className="text-center pt-4 border-t">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
