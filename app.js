let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () => {
    //console.log("game was draw.");
     msg.innerText = "Game was Draw. Play again.";
     msg.style.backgroundColor = "rgb(106, 81, 246)";
};

const showWinner = (userWin, userChoice, Compchoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("you win!");
        msg.innerText = `you win! Your ${userChoice} beats ${Compchoice}`;
        msg.style.backgroundColor = "pink";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("you lose");
         msg.innerText = `you lose. ${Compchoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //console.log("user choice =", userChoice);
    //Generate computer choice -> modular
    const Compchoice = genCompchoice(); 
    //console.log("comp choice = ", Compchoice);

    if(userChoice === Compchoice){
        //Draw Game
        drawGame();
    } else {
      let userWin = true;  
      if(userChoice === "rock"){
            //scissors, paper
            userWin = Compchoice === "paper" ? false : true;
      } else if(userChoice === "paper"){
            //rock, scissors
        userWin = Compchoice ==="scissors" ? false : true;
      } else {
            //rock, paper
        // Compchoice === "rock" ? false : true;
        userWin=Compchoice==="rock"?false : true;
      }
      showWinner(userWin, userChoice, Compchoice);

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        //console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});