let gameBoardButtons = document.querySelectorAll(".gameButtonz")


let locationStart = Math.floor(Math.random() * gameBoardButtons.length);


for (let i = 0; i < gameBoardButtons.length; i++) {
    if (i === locationStart) {
        gameBoardButtons[i].addEventListener("click", () => {
            gameBoardButtons[i].style.backgroundColor = "green"
        }) 
    }
    else {
            gameBoardButtons[i].addEventListener("click", () => {
                gameBoardButtons[i].style.backgroundColor = "red"
            })
        }
}





