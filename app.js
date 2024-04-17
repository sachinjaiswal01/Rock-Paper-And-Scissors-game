let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score"); 

const genCompChoice = () => {
    //rock ,paper,scissors.
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);  //Math.random() -> random number b/w 0-1,multiplication by 3 will change it to 0-2,Math.floor(Math.random()*)-> will chnage it 0-2,this random number will work as index for above array.
    return options[randIdx];
}

const drawGame =() =>{
    msg.innerText = "Gmae was draw, Play again!";
    msg.style.backgroundColor ="#8C5F66"
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#2A9134";
    }
    else{
        comScore++;
        compScorePara.innerText=comScore;
        msg.innerText =`You lose ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#82204A";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice is = ",userChoice);
    //genrate computer choice.
    const compChoice=genCompChoice();
    console.log("computer choice is = ",compChoice);

    if(compChoice==userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp may scissors,paper
            userWin = compChoice == "paper" ? false :true;
        }
        else if(userChoice === "paper"){
            //computer may generate rock,scissor.
            userWin = compChoice == "scissors" ? false : true;
        }
        else{
            //ab computer ke pass rock ya paper hoga.
            userWin = compChoice =="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log("choice is clicked = ",userChoice)
        playGame(userChoice);
    })
})