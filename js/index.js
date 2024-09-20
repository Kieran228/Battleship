let gameBoardButtons = document.querySelectorAll(".gameButtonz")
let locationStart = Math.floor(Math.random() * gameBoardButtons.length);
let locationStart2 = Math.floor(Math.random() * gameBoardButtons.length);
let locationStart3 = Math.floor(Math.random() * gameBoardButtons.length);

let battleship = document.getElementById("battleship");
let hitResultsIMG = document.querySelector(".hitOrMiss");
let hitText = document.querySelector(".hitOrMissText");



for (let i = 0; i < gameBoardButtons.length; i++) {
    if (i === locationStart || i === locationStart2 || i === locationStart3) {
        gameBoardButtons[i].addEventListener("click", () => {
            gameBoardButtons[i].style.backgroundColor = "green"
        
            hitResultsIMG.src = "media/kaboom-explosive.gif";
            hitText.innerHTML = "GREAT JOB! YOU LANDED A HIT!";
            
            //* change content within new div and div items
        })
    }
    else {
        gameBoardButtons[i].addEventListener("click", () => {
            gameBoardButtons[i].style.backgroundColor = "red"
    
            hitResultsIMG.src = "media/dodge-bullets.gif";
            hitText.innerHTML = "YOU MISSED! TRY AGAIN!";
        })
    }
};



//todo if the button turns red, new text should appear that says you missed. Vice versa for Green

//todo I could also add an image every time i missed/hit.








