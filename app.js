let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user");
const compScore_span = document.getElementById("comp");
const scoreBox_div = document.querySelector(".score_box");
const result_h1 = document.getElementById("statement");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");



function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random()*3);
    return choices[random]; 
}

function win(userChoice, compChoice) {
    userScore++; 
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_h1.innerHTML = "You Won!!";
}
function lose(userChoice, compChoice) {
    compScore++; 
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_h1.innerHTML = "computer wins";
}
function draw(userChoice, compChoice) {
    result_h1.innerHTML = "It is draw!!";
}

function game(userChoice) {
    const compChoice = computerChoice();
    switch (compChoice + userChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw();
            break;           
    }
}

function main() {
    
rock_div.addEventListener("click", function(){
    game("rock");
})

paper_div.addEventListener("click", function(){
    game("paper");
})

scissors_div.addEventListener("click", function(){
    game("scissors");
})
}

main();

