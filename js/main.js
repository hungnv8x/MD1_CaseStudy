let canvas = document.getElementById('myCanvas');
let background = new Background(0, 0);
let bird = new Bird(canvas.width / 5, canvas.height / 2);
let flyAudio = new Audio("../Sounds/fly.mp3");
let scoreAudio = new Audio("../Sounds/score.mp3");
let score = 0
let highScore = loadHighScore('HighScore')
const distance = 120;
let tubeArr = []
tubeArr[0] = {
    x: canvas.width,
    y: 0
}

function drawTube() {
    for (let i = 0; i < tubeArr.length; i++) {
        let x = tubeArr[i].x;
        let y = tubeArr[i].y;
        let upTube = new UpperTube(x, y);
        let lowTube = new LowerTube(x, y + upTube.height + distance)
        upTube.draw(canvas);
        lowTube.draw(canvas);
        if (score < 5) {
            tubeArr[i].x -= 5;
        } else {
            tubeArr[i].x -= 10;
        }
        if (tubeArr[i].x == canvas.width / 2) {
            tubeArr.push({
                x: canvas.width,
                y: Math.floor(Math.random() * upTube.height) - upTube.height + 10
            })
        }
        if (checkCollision(bird, upTube) || checkCollision(bird, lowTube) || bird.y + bird.height > canvas.height) {
            if (score > highScore) {
                saveHighScore('HighScore', score)
            }
            confirm('Thua rồi, Ban có muốn chơi lại không', window.location.reload())
        }
        if (bird.x == tubeArr[i].x + upTube.width) {
            score++;
            scoreAudio.play();
        }
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let apples = [];
let spawnTimeApple = 20;
let timer = 0;

function drawApple() {
    timer++;
    if (timer > spawnTimeApple) {
        let x = random(0, canvas.width);
        let y = random(-5, -15);
        let apple = new Apple(x, y);
        apple.draw(canvas);
        apples.push(apple);
        timer = 0;
    }
}

function drawAllApple() {
    for (let i = 0; i < apples.length; i++) {
        apples[i].draw(canvas);
    }
}

function moveAllApple() {
    for (let i = 0; i < apples.length; i++) {
        apples[i].moveDown();
    }
}

function checkCollisionApple() {
    for (let i = 0; i < apples.length; i++) {
        if (checkCollision(bird, apples[i])) {
            confirm('Thua rồi, Ban có muốn chơi lại không', window.location.reload())
        }
    }
}

function checkCollision(object1, object2) {
    let left1 = object1.x;
    let right1 = object1.x + object1.width;
    let top1 = object1.y;
    let bottom1 = object1.y + object1.height;

    let left2 = object2.x;
    let right2 = object2.x + object2.width;
    let top2 = object2.y;
    let bottom2 = object2.y + object2.height;

    return !(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2)
}

function displayScore() {
    document.getElementById('score').innerText = score;
    document.getElementById('high-score').innerText = highScore;
}

function play() {
    background.draw(canvas);
    bird.draw(canvas);
    drawApple();
    drawAllApple();
    moveAllApple();
    checkCollisionApple();
    drawTube();
    displayScore();
    bird.moveDown();
    setTimeout(play, 50)
}

document.addEventListener('keyup', function (evt) {
    if (evt.keyCode == 32) {
        bird.moveUp();
        flyAudio.play();
    }
})
play();
