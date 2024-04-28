import { useEffect, useRef } from 'react';
import BackgroundImage from './background_image.jpg';
import { Particle } from './types';

const SnowingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { current: canvas } = canvasRef;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const count = 100;
    const particles: Particle[] = [];

    if (ctx) {
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.draw(ctx)
            particle.update();
        })
        window.requestAnimationFrame(animate)
    };
    
    animate();
    }
  }, []);



  return (
    <div className="h-screen w-full relative">
      <img src={BackgroundImage} className="w-full h-full object-cover" />
      <canvas className='absolute inset-0' ref={canvasRef}></canvas>
    </div>
  )
};

export default SnowingBackground;
