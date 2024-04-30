import { random } from '../../utils/common';
import SpriteImage from './bird_sprite.png';

const image = new Image();
image.src = SpriteImage;

const FrameToSpriteMapping = [
    {x: 0, y: 0},
    {x: 200, y: 0},
    {x: 400, y: 0},
    {x: 0, y: 200},
    {x: 200, y: 200},
    {x: 400, y: 200}
];

export class Bird {
    x: number;
    y: number;
    speedX: number;
    spriteXOffset: number;
    spriteYOffset: number;
    spriteWidth: number;
    spriteHeight: number;
    itemWidth: number;
    itemHeight: number;
    frame: number;

    screenHeight: number;
    screenWidth: number;
    constructor(canvasWidth: number, canvasHeight: number) {
        this.speedX = random(3, 6);
        this.spriteXOffset= 0;
        this.spriteYOffset = 0;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.itemWidth = 150;
        this.itemHeight = 150;
        this.frame = 0;

        this.screenWidth = canvasWidth;
        this.screenHeight = canvasHeight;

        this.x = -random(0, this.screenWidth);
        this.y = random(20, this.screenHeight - 400);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(image, this.spriteXOffset, this.spriteYOffset, this.spriteWidth, this.spriteHeight, this.x, this.y, this.itemWidth, this.itemHeight)
    }

    update() {
        this.x += this.speedX;
            this.frame = Math.floor(Math.abs((this.x / 30) % 5));
            console.log(this.frame);
            if (this.frame >= FrameToSpriteMapping.length) this.frame = 0;
            this.spriteXOffset = FrameToSpriteMapping[this.frame].x;
            this.spriteYOffset = FrameToSpriteMapping[this.frame].y;
        if (this.x > this.screenWidth) {
            this.x = -random(0, this.screenWidth/3);
            this.y = random(100, this.screenHeight - 400);
            this.speedX = this.speedX = random(3, 6);
        }
    }
}