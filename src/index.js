const word = "beautiful";
let lives = 7;
let correctLettersCounter = 0;

function generateUnderscores() {
    for (let i = 0; i < word.length; ++i) {
        const node = document.createElement("p");
        node.classList.add("under-score");
        node.setAttribute('id','underscore_'+ i);
        const textNode = document.createTextNode("_");
        node.appendChild(textNode);
        document.getElementById("underScores").appendChild(node);
    }
}

function playHangman() {
    let inputValue = document.getElementById('chooseLetter').value.toLowerCase();
    let correctLetter = false;

    if (inputValue.length === 1 && inputValue.match(/[a-z]/i)) {
        for (let i = 0; i < word.length; ++i) {
            if (word[i] === inputValue) {
               let letterElement = document.getElementById('underscore_'+ i);
               letterElement.innerText=inputValue.toUpperCase();
               correctLetter = true;
               ++correctLettersCounter;
            }
        }

        if (correctLettersCounter === word.length) {
            let gameWinning = document.getElementById('gameOverText');
            gameWinning.innerText = "Win!";
            document.getElementById("playGame").disabled = true;
        }
    }

    if (!correctLetter) {
       lives--;
       updateLivesText();
    }
}

function updateLivesText() {
    let livesWarning = document.getElementById('livesText');
    livesWarning.innerText = "You have " + lives + " lives left";

    if (lives === 0) {
        let gameOverWarning = document.getElementById('gameOverText');
        gameOverWarning.innerText = "Game Over!";
        document.getElementById("playGame").disabled = true;
    }
}

window.addEventListener("load", (event) => {
    generateUnderscores();
    updateLivesText();
});