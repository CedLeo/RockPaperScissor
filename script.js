let winner = document.getElementById("winnerName");
let p1lbl = document.getElementById("p1choicelbl");
let p2lbl = document.getElementById("p2choicelbl");
let phase = document.getElementById("battlePhase");
let p1rock = document.getElementById("p1rock");
let p2rock = document.getElementById("p2rock");
let p1pap = document.getElementById("p1pap");
let p2pap = document.getElementById("p2pap");
let p1sc = document.getElementById("p1sc");
let p2sc = document.getElementById("p2sc");

let p1score = 0;
let p2score = 0;
let p1scorelbl = document.getElementById("p1scorelbl");
let p2scorelbl = document.getElementById("p2scorelbl");
//let p1action, p2action;

let p1c = 0,
  p2c = 0;
let rock = 1;
let pap = 2;
let sc = 3;

function p1action(ch, val, col) {
  p1c = val;
  p1lbl.textContent = ch;
}

function p2action(ch, val) {
  p2c = val;
  p2lbl.textContent = ch;
}

function whoWon() {
  if (p1c == p2c) {
    winner.textContent = "It's a tie!";
    phase.textContent = ""; // No phase since it's a tie.
  } else if (p1c == 1 && p2c == 2) {
    winner.textContent = "Player 2 wins!";
    phase.textContent = "Paper beats Rock.";
    p2score++;
    p2scorelbl.textContent = p2score;
  } else if (p1c == 1 && p2c == 3) {
    winner.textContent = "Player 1 wins!";
    phase.textContent = "Rock beats Scissors.";
    p1score++;
    p1scorelbl.textContent = p1score;
  } else if (p1c == 2 && p2c == 1) {
    winner.textContent = "Player 1 wins!";
    phase.textContent = "Paper beats Rock.";
    p1score++;
    p1scorelbl.textContent = p1score;
  } else if (p1c == 2 && p2c == 3) {
    winner.textContent = "Player 2 wins!";
    phase.textContent = "Scissors beats Paper.";
    p2score++;
    p2scorelbl.textContent = p2score;
  } else if (p1c == 3 && p2c == 1) {
    winner.textContent = "Player 2 wins!";
    phase.textContent = "Rock beats Scissors.";
    p2score++;
    p2scorelbl.textContent = p2score;
  } else if (p1c == 3 && p2c == 2) {
    winner.textContent = "Player 1 wins!";
    phase.textContent = "Scissors beats Paper.";
    p1score++;
    p1scorelbl.textContent = p1score;
  }
}
