let userscore = 0;
let Computerscore = 0;

const pictures = document.querySelectorAll(".picture");
const Move = document.querySelector("#Move");
const userscorepara = document.querySelector("#user-Score");
const Computerscorpara = document.querySelector("#Computer-Score");

const ganComputerGame = () => {
  let option = ["paper", "scissor", "rock"];
  const RandValue = Math.floor(Math.random() * 3);
  return option[RandValue];
  //  Math.floor uses for remove decimple digits from numbers!
};

const drawGame = () => {
  Move.innerText = "draw game!";
  Move.style.background = "gray";
};

const showwin = (youwin) => {
  if (youwin) {
    userscore++;
    userscorepara.innerText = userscore;

    Move.innerText = "Well Played You Win!";
    Move.style.background = "green";
  } else {
    Computerscore++;
    Computerscorpara.innerText = Computerscore;
    Move.innerText = "You lose.";
    Move.style.background = "red";
  }
};

const playGame = (pictureId) => {
  console.log("user Click was", pictureId);
  //  This is Modular way of Programing!---+++++*****
  const computerGame = ganComputerGame();
  console.log("Computer Click was", computerGame);

  if (pictureId === computerGame)
    // gamrDraw
    drawGame();
  else {
    let youwin = true;
    if (pictureId === "rock") {
      youwin = computerGame === "paper" ? false : true;
    } else if (pictureId === "paper") {
      youwin = computerGame === "scissor" ? false : true;
    } else {
      youwin = computerGame === "rock" ? false : true;
    }
    showwin(youwin);
  }
};

pictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    const pictureId = picture.getAttribute("id");
    playGame(pictureId);
  });
});
