class Ong {
    constructor(width,height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    drawDuoi(x,y){
        let ongduoi = new Image();
        ongduoi.src = "../images/ongduoi.png"
        this.ctx.drawImage(ongduoi,x,y)
    }
    drawTren(x,y){
        let ongTren = new Image();
        ongTren.src = "../images/ongtren.png"
        this.ctx.drawImage(ongTren,x,y)
    }
}