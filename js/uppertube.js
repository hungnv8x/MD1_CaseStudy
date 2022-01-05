class UpperTube {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = 'images/upperTube.png'
        this.width = 50;
        this.height = 300;
    }

    draw(canvas) {
        this.ctx = canvas.getContext('2d');
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}