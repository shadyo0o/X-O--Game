let title = document.querySelector(".title");
let square = document.querySelectorAll(".square");
let turn = "x";

function clickSquare(id) {
  if (turn === "x" && document.getElementById(id).innerHTML == "") {
    title.innerHTML = "x";
    document.getElementById(id).innerHTML = "x";
    turn = "o";
    title.innerHTML = turn;
  } else if (turn === "o" && document.getElementById(id).innerHTML == "") {
    title.innerHTML = "o";
    document.getElementById(id).innerHTML = "o";
    turn = "x";
    title.innerHTML = turn;
  }
  winner();
}

let cartona = [];

function finish(num1, num2, num3) {
  document.getElementById(`square${num1}`).style.background = "green";
  document.getElementById(`square${num2}`).style.background = "green";
  document.getElementById(`square${num3}`).style.background = "green";
  title.innerHTML = `${cartona[num1]} is winner`;
  setInterval(() => {
    title.innerHTML += ".";
  }, [1000]);
  setTimeout(() => {
    location.reload();
  }, [4000]);
}

function winner() {
  let filledSquares = 0;
  for (let i = 1; i < 10; i++) {
    cartona[i] = document.getElementById("square" + i).innerHTML;
    if (cartona[i] != "") {
      filledSquares++;
    }
  }
  if (
    cartona[1] == cartona[2] &&
    cartona[2] == cartona[3] &&
    cartona[2] != ""
  ) {
    finish(1, 2, 3);
  } else if (
    cartona[4] == cartona[5] &&
    cartona[4] == cartona[6] &&
    cartona[5] != ""
  ) {
    finish(4, 5, 6);
  } else if (
    cartona[7] == cartona[8] &&
    cartona[8] == cartona[9] &&
    cartona[8] != ""
  ) {
    finish(7, 8, 9);
  } else if (
    cartona[1] == cartona[5] &&
    cartona[5] == cartona[9] &&
    cartona[9] != ""
  ) {
    finish(1, 5, 9);
  } else if (
    cartona[3] == cartona[5] &&
    cartona[5] == cartona[7] &&
    cartona[7] != ""
  ) {
    finish(3, 5, 7);
  } else if (
    cartona[1] == cartona[4] &&
    cartona[4] == cartona[7] &&
    cartona[7] != ""
  ) {
    finish(1, 4, 7);
  } else if (
    cartona[2] == cartona[5] &&
    cartona[5] == cartona[8] &&
    cartona[8] != ""
  ) {
    finish(5, 2, 8);
  } else if (
    cartona[3] == cartona[6] &&
    cartona[6] == cartona[9] &&
    cartona[9] != ""
  ) {
    finish(6, 9, 3);
  } else {
    if (filledSquares == 9) {
      title.innerHTML = "Draw";
      setInterval(() => {
        title.innerHTML += ".";
      }, [1000]);
      setTimeout(() => {
        location.reload();
      }, [4000]);
    }
  }
}
