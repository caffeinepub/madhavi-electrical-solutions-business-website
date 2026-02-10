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

export async function recordMontage(
  imagePaths: string[],
  speed: number = 1
): Promise<Blob> {
  if (!isRecordingSupported()) {
    throw new Error('Recording is not supported in this browser');
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
  const mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm;codecs=vp9',
    videoBitsPerSecond: 2500000, // 2.5 Mbps
  });

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
      reject(new Error('MediaRecorder error'));
    };
  });

  // Start recording
  mediaRecorder.start();

  // Render each image with transitions
  const baseDuration = 2000 / speed; // Duration per image in ms
  const transitionDuration = 500; // Crossfade duration

  for (let i = 0; i < imagePaths.length; i++) {
    const currentImg = await loadImage(imagePaths[i]);
    const nextImg = i < imagePaths.length - 1 ? await loadImage(imagePaths[i + 1]) : null;

    // Draw current image with zoom animation
    const startTime = Date.now();
    const displayDuration = baseDuration - transitionDuration;

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
      
      while (Date.now() - fadeStart < transitionDuration) {
        const fadeProgress = (Date.now() - fadeStart) / transitionDuration;
        
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
    img.onerror = reject;
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
