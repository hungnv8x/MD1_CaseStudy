class Apple {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = 'images/apple.png';
        this.width = 50;
        this.height = 50;
        this.speed = 10;
    }

    draw(canvas) {
        this.ctx = canvas.getContext('2d');
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    moveDown() {
        this.y += this.speed;
        this.x -=this.speed/2;
    }
}