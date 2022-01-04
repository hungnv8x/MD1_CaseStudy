class OngTren {
    constructor(width,height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(x,y){
        let ongTren = new Image();
        ongTren.src = "../images/ongtren.png"
        this.ctx.drawImage(ongTren,x,y)
    }
}