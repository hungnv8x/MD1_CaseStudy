class OngDuoi {
    constructor(width,height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(x,y){
        let ongduoi = new Image();
        ongduoi.src = "../images/ongduoi.png"
        this.ctx.drawImage(ongduoi,x,y)
    }
}