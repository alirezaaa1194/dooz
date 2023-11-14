let items = document.querySelectorAll(".item");
let h2Elem = document.querySelector("h2");

let gameContainer = document.querySelector(".gameContainer");
let gameIntro = document.querySelector(".gameIntro");
let player1Input = document.querySelector(".player1");
let player2Input = document.querySelector(".player2");
let startBtn = document.querySelector(".startBtn");

let gameOutro = document.querySelector(".gameOutro");
let endTitle = document.querySelector(".endTitle");
let winTitle = document.querySelector(".winTitle");
let reStartBtn = document.querySelector(".reStartBtn");
let sumCountChildNodes = 0;

let player1 = "";
let player2 = "";
let whichUser = "";
startBtn.addEventListener("click", function () {
  if (player1Input.value.length > 0 && player2Input.value.length > 0) {
    gameIntro.style.cssText = "visibility: hidden; opacity: 0; display:none;";
    gameContainer.style.cssText =
      "visibility: visible; opacity: 1; display:flex;";
    // gameOutro.style.cssText = "visibility: visible; opacity: 1;";
    player1 = player1Input.value;
    player2 = player2Input.value;
    whichUser = player1;
    // alert(whichUser);
    h2Elem.innerHTML = `نوبت ${whichUser} عه ( X )`;
  }
});

let isEnd = false;
items.forEach(function (item) {
  item.addEventListener(
    "click",
    function (event) {
      playGame(event);
    },
    { once: true }
  );
});
function playGame(event) {
  if (isEnd == false) {
    if (whichUser === player1) {
      whichUser = player2;
      event.target.insertAdjacentHTML("beforeend", `<span>X</span>`);
      h2Elem.innerHTML = `نوبت ${whichUser} عه ( O )`;
    } else {
      whichUser = player1;
      event.target.insertAdjacentHTML("beforeend", `<span>O</span>`);
      h2Elem.innerHTML = `نوبت ${whichUser} عه ( X )`;
    }
    switch (event.target.id) {
      case "1":
        if (
          (document.getElementById("1").innerHTML ===
            document.getElementById("2").innerHTML &&
            document.getElementById("1").innerHTML ===
              document.getElementById("3").innerHTML) ||
          (document.getElementById("1").innerHTML ===
            document.getElementById("4").innerHTML &&
            document.getElementById("1").innerHTML ===
              document.getElementById("7").innerHTML) ||
          (document.getElementById("1").innerHTML ===
            document.getElementById("5").innerHTML &&
            document.getElementById("1").innerHTML ===
              document.getElementById("9").innerHTML)
        ) {
          console.log("you win");
          endGame();
        } else {
          console.log("no");
        }
        break;
      case "2":
        if (
          (document.getElementById("2").innerHTML ===
            document.getElementById("1").innerHTML &&
            document.getElementById("2").innerHTML ===
              document.getElementById("3").innerHTML) ||
          (document.getElementById("2").innerHTML ===
            document.getElementById("5").innerHTML &&
            document.getElementById("2").innerHTML ===
              document.getElementById("8").innerHTML)
        ) {
          endGame();
        } else {
          console.log("no");
        }
        break;
      case "3":
        if (
          (document.getElementById("3").innerHTML ===
            document.getElementById("2").innerHTML &&
            document.getElementById("3").innerHTML ===
              document.getElementById("1").innerHTML) ||
          (document.getElementById("3").innerHTML ===
            document.getElementById("6").innerHTML &&
            document.getElementById("3").innerHTML ===
              document.getElementById("9").innerHTML) ||
          (document.getElementById("3").innerHTML ===
            document.getElementById("5").innerHTML &&
            document.getElementById("3").innerHTML ===
              document.getElementById("7").innerHTML)
        ) {
          endGame();
        } else {
          console.log("no");
        }
        break;
      case "4":
        if (
          (document.getElementById("4").innerHTML ===
            document.getElementById("1").innerHTML &&
            document.getElementById("4").innerHTML ===
              document.getElementById("7").innerHTML) ||
          (document.getElementById("4").innerHTML ===
            document.getElementById("5").innerHTML &&
            document.getElementById("4").innerHTML ===
              document.getElementById("6").innerHTML)
        ) {
          endGame();
        } else {
          console.log("no");
        }
        break;
      case "5":
        if (
          (document.getElementById("5").innerHTML ===
            document.getElementById("1").innerHTML &&
            document.getElementById("5").innerHTML ===
              document.getElementById("9").innerHTML) ||
          (document.getElementById("5").innerHTML ===
            document.getElementById("2").innerHTML &&
            document.getElementById("5").innerHTML ===
              document.getElementById("8").innerHTML) ||
          (document.getElementById("5").innerHTML ===
            document.getElementById("3").innerHTML &&
            document.getElementById("5").innerHTML ===
              document.getElementById("7").innerHTML) ||
          (document.getElementById("5").innerHTML ===
            document.getElementById("4").innerHTML &&
            document.getElementById("5").innerHTML ===
              document.getElementById("6").innerHTML)
        ) {
          endGame();
        } else {
          console.log("no");
        }
        break;
      case "6":
        if (
          (document.getElementById("6").innerHTML ===
            document.getElementById("5").innerHTML &&
            document.getElementById("6").innerHTML ===
              document.getElementById("4").innerHTML) ||
          (document.getElementById("6").innerHTML ===
            document.getElementById("3").innerHTML &&
            document.getElementById("6").innerHTML ===
              document.getElementById("9").innerHTML)
        ) {
          endGame();
        } else {
          console.log("no");
        }
        break;
      case "7":
        if (
          (document.getElementById("7").innerHTML ===
            document.getElementById("5").innerHTML &&
            document.getElementById("7").innerHTML ===
              document.getElementById("3").innerHTML) ||
          (document.getElementById("7").innerHTML ===
            document.getElementById("8").innerHTML &&
            document.getElementById("7").innerHTML ===
              document.getElementById("9").innerHTML) ||
          (document.getElementById("7").innerHTML ===
            document.getElementById("4").innerHTML &&
            document.getElementById("7").innerHTML ===
              document.getElementById("1").innerHTML)
        ) {
          endGame();
        } else {
          console.log("no");
        }
        break;
      case "8":
        if (
          (document.getElementById("8").innerHTML ===
            document.getElementById("7").innerHTML &&
            document.getElementById("8").innerHTML ===
              document.getElementById("9").innerHTML) ||
          (document.getElementById("8").innerHTML ===
            document.getElementById("5").innerHTML &&
            document.getElementById("8").innerHTML ===
              document.getElementById("2").innerHTML)
        ) {
          endGame();
        } else {
          console.log("no");
        }
        break;
      case "9":
        if (
          (document.getElementById("9").innerHTML ===
            document.getElementById("8").innerHTML &&
            document.getElementById("9").innerHTML ===
              document.getElementById("7").innerHTML) ||
          (document.getElementById("9").innerHTML ===
            document.getElementById("6").innerHTML &&
            document.getElementById("9").innerHTML ===
              document.getElementById("3").innerHTML) ||
          (document.getElementById("9").innerHTML ===
            document.getElementById("5").innerHTML &&
            document.getElementById("9").innerHTML ===
              document.getElementById("1").innerHTML)
        ) {
          endGame();
        } else {
          console.log("no");
        }
    }
    event.target.style.background = "rgba(240, 79, 79, .2)";
    event.target.style.boxShadow = "0 0 20 rgba(240, 79, 79, .2)";
    event.target.style.border = "1px solid rgba(240, 79, 79, .7)";

    items.forEach(function (item) {
      sumCountChildNodes += item.childElementCount;
      console.log(sumCountChildNodes);
    });

    if (sumCountChildNodes == 45 && isEnd == false) {
      isEnd = true;
      // gameContainer.style.cssText =
      // "visibility: hidden; opacity: 0; display:none;";
      gameOutro.style.cssText =
        "visibility: visible; opacity: 1; display:flex;";
      winTitle.innerHTML = "هیجکس برنده نشد!";
      h2Elem.style.display = "none";
    }
  }
  function endGame() {
    if (whichUser == player2) {
      h2Elem.innerHTML = `${player1} برنده شد`;
      isEnd = true;
      //   gameContainer.style.cssText =
      //     "visibility: hidden; opacity: 0; display:none;";
      gameOutro.style.cssText =
        "visibility: visible; opacity: 1; display:flex;";
      winTitle.innerHTML = h2Elem.innerHTML;
    } else {
      h2Elem.innerHTML = `${player2} برنده شد`;
      isEnd = true;
      //   gameContainer.style.cssText =
      //     "visibility: hidden; opacity: 0; display:none;";
      gameOutro.style.cssText =
        "visibility: visible; opacity: 1; display:flex;";
      winTitle.innerHTML = h2Elem.innerHTML;
    }
  }
}

reStartBtn.addEventListener("click", function () {
  location.reload();
});
