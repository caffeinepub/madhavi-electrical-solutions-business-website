import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Download, Upload, X, ChevronUp, ChevronDown, Video, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMontagePlayer } from '@/hooks/useMontagePlayer';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { recordMontage, isRecordingSupported } from '@/lib/montageRecorder';
import { WORK_PHOTOS } from '@/lib/workVideoPhotos';
import { toast } from 'sonner';

interface MontageImage {
  id: string;
  url: string;
  name: string;
}

type ViewMode = 'video' | 'montage';

export function WorkVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const recordingSupported = isRecordingSupported();
  const animationFrameRef = useRef<number | undefined>(undefined);
  const currentImageRef = useRef<HTMLImageElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Video upload state
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const [uploadedVideoName, setUploadedVideoName] = useState<string>('');
  const [viewMode, setViewMode] = useState<ViewMode>('montage');

  // Montage error state
  const [montageError, setMontageError] = useState<string | null>(null);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  // Custom montage images state
  const [customImages, setCustomImages] = useState<MontageImage[]>([]);
  
  // Get active image list (custom or default)
  const activeImages = customImages.length > 0 
    ? customImages.map(img => img.url) 
    : WORK_PHOTOS;

  // Duration controls with validation
  const [secondsPerPhoto, setSecondsPerPhoto] = useState(2);
  const [transitionMs, setTransitionMs] = useState(500);
  const [secondsInput, setSecondsInput] = useState('2');
  const [transitionInput, setTransitionInput] = useState('500');

  const {
    currentIndex,
    isPlaying,
    secondsPerPhoto: playerSeconds,
    transitionMs: playerTransition,
    play,
    pause,
    restart,
    setSecondsPerPhoto: setPlayerSeconds,
    setTransitionMs: setPlayerTransition,
  } = useMontagePlayer(activeImages.length, !prefersReducedMotion, secondsPerPhoto, transitionMs);

  // Sync duration controls with player
  useEffect(() => {
    setPlayerSeconds(secondsPerPhoto);
  }, [secondsPerPhoto, setPlayerSeconds]);

  useEffect(() => {
    setPlayerTransition(transitionMs);
  }, [transitionMs, setPlayerTransition]);

  // Handle seconds per photo input
  const handleSecondsChange = (value: string) => {
    setSecondsInput(value);
    const num = parseFloat(value);
    if (!isNaN(num) && num > 0 && num <= 10) {
      setSecondsPerPhoto(num);
    }
  };

  const validateSeconds = () => {
    const num = parseFloat(secondsInput);
    if (isNaN(num) || num <= 0 || num > 10) {
      setSecondsInput(secondsPerPhoto.toString());
      toast.error('Seconds per photo must be between 0.1 and 10');
    }
  };

  // Handle transition duration input
  const handleTransitionChange = (value: string) => {
    setTransitionInput(value);
    const num = parseInt(value);
    if (!isNaN(num) && num >= 0 && num <= 2000) {
      setTransitionMs(num);
    }
  };

  const validateTransition = () => {
    const num = parseInt(transitionInput);
    if (isNaN(num) || num < 0 || num > 2000) {
      setTransitionInput(transitionMs.toString());
      toast.error('Transition must be between 0 and 2000 ms');
    }
  };

  // Handle video file upload
  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      toast.error('Please select a valid video file');
      return;
    }

    // Revoke previous video URL if exists
    if (uploadedVideo) {
      URL.revokeObjectURL(uploadedVideo);
    }

    const url = URL.createObjectURL(file);
    setUploadedVideo(url);
    setUploadedVideoName(file.name);
    setViewMode('video');
    toast.success('Video uploaded successfully!');
  };

  // Clear uploaded video
  const handleClearVideo = () => {
    if (uploadedVideo) {
      URL.revokeObjectURL(uploadedVideo);
    }
    setUploadedVideo(null);
    setUploadedVideoName('');
    setViewMode('montage');
    toast.success('Video removed. Showing photo montage.');
  };

  // Handle photo file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages: MontageImage[] = [];
    
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        newImages.push({
          id: `${Date.now()}-${Math.random()}`,
          url,
          name: file.name,
        });
      }
    });

    if (newImages.length > 0) {
      setCustomImages(prev => [...prev, ...newImages]);
      toast.success(`Added ${newImages.length} image(s) to montage`);
    }
  };

  // Remove image
  const handleRemoveImage = (id: string) => {
    setCustomImages(prev => {
      const updated = prev.filter(img => img.id !== id);
      // Revoke object URL to free memory
      const removed = prev.find(img => img.id === id);
      if (removed) {
        URL.revokeObjectURL(removed.url);
      }
      return updated;
    });
    toast.success('Image removed from montage');
  };

  // Reorder images
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setCustomImages(prev => {
      const updated = [...prev];
      [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
      return updated;
    });
  };

  const handleMoveDown = (index: number) => {
    if (index === customImages.length - 1) return;
    setCustomImages(prev => {
      const updated = [...prev];
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      return updated;
    });
  };

  // Validate montage images on mount and when activeImages change
  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    let failedCount = 0;

    const validateImages = async () => {
      const promises = activeImages.map((src) => {
        return new Promise<boolean>((resolve) => {
          const img = new Image();
          img.onload = () => {
            if (mounted) loadedCount++;
            resolve(true);
          };
          img.onerror = () => {
            if (mounted) failedCount++;
            console.warn(`Failed to load montage image: ${src}`);
            resolve(false);
          };
          img.src = src;
        });
      });

      await Promise.all(promises);

      if (!mounted) return;

      setLoadedImagesCount(loadedCount);

      if (loadedCount === 0) {
        setMontageError('Work video is not available yet. Please upload a video or add photos.');
      } else if (failedCount > 0) {
        setMontageError(null);
        toast.warning(`${failedCount} image(s) failed to load and will be skipped.`);
      } else {
        setMontageError(null);
      }
    };

    validateImages();

    return () => {
      mounted = false;
    };
  }, [activeImages]);

  // Load and cache current image
  useEffect(() => {
    if (viewMode !== 'montage' || montageError) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = activeImages[currentIndex];
    
    img.onload = () => {
      currentImageRef.current = img;
    };

    img.onerror = () => {
      console.error(`Failed to load image: ${activeImages[currentIndex]}`);
      currentImageRef.current = null;
    };

    return () => {
      currentImageRef.current = null;
    };
  }, [currentIndex, activeImages, viewMode, montageError]);

  // Canvas rendering: static for reduced motion, animated otherwise
  useEffect(() => {
    if (viewMode !== 'montage' || montageError) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (prefersReducedMotion) {
      // Static rendering for reduced motion
      const renderStatic = () => {
        const img = currentImageRef.current;
        if (!img || !img.complete) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgAspect > canvasAspect) {
          drawHeight = canvas.height;
          drawWidth = img.width * (canvas.height / img.height);
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = img.height * (canvas.width / img.width);
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };

      renderStatic();
      return;
    }

    // Animated rendering
    const animate = () => {
      const img = currentImageRef.current;
      if (!img || !img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgAspect > canvasAspect) {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
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
  }, [currentIndex, prefersReducedMotion, viewMode, montageError]);

  const handleDownload = async () => {
    if (!canvasRef.current) return;

    if (loadedImagesCount === 0) {
      toast.error('No images available to create video');
      return;
    }

    setIsRecording(true);
    toast.info('Recording montage... This may take a moment.');

    try {
      // Filter out failed images
      const validImages: string[] = [];
      for (const src of activeImages) {
        try {
          await new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = src;
          });
          validImages.push(src);
        } catch {
          console.warn(`Skipping failed image: ${src}`);
        }
      }

      if (validImages.length === 0) {
        throw new Error('No valid images available for recording');
      }

      const blob = await recordMontage(validImages, secondsPerPhoto, transitionMs);
      
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
      toast.error(error instanceof Error ? error.message : 'Failed to record video. Please try again.');
    } finally {
      setIsRecording(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (uploadedVideo) {
        URL.revokeObjectURL(uploadedVideo);
      }
      customImages.forEach(img => {
        URL.revokeObjectURL(img.url);
      });
    };
  }, []);

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
          {/* Mode Indicator & Switch */}
          <div className="p-4 bg-muted/50 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              {viewMode === 'video' ? (
                <>
                  <Video className="h-5 w-5 text-primary" />
                  <span className="font-medium">Viewing: Uploaded Video</span>
                  {uploadedVideoName && (
                    <span className="text-sm text-muted-foreground">({uploadedVideoName})</span>
                  )}
                </>
              ) : (
                <>
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <span className="font-medium">Viewing: Photo Montage</span>
                  <span className="text-sm text-muted-foreground">
                    ({loadedImagesCount} of {activeImages.length} images loaded)
                  </span>
                </>
              )}
            </div>
            <div className="flex gap-2">
              {uploadedVideo && viewMode === 'montage' && (
                <Button
                  onClick={() => setViewMode('video')}
                  variant="outline"
                  size="sm"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Show Video
                </Button>
              )}
              {uploadedVideo && viewMode === 'video' && (
                <Button
                  onClick={() => setViewMode('montage')}
                  variant="outline"
                  size="sm"
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Show Montage
                </Button>
              )}
            </div>
          </div>

          {/* Video/Canvas Display */}
          <div className="relative bg-black aspect-video">
            {viewMode === 'video' && uploadedVideo ? (
              <video
                ref={videoRef}
                src={uploadedVideo}
                controls
                className="w-full h-full object-contain"
                controlsList="nodownload"
              >
                Your browser does not support the video tag.
              </video>
            ) : montageError ? (
              <div className="w-full h-full flex items-center justify-center p-8">
                <Card className="max-w-md p-6 text-center">
                  <p className="text-lg font-medium text-muted-foreground mb-4">
                    {montageError}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() => document.getElementById('video-upload')?.click()}
                      variant="default"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Video
                    </Button>
                    <Button
                      onClick={() => document.getElementById('photo-upload')?.click()}
                      variant="outline"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Add Photos
                    </Button>
                  </div>
                </Card>
              </div>
            ) : (
              <>
                <canvas
                  ref={canvasRef}
                  width={1200}
                  height={675}
                  className="w-full h-full object-contain montage-canvas"
                />
                
                {/* Overlay fade effect */}
                {!prefersReducedMotion && (
                  <div className="absolute inset-0 pointer-events-none montage-overlay" />
                )}
              </>
            )}
          </div>

          {/* Controls */}
          <div className="p-6 bg-card space-y-6">
            {/* Video Upload Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Upload Video</h3>
                <div className="flex gap-2">
                  <input
                    type="file"
                    id="video-upload"
                    accept="video/mp4,video/webm,video/ogg,video/quicktime"
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                  <Button
                    onClick={() => document.getElementById('video-upload')?.click()}
                    variant="default"
                    size="sm"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Video
                  </Button>
                  {uploadedVideo && (
                    <Button
                      onClick={handleClearVideo}
                      variant="destructive"
                      size="sm"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Remove Video
                    </Button>
                  )}
                </div>
              </div>

              {uploadedVideo && (
                <div className="p-3 bg-muted rounded-lg flex items-center gap-3">
                  <Video className="h-5 w-5 text-primary" />
                  <span className="flex-1 text-sm font-medium">{uploadedVideoName}</span>
                  <span className="text-xs text-muted-foreground">Video ready</span>
                </div>
              )}

              {!uploadedVideo && (
                <p className="text-sm text-muted-foreground">
                  Upload a video file to display it here. Supported formats: MP4, WebM, OGG, MOV
                </p>
              )}
            </div>

            {/* Photo Editor */}
            {viewMode === 'montage' && (
              <>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Montage Photos</h3>
                    <div>
                      <input
                        type="file"
                        id="photo-upload"
                        accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button
                        onClick={() => document.getElementById('photo-upload')?.click()}
                        variant="outline"
                        size="sm"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Add Photos
                      </Button>
                    </div>
                  </div>

                  {customImages.length > 0 && (
                    <div className="border rounded-lg p-4 max-h-48 overflow-y-auto space-y-2">
                      {customImages.map((img, index) => (
                        <div
                          key={img.id}
                          className="flex items-center gap-3 p-2 bg-muted rounded hover:bg-muted/80 transition-colors"
                        >
                          <img
                            src={img.url}
                            alt={img.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <span className="flex-1 text-sm truncate">{img.name}</span>
                          <div className="flex gap-1">
                            <Button
                              onClick={() => handleMoveUp(index)}
                              disabled={index === 0}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <ChevronUp className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={() => handleMoveDown(index)}
                              disabled={index === customImages.length - 1}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={() => handleRemoveImage(img.id)}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {customImages.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      Using default work photos. Add your own to customize the montage.
                    </p>
                  )}
                </div>

                {/* Duration Controls */}
                {!montageError && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="seconds-per-photo">Seconds per Photo</Label>
                      <Input
                        id="seconds-per-photo"
                        type="number"
                        min="0.1"
                        max="10"
                        step="0.1"
                        value={secondsInput}
                        onChange={(e) => handleSecondsChange(e.target.value)}
                        onBlur={validateSeconds}
                        className="w-full"
                      />
                      <p className="text-xs text-muted-foreground">Range: 0.1 - 10 seconds</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transition-ms">Transition (ms)</Label>
                      <Input
                        id="transition-ms"
                        type="number"
                        min="0"
                        max="2000"
                        step="50"
                        value={transitionInput}
                        onChange={(e) => handleTransitionChange(e.target.value)}
                        onBlur={validateTransition}
                        className="w-full"
                      />
                      <p className="text-xs text-muted-foreground">Range: 0 - 2000 ms</p>
                    </div>
                  </div>
                )}

                {/* Playback Controls */}
                {!montageError && (
                  <>
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

                      {recordingSupported ? (
                        <Button
                          onClick={handleDownload}
                          variant="secondary"
                          size="lg"
                          disabled={isRecording || loadedImagesCount === 0}
                        >
                          <Download className="h-5 w-5 mr-2" />
                          {isRecording ? 'Recording...' : 'Download'}
                        </Button>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Video download not supported in this browser
                        </p>
                      )}
                    </div>

                    {/* Progress Indicator */}
                    <div className="text-center text-sm text-muted-foreground">
                      Photo {currentIndex + 1} of {activeImages.length}
                    </div>
                  </>
                )}
              </>
            )}
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
