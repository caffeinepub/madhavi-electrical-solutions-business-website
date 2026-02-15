export function isRecordingSupported(): boolean {
  try {
    return !!(
      typeof MediaRecorder !== 'undefined' &&
      typeof HTMLCanvasElement !== 'undefined' &&
      HTMLCanvasElement.prototype.captureStream
    );
  } catch {
    return false;
  }
}

function getSupportedMimeType(): string | null {
  const types = [
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm',
  ];

  for (const type of types) {
    if (MediaRecorder.isTypeSupported(type)) {
      return type;
    }
  }

  return null;
}

export async function recordMontage(
  imagePaths: string[],
  secondsPerPhoto: number = 2,
  transitionMs: number = 500
): Promise<Blob> {
  if (!isRecordingSupported()) {
    throw new Error('Recording is not supported in this browser');
  }

  const mimeType = getSupportedMimeType();
  if (!mimeType) {
    throw new Error('No supported video codec found');
  }

  if (imagePaths.length === 0) {
    throw new Error('No images provided for recording');
  }

  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 675;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  // Capture stream from canvas
  const stream = canvas.captureStream(30); // 30 fps
  
  let mediaRecorder: MediaRecorder;
  try {
    mediaRecorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 2500000, // 2.5 Mbps
    });
  } catch (error) {
    throw new Error('Failed to initialize MediaRecorder: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }

  const chunks: Blob[] = [];

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  const recordingPromise = new Promise<Blob>((resolve, reject) => {
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      resolve(blob);
    };

    mediaRecorder.onerror = (event) => {
      reject(new Error('MediaRecorder error during recording'));
    };
  });

  // Start recording
  try {
    mediaRecorder.start();
  } catch (error) {
    throw new Error('Failed to start recording: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }

  // Render each image with transitions
  const photoDuration = secondsPerPhoto * 1000; // Convert to ms
  const displayDuration = photoDuration - transitionMs;

  for (let i = 0; i < imagePaths.length; i++) {
    let currentImg: HTMLImageElement;
    try {
      currentImg = await loadImage(imagePaths[i]);
    } catch (error) {
      console.warn(`Skipping failed image: ${imagePaths[i]}`);
      continue;
    }

    let nextImg: HTMLImageElement | null = null;
    if (i < imagePaths.length - 1) {
      try {
        nextImg = await loadImage(imagePaths[i + 1]);
      } catch (error) {
        console.warn(`Failed to preload next image: ${imagePaths[i + 1]}`);
      }
    }

    // Draw current image with zoom animation
    const startTime = Date.now();

    while (Date.now() - startTime < displayDuration) {
      const progress = (Date.now() - startTime) / displayDuration;
      const scale = 1.0 + (Math.sin(progress * Math.PI * 2) * 0.05);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawImageScaled(ctx, currentImg, canvas.width, canvas.height, scale);

      await new Promise(resolve => setTimeout(resolve, 1000 / 30)); // 30 fps
    }

    // Crossfade to next image
    if (nextImg) {
      const fadeStart = Date.now();
      
      while (Date.now() - fadeStart < transitionMs) {
        const fadeProgress = (Date.now() - fadeStart) / transitionMs;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw current image fading out
        ctx.globalAlpha = 1 - fadeProgress;
        drawImageScaled(ctx, currentImg, canvas.width, canvas.height, 1.05);
        
        // Draw next image fading in
        ctx.globalAlpha = fadeProgress;
        drawImageScaled(ctx, nextImg, canvas.width, canvas.height, 1.0);
        
        ctx.globalAlpha = 1.0;

        await new Promise(resolve => setTimeout(resolve, 1000 / 30)); // 30 fps
      }
    }
  }

  // Stop recording
  mediaRecorder.stop();

  return recordingPromise;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

function drawImageScaled(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number,
  scale: number = 1.0
) {
  const canvasAspect = canvasWidth / canvasHeight;
  const imgAspect = img.width / img.height;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (imgAspect > canvasAspect) {
    drawHeight = canvasHeight;
    drawWidth = img.width * (canvasHeight / img.height);
    offsetX = (canvasWidth - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = canvasWidth;
    drawHeight = img.height * (canvasWidth / img.width);
    offsetX = 0;
    offsetY = (canvasHeight - drawHeight) / 2;
  }

  ctx.save();
  ctx.translate(canvasWidth / 2, canvasHeight / 2);
  ctx.scale(scale, scale);
  ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  ctx.restore();
}
