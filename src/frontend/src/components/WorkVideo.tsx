import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMontagePlayer } from '@/hooks/useMontagePlayer';
import { recordMontage, isRecordingSupported } from '@/lib/montageRecorder';
import { toast } from 'sonner';

const WORK_PHOTOS = [
  '/assets/generated/hero-background.dim_1200x600.gif',
  '/assets/generated/team-photo.dim_1200x800.gif',
  '/assets/generated/service-home-wiring.dim_800x600.gif',
  '/assets/generated/service-emergency-repairs.dim_800x600.gif',
  '/assets/generated/service-fuse-panel-upgrades.dim_800x600.gif',
  '/assets/generated/service-led-light-fitting.dim_800x600.gif',
  '/assets/generated/service-appliance-installation.dim_800x600.gif',
  '/assets/generated/electrical-panel-installation.dim_800x600.gif',
  '/assets/generated/fan-installation.dim_800x600.gif',
  '/assets/generated/light-fixture-repair.dim_800x600.gif',
  '/assets/generated/socket-switch-installation.dim_800x600.gif',
  '/assets/generated/cctv-camera-installation.dim_800x600.gif',
  '/assets/generated/cooler-installation.dim_800x600.gif',
  '/assets/generated/residential-ac-installation.dim_800x600.gif',
];

export function WorkVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const recordingSupported = isRecordingSupported();
  const animationFrameRef = useRef<number | undefined>(undefined);
  const currentImageRef = useRef<HTMLImageElement | null>(null);

  const {
    currentIndex,
    isPlaying,
    speed,
    play,
    pause,
    restart,
    setSpeed: changeSpeed,
  } = useMontagePlayer(WORK_PHOTOS.length);

  // Load and cache current image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = WORK_PHOTOS[currentIndex];
    
    img.onload = () => {
      currentImageRef.current = img;
    };

    return () => {
      currentImageRef.current = null;
    };
  }, [currentIndex]);

  // Continuous animation loop for pan/zoom effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      const img = currentImageRef.current;
      if (!img || !img.complete) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate dimensions to fill canvas while maintaining aspect ratio
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgAspect > canvasAspect) {
        // Image is wider
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image is taller or equal
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      // Apply subtle zoom effect (1.0 to 1.1 scale)
      const progress = (Date.now() % 3000) / 3000; // 3 second cycle
      const scale = 1.0 + (Math.sin(progress * Math.PI * 2) * 0.05);
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scale, scale);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== undefined) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentIndex]);

  const handleDownload = async () => {
    if (!canvasRef.current) return;

    setIsRecording(true);
    toast.info('Recording montage... This may take a moment.');

    try {
      const blob = await recordMontage(WORK_PHOTOS, speed);
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `madhavi-electrical-work-video-${Date.now()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success('Video downloaded successfully!');
    } catch (error) {
      console.error('Recording failed:', error);
      toast.error('Failed to record video. Please try again.');
    } finally {
      setIsRecording(false);
    }
  };

  return (
    <section id="work-video" className="py-20 bg-industrial-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
            Work Video
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our team in action delivering quality electrical services across Ghaziabad
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden">
          {/* Video Canvas */}
          <div className="relative bg-black aspect-video">
            <canvas
              ref={canvasRef}
              width={1200}
              height={675}
              className="w-full h-full object-contain montage-canvas"
            />
            
            {/* Overlay fade effect */}
            <div className="absolute inset-0 pointer-events-none montage-overlay" />
          </div>

          {/* Controls */}
          <div className="p-6 bg-card space-y-4">
            {/* Playback Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                onClick={isPlaying ? pause : play}
                variant="default"
                size="lg"
                className="min-w-[120px]"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-5 w-5 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5 mr-2" />
                    Play
                  </>
                )}
              </Button>

              <Button
                onClick={restart}
                variant="outline"
                size="lg"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Restart
              </Button>

              {recordingSupported && (
                <Button
                  onClick={handleDownload}
                  variant="secondary"
                  size="lg"
                  disabled={isRecording}
                >
                  <Download className="h-5 w-5 mr-2" />
                  {isRecording ? 'Recording...' : 'Download'}
                </Button>
              )}
            </div>

            {/* Speed Control */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">Speed:</span>
              <Select value={speed.toString()} onValueChange={(val) => changeSpeed(parseFloat(val))}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5">0.5×</SelectItem>
                  <SelectItem value="1">1×</SelectItem>
                  <SelectItem value="1.5">1.5×</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Progress Indicator */}
            <div className="text-center text-sm text-muted-foreground">
              Photo {currentIndex + 1} of {WORK_PHOTOS.length}
            </div>
          </div>
        </Card>

        {/* Work GIFs Section */}
        <div className="max-w-5xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-industrial-dark mb-6 text-center">
            Our Team at Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Walking GIF */}
            <Card className="overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-semibold text-industrial-dark mb-4 text-center">
                  On the Move
                </h4>
                <div className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/assets/generated/walking.dim_600x600.gif"
                    alt="Electrician walking to job site with tools and equipment"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </Card>

            {/* Working GIF */}
            <Card className="overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-semibold text-industrial-dark mb-4 text-center">
                  Hands-On Work
                </h4>
                <div className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/assets/generated/working.dim_600x600.gif"
                    alt="Electrician performing electrical repair work with tools and wiring"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
