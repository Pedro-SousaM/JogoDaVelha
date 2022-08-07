let squareAll_1 = Array.from(document.querySelectorAll(".f1"))
let squareAll_2 = Array.from(document.querySelectorAll(".f2"))
let squareAll_3 = Array.from(document.querySelectorAll(".f3"))
let squareAll_4 = Array.from(document.querySelectorAll(".f4"))
let squareAll_5 = Array.from(document.querySelectorAll(".f5"))
let squareAll_V1 = Array.from(document.querySelectorAll(".v1"))
let squareAll_V2 = Array.from(document.querySelectorAll(".v2"))
let squareAll_V3 = Array.from(document.querySelectorAll(".v3"))
let wincard = document.querySelector(".wincard")
let PlayAgain = document.querySelector(".refresh")
let GameOver = 0
let n = 1
let player = ""
let can = true
let blu = document.querySelector(".GContainer")

function ref() {
    document.location.reload(true)
    console.log(221)
}
function win(player) {
    blu.className = "blur " + blu.className
    wincard.className = wincard.className + " winposition"
    PlayAgain.className = PlayAgain.className + " winposition2"
    if (can) {
        wincard.innerHTML = `<span id="player">${player} wins ! ${wincard.innerHTML}</span>`
        can = false
    }
}
function Gameover() {
    wincard.innerHTML = `<span>   Game Over !`
    wincard.className = wincard.className + " winposition"
    PlayAgain.className = PlayAgain.className + " winposition2"
}

function verificar(square, list, xlist, opxlist, vlist1, vlist2, vlist3) {
    square.addEventListener("click", () => {
        if (square.n == undefined) {
            GameOver++
            if (n == "1") {
                square.children[1].innerHTML = '<img src="https://i.ibb.co/18DTn3L/x.png" border="0" height="100%" width="100%">'
                n = 0
                square.n = false
                square.y = 2
                player = "Player 1"
                square.className = "square flip x"
            } else {
                square.children[1].innerHTML = '<img src="https://i.ibb.co/Xz6Kh1j/circulo.png" class="ball" border="0" height="110%" width="110%" >'
                n = 1
                square.n = false
                player = "Player 2"
                square.className = "square flip o"
            }

            if (list[0].className == list[1].className && list[1].className == list[2].className ||
                xlist[0].className == xlist[1].className && xlist[1].className == xlist[2].className ||
                opxlist[0].className == opxlist[1].className && opxlist[1].className == opxlist[2].className ||
                vlist1[0].className == vlist1[1].className && vlist1[1].className == vlist1[2].className ||
                vlist2[0].className == vlist2[1].className && vlist2[1].className == vlist2[2].className ||
                vlist3[0].className == vlist3[1].className && vlist3[1].className == vlist3[2].className) {
                win(player)
            } else if (GameOver == 9) {
                Gameover()
            }

        }
    })
}
squareAll_1.forEach((e) => { verificar(e, squareAll_1, squareAll_4, squareAll_5, squareAll_V1, squareAll_V2, squareAll_V3) })
squareAll_2.forEach((e) => { verificar(e, squareAll_2, squareAll_4, squareAll_5, squareAll_V1, squareAll_V2, squareAll_V3) })
squareAll_3.forEach((e) => { verificar(e, squareAll_3, squareAll_4, squareAll_5, squareAll_V1, squareAll_V2, squareAll_V3) })
PlayAgain.addEventListener("click", ref)