const backButton = document.getElementById("go-back");
const playButton = document.getElementById("play-now");
const rulesButton = document.getElementById("how-to-play");
const gameButtons = document.getElementById("game-button");
const instructions = document.getElementById("instructions");

playButton.onclick = () => {
    location.href="./game.html";
};

rulesButton.onclick = () => {
    gameButtons.style.display = "none";
    instructions.style.display = "inherit";
};

backButton.onclick = () => {
    instructions.style.display = "none";
    gameButtons.style.display = "inherit";
};