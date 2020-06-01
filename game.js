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
    const player_move = playerSelection.toLowerCase();
    const computer_move = computerSelection.toLowerCase();
    if(player_move=="rock" && computer_move=="rock"){
        return "Tie";
    }
    else if(player_move=="rock" && computer_move=="paper") {
        return "You Lose";
    }
    else if(player_move=="scissors" && computer_move=="rock"){
        return "You Lose";
    }
    else if(player_move=="paper" && computer_move=="scissors"){
        return "You Lose";
    }
    else if(player_move==="paper") {
        return "Tie";
    }
    else {
        return "You Win";
    }
}
const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))