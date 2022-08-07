let squareAll_1 = Array.from(document.querySelectorAll(".f1"))//horizontal win sequence 1
let squareAll_2 = Array.from(document.querySelectorAll(".f2"))//horizontal win sequence 2
let squareAll_3 = Array.from(document.querySelectorAll(".f3"))//horizontal win sequence 3
let squareAll_4 = Array.from(document.querySelectorAll(".f4"))//diagonal win sequence 1
let squareAll_5 = Array.from(document.querySelectorAll(".f5"))//diagonal win sequence 2
let squareAll_V1 = Array.from(document.querySelectorAll(".v1"))//vertical win sequence 1
let squareAll_V2 = Array.from(document.querySelectorAll(".v2"))//vertical win sequence 2
let squareAll_V3 = Array.from(document.querySelectorAll(".v3"))//vertical win sequence 3
let wincard = document.querySelector(".wincard")
let PlayAgain = document.querySelector(".refresh")//refresh button
let GameOver = 0
let n = 1//determines who will play next
let player = ""
let can = true
let blu = document.querySelector(".GContainer")//a div that is above all content

function ref() {
    document.location.reload(true)
}
function win(player) {
    blu.className = "blur " + blu.className //blur effect in background content after the game
    wincard.className = wincard.className + " winposition"//brings wincard to +/- center of screen
    PlayAgain.className = PlayAgain.className + " winposition2"//same thing with refresh button
    if (can) {
        wincard.innerHTML = `<span>${player} wins ! ${wincard.innerHTML}`//says who won
        can = false//the game can't have 2 winners
    }
}
function Gameover() { //if nobody win
    wincard.innerHTML = `<span>   Game Over !`
    wincard.className = wincard.className + " winposition"
    PlayAgain.className = PlayAgain.className + " winposition2"
}

function verify(square, list, I_xlist, II_xlist, vlist1, vlist2, vlist3) {
    square.addEventListener("click", () => {// when clicked ...
        if (square.n == undefined) {//for the first time ...
            GameOver++
            if (n == "1") {//and be the time of player one ...
                square.children[1].innerHTML = '<img src="https://i.ibb.co/18DTn3L/x.png" border="0" height="100%" width="100%">'//import a X img behind the card
                n = 0//give the move to Player 2
                square.n = false//set the card as clicked
                player = "Player 1"//set the last player as Player 1
                square.className = "square flip x"//flip the card and set as clicked by player one 
            } else {//do the same thing but like Player 2
                square.children[1].innerHTML = '<img src="https://i.ibb.co/Xz6Kh1j/circulo.png" class="ball" border="0" height="110%" width="110%" >'
                n = 1
                square.n = false
                player = "Player 2"
                square.className = "square flip o"
            }

            if (list[0].className == list[1].className && list[1].className == list[2].className || //verify if exist 3 flipped cards of the same Player 
                I_xlist[0].className == I_xlist[1].className && I_xlist[1].className == I_xlist[2].className ||
                II_xlist[0].className == II_xlist[1].className && II_xlist[1].className == II_xlist[2].className ||
                vlist1[0].className == vlist1[1].className && vlist1[1].className == vlist1[2].className ||
                vlist2[0].className == vlist2[1].className && vlist2[1].className == vlist2[2].className ||
                vlist3[0].className == vlist3[1].className && vlist3[1].className == vlist3[2].className) {
                win(player)
            } else if (GameOver == 9) {//if doesn't, verify if all the cards were flipped
                Gameover()
            }

        }
    })
}
squareAll_1.forEach((e) => { verify(e, squareAll_1, squareAll_4, squareAll_5, squareAll_V1, squareAll_V2, squareAll_V3) })//give the sequences as params to function verify 
squareAll_2.forEach((e) => { verify(e, squareAll_2, squareAll_4, squareAll_5, squareAll_V1, squareAll_V2, squareAll_V3) })
squareAll_3.forEach((e) => { verify(e, squareAll_3, squareAll_4, squareAll_5, squareAll_V1, squareAll_V2, squareAll_V3) })
PlayAgain.addEventListener("click", ref)
