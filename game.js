var seconds = document.getElementById("timer").textContent;
const bubblesContainer = document.getElementById("bubbles-container");
var score = 0;

makeBubbles(20);

function makeBubbles(number) {
    for (let i = 1; i <= number; i++) {
        makeBubble(i);
    }
    for (let i = 1; i <= number; i++) {
        let bubble = document.getElementById(`bubble${i}`);
        bubble.style.left = `${getRandomInt(0, 100)}%`;
        bubble.style.animationDuration = `${getRandomInt(30, 100) / 10}s`;
        bubble.onclick = (evt) => {
            bubble.style.visibility = "hidden";
            playSound();
            score++;
            document.getElementById("score").innerHTML = score;
            setTimeout((evt) => {
                bubble.style.visibility = "visible";
            }, 3000);
        };
    }
}

function playSound() {
    console.log("sound");
    document.getElementById("play").play();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeBubble(i) {
    bubblesContainer.innerHTML += `<div class="bubble" id=bubble${i}></div>`;
}

var timer = setInterval(function () {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds == 0) {
        clearInterval(timer);
        endGame();
        winGame()
    }
}, 1000);



function endGame() {
    document.getElementById("bubbles-container").style.display = "none";
    document.getElementById("game-over").style.display = "flex";
    document.getElementById("final-score").textContent = score;
    document.getElementById("play-again").onclick = () => {
        console.log("foo");
        location.href = "./game.html";
    };
}


    if(seconds==0){
    document.getElementById("score").innerHTML="YOU WIN!";
}

