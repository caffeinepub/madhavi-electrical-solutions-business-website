import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download } from 'lucide-react';

export function Certificates() {
  const certificateUrl = '/assets/generated/udyam-registration-certificate.dim_1200x1700.png';

  const handleOpenCertificate = () => {
    window.open(certificateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our official certifications and registrations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Udyam Registration Certificate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Certificate Preview */}
              <div className="relative group cursor-pointer" onClick={handleOpenCertificate}>
                <img
                  src={certificateUrl}
                  alt="Udyam Registration Certificate - Madhavi Electrical Solutions"
                  className="w-full h-auto rounded-lg border border-border shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-12 w-12 text-white drop-shadow-lg" />
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-foreground">Udyam Reg. No.:</span>
                    <span className="ml-2 text-muted-foreground">UDYAM-UP-29-0140155</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Date of Registration:</span>
                    <span className="ml-2 text-muted-foreground">03/09/2024</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Enterprise Name:</span>
                    <span className="ml-2 text-muted-foreground">Madhavi Electrical Solutions</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Type:</span>
                    <span className="ml-2 text-muted-foreground">Micro Enterprise</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-semibold text-foreground">Major Activity:</span>
                    <span className="ml-2 text-muted-foreground">Manufacturing</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleOpenCertificate}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Full Certificate
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1"
                >
                  <a href={certificateUrl} download="Udyam-Registration-Certificate-Madhavi-Electrical.png">
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
