let container = document.querySelector(".container");
let boxes = document.querySelector(".boxes");
let button = document.querySelectorAll("button");

let btn1 = document.getElementById("button-1");
let btn2 = document.getElementById("button-2");
let btn3 = document.getElementById("button-3");
let btn4 = document.getElementById("button-4");
let btn5 = document.getElementById("button-5");
let btn6 = document.getElementById("button-6");
let btn7 = document.getElementById("button-7");
let btn8 = document.getElementById("button-8");
let btn9 = document.getElementById("button-9");
let endmsg = document.querySelector(".endmsg");

let restrtbutton;

let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let play = true;
let turn = "player1";
let round = 0;

if (play) {
  button.forEach((index) => {
    index.addEventListener("click", (e) => {
      //   let clicked = e.target.innerHTML;
      if (turn == "player1") {
        player1move(e.target);
      } else {
        player2move(e.target);
      }
    });
  });
}

function player1move(clicked) {
  if (clicked.innerHTML !== "") {
    alert("invalid move, try another");
  } else if (round >= 8) {
    clicked.innerHTML = "X";
    alert("DRAW");
    endgame();
  } else {
    turn = "player2";
    round += 1;
    console.log(round);
    clicked.innerHTML = "X";
    win();
  }
}

function player2move(clicked) {
  if (clicked.innerHTML !== "") {
    alert("invalid move, try another");
  } else if (round >= 8) {
    clicked.innerHTML = "O";
    alert("DRAW");
    endgame();
  } else {
    turn = "player1";
    round += 1;
    console.log(round);
    clicked.innerHTML = "O";
    win();
  }
}

function win() {
  for (const element of winpattern) {
    let position1val = button[element[0]].innerText;
    let position2val = button[element[1]].innerText;
    let position3val = button[element[2]].innerText;
    if (
      position1val !== "" &&
      position1val === position2val &&
      position2val === position3val
    ) {
      let winner = position1val === "X" ? "player1" : "player2";
      endmsg.innerHTML = `CONGRATULATIONS ${winner.toUpperCase()} WON `;
      play = false;
      endgame();
    }
  }
}

function endgame() {
  play = false;
  for (const element of button) {
    element.disabled = true;
  }
  restrtbutton = document.createElement("button");
  restrtbutton.id = "resetButton";
  restrtbutton.innerHTML = "Restart";
  boxes.appendChild(restrtbutton);
  restrtbutton.addEventListener('click', (e)=>{
    newgame();
  })
}

function newgame(){
  play = true;
  for (const element of button) {
    element.disabled = false;
    element.innerHTML = "";
  }
round =0;
endmsg.innerHTML="";
restrtbutton.remove();
}
