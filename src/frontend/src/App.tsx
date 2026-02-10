import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Certificates } from './components/Certificates';
import { WorkVideo } from './components/WorkVideo';
import { ElectricianWorkAnimations } from './components/ElectricianWorkAnimations';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsAppCTA } from './components/FloatingWhatsAppCTA';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <Certificates />
          <WorkVideo />
          <ElectricianWorkAnimations />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsAppCTA />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
