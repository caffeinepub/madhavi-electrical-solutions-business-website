import { Heart } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-industrial-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/Logo design for Madh.png"
                alt="Madhavi Electrical Solutions"
                className="h-14 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Madhavi Electrical</h3>
                <p className="text-sm text-gray-400">Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Comprehensive electrical services and engineering solutions for residential, commercial, and industrial applications in Ghaziabad, Uttar Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'Work Video', id: 'work-video' },
                { label: 'About Us', id: 'about' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-400 hover:text-industrial-orange transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="font-medium text-white">Phone:</span>{' '}
                <a
                  href="tel:9953854470"
                  className="hover:text-industrial-orange transition-colors"
                >
                  9953854470
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Email:</span>{' '}
                <a
                  href="mailto:madhavielectricalsolutions@gmail.com"
                  className="hover:text-industrial-orange transition-colors break-all"
                >
                  madhavielectricalsolutions@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Location:</span> H. NO -277, KH NO-254, GR Garden, Chipyana Bujurg, Ghaziabad, Uttar Pradesh (201009)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center flex-wrap gap-1">
            © {currentYear}. Built with{' '}
            <Heart className="h-4 w-4 text-red-500 fill-red-500 inline-block" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-industrial-orange hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
