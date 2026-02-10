import { MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getWhatsAppChatURL } from '@/lib/whatsapp';
import { scrollToSection } from '@/lib/scroll';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

// Helper function to format INR price with 80% increase
const formatPrice = (basePrice: number): string => {
  const increasedPrice = basePrice * 1.8;
  // Show 2 decimals only if the result is not a whole number
  if (increasedPrice % 1 === 0) {
    return `₹${increasedPrice.toFixed(0)}`;
  }
  return `₹${increasedPrice.toFixed(2)}`;
};

const products: Product[] = [
  // POWER LIGHT - Non-warranty bulbs
  {
    id: 'power-light-5w',
    name: 'POWER LIGHT 5 Watt',
    description: 'Energy-efficient LED bulb for home and office use',
    price: formatPrice(8),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-7w',
    name: 'POWER LIGHT 7 Watt',
    description: 'Bright LED bulb with excellent luminosity',
    price: formatPrice(8.5),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-9w',
    name: 'POWER LIGHT 9 Watt',
    description: 'High-performance LED bulb for larger spaces',
    price: formatPrice(9),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-12w',
    name: 'POWER LIGHT 12 Watt',
    description: 'Powerful LED bulb for maximum brightness',
    price: formatPrice(15),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-15w',
    name: 'POWER LIGHT 15 Watt',
    description: 'Extra bright LED bulb for commercial spaces',
    price: formatPrice(17),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  // POWER LIGHT - 1 year warranty bulbs
  {
    id: 'power-light-5w-1yr',
    name: 'POWER LIGHT 5 Watt (1 Year Warranty)',
    description: 'Energy-efficient LED bulb with 1 year warranty',
    price: formatPrice(24),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-7w-1yr',
    name: 'POWER LIGHT 7 Watt (1 Year Warranty)',
    description: 'Bright LED bulb with 1 year warranty coverage',
    price: formatPrice(25),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-9w-1yr',
    name: 'POWER LIGHT 9 Watt (1 Year Warranty)',
    description: 'High-performance LED bulb with 1 year warranty',
    price: formatPrice(26),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  // POWER LIGHT - 2 years warranty bulbs
  {
    id: 'power-light-5w-2yr',
    name: 'POWER LIGHT 5 Watt (2 Years Warranty)',
    description: 'Energy-efficient LED bulb with extended 2 years warranty',
    price: formatPrice(28),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-7w-2yr',
    name: 'POWER LIGHT 7 Watt (2 Years Warranty)',
    description: 'Bright LED bulb with extended 2 years warranty',
    price: formatPrice(29),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-9w-2yr',
    name: 'POWER LIGHT 9 Watt (2 Years Warranty)',
    description: 'High-performance LED bulb with extended 2 years warranty',
    price: formatPrice(30),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-12w-2yr',
    name: 'POWER LIGHT 12 Watt (2 Years Warranty)',
    description: 'Powerful LED bulb with extended 2 years warranty',
    price: formatPrice(53),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  {
    id: 'power-light-15w-2yr',
    name: 'POWER LIGHT 15 Watt (2 Years Warranty)',
    description: 'Extra bright LED bulb with extended 2 years warranty',
    price: formatPrice(69),
    image: '/assets/generated/products-power-light.dim_800x600.png'
  },
  // STREET LIGHT
  {
    id: 'street-light-24w',
    name: 'STREET LIGHT 24 Watt',
    description: 'Durable outdoor LED street light for roads and pathways',
    price: formatPrice(280),
    image: '/assets/generated/products-street-light.dim_800x600.png'
  },
  {
    id: 'street-light-30w',
    name: 'STREET LIGHT 30 Watt',
    description: 'High-intensity LED street light for main roads',
    price: formatPrice(430),
    image: '/assets/generated/products-street-light.dim_800x600.png'
  },
  {
    id: 'street-light-50w',
    name: 'STREET LIGHT 50 Watt',
    description: 'Heavy-duty LED street light for highways and large areas',
    price: formatPrice(630),
    image: '/assets/generated/products-street-light.dim_800x600.png'
  },
  {
    id: 'street-light-100w',
    name: 'STREET LIGHT 100 Watt',
    description: 'Ultra-bright LED street light for industrial zones',
    price: formatPrice(990),
    image: '/assets/generated/products-street-light.dim_800x600.png'
  },
  // FLOOD LIGHT
  {
    id: 'flood-light-50w',
    name: 'FLOOD LIGHT 50 Watt (Lensh Modal)',
    description: 'Wide-angle LED flood light for outdoor illumination',
    price: formatPrice(190),
    image: '/assets/generated/products-flood-light.dim_800x600.png'
  },
  {
    id: 'flood-light-120w',
    name: 'FLOOD LIGHT 120 Watt (Lensh Modal)',
    description: 'High-power LED flood light for large outdoor areas',
    price: formatPrice(250),
    image: '/assets/generated/products-flood-light.dim_800x600.png'
  },
  {
    id: 'flood-light-240w',
    name: 'FLOOD LIGHT 240 Watt (Lensh Modal)',
    description: 'Industrial-grade LED flood light for stadiums and warehouses',
    price: formatPrice(630),
    image: '/assets/generated/products-flood-light.dim_800x600.png'
  },
  // ACDC BULB
  {
    id: 'acdc-bulb-basic',
    name: 'ACDC BULB',
    description: 'Versatile AC/DC LED bulb for emergency backup lighting',
    price: formatPrice(42),
    image: '/assets/generated/products-acdc-bulb.dim_800x600.png'
  },
  {
    id: 'acdc-bulb-standard',
    name: 'ACDC BULB (Standard)',
    description: 'Reliable AC/DC LED bulb with dual power support',
    price: formatPrice(90),
    image: '/assets/generated/products-acdc-bulb.dim_800x600.png'
  },
  {
    id: 'acdc-bulb-1yr',
    name: 'ACDC BULB (1 Year Warranty)',
    description: 'Premium AC/DC LED bulb with 1 year warranty',
    price: formatPrice(125),
    image: '/assets/generated/products-acdc-bulb.dim_800x600.png'
  },
  {
    id: 'acdc-bulb-1yr-premium',
    name: 'ACDC BULB Premium (1 Year Warranty)',
    description: 'High-quality AC/DC LED bulb with extended warranty',
    price: formatPrice(180),
    image: '/assets/generated/products-acdc-bulb.dim_800x600.png'
  },
  // BRICK LIGHT
  {
    id: 'brick-light-50w',
    name: 'BRICK LIGHT 50 Watt',
    description: 'Decorative LED brick light for architectural lighting',
    price: formatPrice(38),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  // PATTA LIGHT
  {
    id: 'patta-light-50w',
    name: 'PATTA LIGHT 50 Watt',
    description: 'Stylish LED strip light for decorative applications',
    price: formatPrice(27),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  // FOOTBALL LIGHT
  {
    id: 'football-light-25w',
    name: 'FOOTBALL LIGHT 25 Watt',
    description: 'Spherical LED light for decorative and ambient lighting',
    price: formatPrice(80),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  {
    id: 'football-light-50w',
    name: 'FOOTBALL LIGHT 50 Watt',
    description: 'Large spherical LED light for enhanced decorative effect',
    price: formatPrice(125),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  // FAN BULB
  {
    id: 'fan-bulb-25w',
    name: 'FAN BULB 25 Watt',
    description: 'Compact LED bulb designed for ceiling fans',
    price: formatPrice(52),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  {
    id: 'fan-bulb-40w',
    name: 'FAN BULB 40 Watt',
    description: 'Bright LED bulb for ceiling fans with higher output',
    price: formatPrice(90),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  {
    id: 'fan-bulb-50w',
    name: 'FAN BULB 50 Watt',
    description: 'High-power LED bulb for ceiling fans in large rooms',
    price: formatPrice(125),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  // T BULB
  {
    id: 't-bulb-10w-1yr',
    name: 'T BULB 10 Watt (1 Year Warranty)',
    description: 'Tubular LED bulb with 1 year warranty for modern fixtures',
    price: formatPrice(70),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  // MOSQUITO BULB
  {
    id: 'mosquito-bulb',
    name: 'MOSQUITO BULB',
    description: 'LED bulb with mosquito repellent feature for outdoor use',
    price: formatPrice(15),
    image: '/assets/generated/products-decorative-lights.dim_800x600.png'
  },
  // TUBELIGHT
  {
    id: 'tubelight-20w',
    name: 'TUBELIGHT 20 Watt',
    description: 'Energy-efficient LED tube light for offices and homes',
    price: formatPrice(75),
    image: '/assets/generated/products-tubelight.dim_800x600.png'
  },
  {
    id: 'tubelight-22w',
    name: 'TUBELIGHT 22 Watt',
    description: 'Bright LED tube light with enhanced luminosity',
    price: formatPrice(90),
    image: '/assets/generated/products-tubelight.dim_800x600.png'
  }
];

export function Products() {
  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hello! I'm interested in ${productName}. Can you provide more details?`;
    window.open(getWhatsAppChatURL(message), '_blank', 'noopener,noreferrer');
  };

  const handleRequestQuote = () => {
    scrollToSection('contact');
  };

  // Filter out "Solar Power Kits" to ensure it never appears
  const filteredProducts = products.filter(
    product => !product.name.toLowerCase().includes('solar power kit')
  );

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality electrical products from trusted brands. We supply and install a wide range of electrical equipment for your needs.
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-industrial-orange">{product.price}</p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button
                    onClick={() => handleWhatsAppInquiry(product.name)}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Inquire on WhatsApp
                  </Button>
                  <Button
                    onClick={handleRequestQuote}
                    variant="outline"
                    className="w-full"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Contact us for our complete product catalog and availability.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
