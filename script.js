const message = document.querySelector('.round-message');
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.comp-score');
const selectionPlayer =document.querySelector('.player_info');
const selectionComputer =document.querySelector('.pc_info');
const images = Array.from(document.querySelectorAll('.option-img'));
const playerDisplay =document.querySelector('.player_info');
const pcDisplay =document.querySelector('.pc_info');

/*
let rockImg = document.createElement("img");
rockImg.src = 'rock.png';
rockImg.setAttribute("height", "148");
rockImg.setAttribute("width", "148");

let paperImg = document.createElement("img");
paperImg.src = 'paper.png';
paperImg.setAttribute("height", "148");
paperImg.setAttribute("width", "148");

let scisImg = document.createElement("img");
scisImg.src = 'scissors.png';
scisImg.setAttribute("height", "148");
scisImg.setAttribute("width", "148");
*/

var userScore = 0;
var computerScore = 0;

function Compchoice(){
    const choices = ['R', 'P', 'S'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(){
    userScore++;
    message.textContent = "Congrats! You won this round!";
}

function lose(){
    computerScore++;
    message.textContent = "Aww you lost, what are you a GURRLLL!";
}

function draw(){
    message.textContent = "DRAAWWWWWW";
}


function playRound(playerSelection, computerSelection){
    switch(playerSelection + computerSelection){
    case "RS":
        playerDisplay.innerHTML="<img src = rock.png height = 148 width = 148>";
        pcDisplay.innerHTML="<img src = scissors.png height = 148 width = 148>"
        win();
        break;
    case "PR":
        playerDisplay.innerHTML= "<img src = paper.png height = 148 width = 148>";
        pcDisplay.innerHTML= "<img src = rock.png height = 148 width = 148>";
        win();
        break;
    case "SP":
        playerDisplay.innerHTML= "<img src = scissors.png height = 148 width = 148>";
        pcDisplay.innerHTML= "<img src = paper.png height = 148 width = 148>";
        win();
        break;

    case "RP":
        playerDisplay.innerHTML="<img src = rock.png height = 148 width = 148>";
        pcDisplay.innerHTML="<img src = paper.png height = 148 width = 148>"
        lose();
        break;
    case "PS":
        playerDisplay.innerHTML="<img src = paper.png height = 148 width = 148>";
        pcDisplay.innerHTML="<img src = scissors.png height = 148 width = 148>"
        lose();
        break;
    case "SR":
        playerDisplay.innerHTML="<img src = scissors.png height = 148 width = 148>";
        pcDisplay.innerHTML="<img src = rock.png height = 148 width = 148>";
        lose();
        break;

    case "RR":
        playerDisplay.innerHTML="<img src = rock.png height = 148 width = 148>";
        pcDisplay.innerHTML="<img src = rock.png height = 148 width = 148>"
        draw();
        break;
    case "PP":
        playerDisplay.innerHTML="<img src = paper.png height = 148 width = 148>";
        pcDisplay.innerHTML="<img src = paper.png height = 148 width = 148>"
        draw();
        break;
    case "SS":
        playerDisplay.innerHTML="<img src = scissors.png height = 148 width = 148>";
        pcDisplay.innerHTML="<img src = scissors.png height = 148 width = 148>"
        draw();
        break;
    }
}


images.forEach((image) =>
  image.addEventListener('click', () => {
    if (userScore >= 5 || computerScore >= 5) {
      return;
    }
    playerDisplay.remove
    game(image.dataset.image);
  })
);



function game(playerSelect){
    let playerSelection = playerSelect.charAt(0);
    let computerSelection = Compchoice();
    let roundResult = playRound(playerSelection, computerSelection);

    scorePlayer.textContent = userScore;
    scoreComputer.textContent = computerScore;
   

    if (userScore >= 5 && computerScore < 5) {
        message.textContent = 'Game Over. You Win!';
    } 
    else if (userScore < 5 && computerScore >= 5) {
        message.textContent = 'Gonna Cry Goblin Jr.? You LOSE';
    }

}
