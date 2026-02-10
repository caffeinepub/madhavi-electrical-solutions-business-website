import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PanelWiringScene } from './electrician-animations/scenes/PanelWiringScene';
import { TesterCheckingScene } from './electrician-animations/scenes/TesterCheckingScene';
import { McbOnOffScene } from './electrician-animations/scenes/McbOnOffScene';
import { SwitchBoardInstallationScene } from './electrician-animations/scenes/SwitchBoardInstallationScene';
import { EmergencyRepairWorkScene } from './electrician-animations/scenes/EmergencyRepairWorkScene';
import { ReducedMotionMedia } from '@/components/ReducedMotionMedia';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function ElectricianWorkAnimations() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animations = [
    {
      title: 'Panel Wiring',
      description: 'Electrical current flow through panel wiring',
      component: PanelWiringScene
    },
    {
      title: 'Tester Checking',
      description: 'Voltage testing with digital tester',
      component: TesterCheckingScene
    },
    {
      title: 'MCB ON–OFF',
      description: 'Miniature circuit breaker operation',
      component: McbOnOffScene
    },
    {
      title: 'Switch Board Installation',
      description: 'Professional switch board mounting',
      component: SwitchBoardInstallationScene
    },
    {
      title: 'Emergency Repair Work',
      description: 'Emergency electrical repair procedures',
      component: EmergencyRepairWorkScene
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="text-industrial-orange">Electrical Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch our skilled electricians demonstrate precision and expertise in every task
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {animations.map((animation, index) => (
            <Card key={index} className="border-2 hover:border-industrial-orange/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-center">{animation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-industrial-dark/5 rounded-lg overflow-hidden flex items-center justify-center">
                  <animation.component reducedMotion={prefersReducedMotion} />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  {animation.description}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* New Emergency Repair Premium Animation Card */}
          <Card className="border-2 hover:border-industrial-orange/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl text-center">Emergency Repair</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-industrial-dark/5 rounded-lg overflow-hidden">
                <ReducedMotionMedia
                  animatedSrc="/assets/generated/emergency-repair-voltage-tester.dim_1200x800.gif"
                  staticSrc="/assets/generated/service-emergency-repairs.dim_800x600.jpg"
                  alt="Emergency electrical repair with voltage tester"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                High-impact emergency electrical repair work
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
