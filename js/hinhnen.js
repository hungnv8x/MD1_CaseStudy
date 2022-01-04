class Hinhnen {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        let hinh = new Image();
        hinh.src = "../images/nenchinh.png";
        this.ctx.drawImage(hinh, 0, 0)
    }

}