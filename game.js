// DOM Elements
const playerScoreDisplay = document.getElementById('player-score');
const compScoreDisplay = document.getElementById('comp-score');

let player;
let computer;

function computerPlay() {
    const r_num= Math.floor(Math.random() * 3);
    if(r_num==0){
        return "Rock";
    }
    else if(r_num==1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const message = document.getElementById('message');
    const player_move = playerSelection.toLowerCase();
    const computer_move = computerSelection.toLowerCase();
    if(player_move=="rock" && computer_move=="paper") {
        message.innerText = "You Lose";
        compScoreDisplay.innerText = parseInt(compScoreDisplay.innerText) + 1;
    }
    else if(player_move=="scissors" && computer_move=="rock"){
        message.innerText = "You Lose";
        compScoreDisplay.innerText = parseInt(compScoreDisplay.innerText) + 1;
    }
    else if(player_move=="paper" && computer_move=="scissors"){
        message.innerText = "You Lose";
        compScoreDisplay.innerText = parseInt(compScoreDisplay.innerText) + 1;
    }
    else if(player_move==computer_move) {
        message.innerText = "Tie";
    }
    else {
        message.innerText = "You Win";
        playerScoreDisplay.innerText = parseInt(playerScoreDisplay.innerText) + 1;
    }
}
function updateBoard(playerSelection, computerSelection) {
    const playerBoard = document.getElementById("player-b")
    const ComputerBoard = document.getElementById("computer-b")
    //player-board
    if(playerSelection.toLowerCase()=="rock"){
        playerBoard.className = "fas fa-hand-rock";
    }
    else if(playerSelection.toLowerCase()=="paper") {
        playerBoard.className = "fas fa-hand-paper";
    }
    else if(playerSelection.toLowerCase()=="scissors") {
        playerBoard.className = "fas fa-hand-scissors";
    }

    //computer board
    if(computerSelection.toLowerCase()=="rock"){
        ComputerBoard.className = "fas fa-hand-rock";
    }
    else if(computerSelection.toLowerCase()=="paper") {
        ComputerBoard.className = "fas fa-hand-paper";
    }
    else if(computerSelection.toLowerCase()=="scissors") {
        ComputerBoard.className = "fas fa-hand-scissors";
    }


}
function playerPlay(e) {
    const computerSelection = computerPlay();
    const playerSelection = e.target.innerText;
    updateBoard(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => button.addEventListener('click', playerPlay));