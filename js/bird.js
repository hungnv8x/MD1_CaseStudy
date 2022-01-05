class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = 'images/bird.png'
        this.width = 40;
        this.height = 30;
    }

    draw(canvas) {
        this.ctx = canvas.getContext('2d');
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    moveDown() {
        this.y += 5;
    }

    moveUp() {
        this.y -= 50;
    }
}