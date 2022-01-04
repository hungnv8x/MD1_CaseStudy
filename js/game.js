let hinhnen = new Hinhnen(900, 500);
let bird = new Bird(hinhnen.width / 5, hinhnen.height / 2, 38, 26);
let ongTren = new OngTren(52, 200);
let ongDuoi = new OngDuoi(52, 200);
let flyAudio = new Audio("../Sounds/fly.mp3");
let scoreAudio = new Audio("../Sounds/score.mp3");
let score = 0
let khoangCachGiuaHaiOng = 150
let khoangCachDenOngDuoi
let ongArr = []
ongArr[0] = {
    x: hinhnen.width,
    y: 0
}

function play() {
    hinhnen.draw()
    bird.draw();
    for (let i = 0; i < ongArr.length; i++) {
        khoangCachDenOngDuoi = ongTren.height + khoangCachGiuaHaiOng;
        ongTren.draw(ongArr[i].x, ongArr[i].y);
        ongDuoi.draw(ongArr[i].x, ongArr[i].y + khoangCachDenOngDuoi);
        ongArr[i].x -= 5;
        if (ongArr[i].x == hinhnen.width / 2) {
            ongArr.push({
                x: hinhnen.width,
                y: Math.random() * ongTren.height - ongTren.height
            })
        }
        console.log(score)
        if (ongArr[i].x == bird.x) {
            scoreAudio.play();
            score++;
            document.getElementById('score').innerHTML = "Score : " + score;
        }

        if (bird.y >= hinhnen.height || bird.x + bird.width >= ongArr[i].x
            && bird.x +bird.width<= ongArr[i].x + ongTren.width
            && (bird.y  <= ongArr[i].y + ongTren.height || bird.y + bird.height >= ongArr[i].y + khoangCachDenOngDuoi)) {
            return alert("Thua rồi, gà thế mà cũng đòi chơi :))")
        }
    }

    bird.moveDown();
    if (score < 5) {
        setTimeout(play, 50)
    } else if (score < 5) {
        setTimeout(play, 40)
    } else if (score < 10) {
        setTimeout(play, 30)
    } else if (score<15){
        setTimeout(play, 20)
    }else {
        setTimeout(play, 10)
    }

}

document.addEventListener('keyup', function (evt) {
    if (evt.keyCode == 32) {
        bird.moveUp();
        flyAudio.play();
    }
})
play();
