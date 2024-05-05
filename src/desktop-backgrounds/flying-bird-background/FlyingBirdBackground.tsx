import { useEffect, useRef } from 'react';
import BackgroundImage from './background_image2.jpg';
import SpriteImage from './bird_sprite.png';
import { Bird } from './entities';

const image = new Image();
image.src = SpriteImage;

const FlyingBirdBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let isCleanedUp = false;
    const { current: canvas } = canvasRef;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const numberOfBirds = 5;
    const birds: Bird[] = [];
    if (ctx) {
      for (let i = 0; i < numberOfBirds; i++) {
        birds.push(new Bird(canvas.width, canvas.height));
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        birds.forEach((bird) => {
          bird.draw(ctx)
          bird.update();
        });

        if (!isCleanedUp) {
          window.requestAnimationFrame(animate)
        }
      };

      animate();
    }

    return () => {
      isCleanedUp = true;
    }
  }, []);



  return (
    <div className="h-screen w-full relative">
      <img src={BackgroundImage} className="w-full h-full object-cover" />
      <canvas className='absolute inset-0' ref={canvasRef}></canvas>
    </div>
  )
};

export default FlyingBirdBackground;
