// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Element

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// game.addEventListener('mousedown', function (e) {
//     if (e.target.className === 'play-again') {
//         window.location.reload();
//     }
// });
// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won

    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, You Win!`);

    } else {
        // Wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            // Game Over
            gameOver(false, `Game Over, You Loose!, correct number was ${winningNum}`);

        } else {
            // Game continues - answer wrong

            // change the border color
            guessInput.style.borderColor = 'red';
            // clear the input
            guessInput.value = '';
            // tell user it's wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guess left`, 'red');
        }
    }

});

// game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // change text color
    message.style.color = color;
    // set message
    setMessage(msg)
    // Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
// get random winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}