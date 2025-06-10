import React, { useEffect, useRef } from 'react';

interface AudioWaveProps {
  className?: string;
  color?: string;
  height?: number;
  animated?: boolean;
}

const AudioWave: React.FC<AudioWaveProps> = ({ 
  className = '', 
  color = '#8b5cf6', 
  height = 60,
  animated = true 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const centerY = height / 2;
    let animationId: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < width; x += 2) {
        const frequency = 0.02;
        const amplitude = 20 + Math.sin(x * 0.01 + time) * 15;
        const y = centerY + Math.sin(x * frequency + time) * amplitude;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      if (animated) {
        time += 0.1;
        animationId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [color, height, animated]);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={height}
      className={className}
    />
  );
};

export default AudioWave;