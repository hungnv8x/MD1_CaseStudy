class Bird {
    constructor(x,y,width,height) {
        this.x = x;
        this.y =y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(){
        let bird = new Image();
        bird.src="../images/bird.png"
        this.ctx.drawImage(bird,this.x,this.y);
    }
    moveDown(){
        this.y +=5;
    }
    moveUp(){
        this.y -=60;
    }
}