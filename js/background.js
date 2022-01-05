class Background {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = 'images/background.png'
        this.width = 900;
        this.height = 500;
    }

    draw(canvas) {
        this.ctx = canvas.getContext('2d');
        this.ctx.drawImage(this.image, this.x, this.y,this.width,this.height);
    }

}