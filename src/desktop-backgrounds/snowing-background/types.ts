import { random } from "../../utils/common";
import SnowFlakeWhite from './snowflake-white.svg';

const image = new Image();
image.src = SnowFlakeWhite;

export class Particle {
  x;
  y;
  radius;
  speedX;
  speedY;
  screenHeight;
  screenWidth;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.screenWidth = canvasWidth;
    this.screenHeight = canvasHeight;

    this.x = Math.random() * this.screenWidth;
    this.y = Math.random() * this.screenHeight;
    this.radius = Math.random() * 2.5 + 1.25;
    this.speedX = random(-1, 1);
    this.speedY = random(1, 2);
  }

  draw(ctx: CanvasRenderingContext2D) {
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI, false);
    // ctx.fillStyle = 'white';
    // ctx.fill();
    // ctx.closePath();
    ctx.drawImage(image, this.x, this.y, this.radius * 2, this.radius * 2)
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y > this.screenHeight) {
      this.y = -10;
      this.x = Math.random() * this.screenWidth * 1.5
    }
  }
}