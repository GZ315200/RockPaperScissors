let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getConputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}


function win(user, computer) {
    const smallUserword = "user".fontsize(5).sub();
    const smallCompword = "computer".fontsize(5).sub();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(user)}${smallUserword} beats ${convertToWord(computer)}${smallCompword}. You win`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 600)
}

function lose(user, computer) {
    const smallUserword = "user".fontsize(5).sub();
    const smallCompword = "computer".fontsize(5).sub();
    const userChoice_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(user)}${smallUserword} loses to ${convertToWord(computer)}${smallCompword}. You lost`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 600)
}

function draw(user, computer) {
    const smallUserword = "user".fontsize(5).sub();
    const smallCompword = "computer".fontsize(5).sub();
    const userChoice_div = document.getElementById(user);
    result_div.innerHTML = `${convertToWord(user)}${smallUserword} equals ${convertToWord(computer)}${smallCompword}. It's a draw`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 600)
}

function game(userChoice) {
    const computerChoice = getConputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

function toZero() {
    userScore = 0;
    computerScore = 0;
    this.window.location.reload(true);
}


function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
    scoreBoard_div.addEventListener('click', () => toZero())
}
main();




