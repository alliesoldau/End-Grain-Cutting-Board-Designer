
// declare variables for the name of the wood that was chosen
let wood1Text = document.getElementById("wood1")
let wood2Text = document.getElementById("wood2")

// Drop down button1 event listeners --> changes wood color
let mapleButton1 = document.getElementById("maple1")
mapleButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = "#ded0c1"
    wood1Text.innerText = "Maple"
})
let cherryButton1 = document.getElementById("cherry1")
cherryButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = "#6A1616"
    wood1Text.innerText = "Cherry"
})
let walnutButton1 = document.getElementById("walnut1")
walnutButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = "#773f1a"
    wood1Text.innerText = "Walnut"
})
let beechButton1 = document.getElementById("beech1")
beechButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = "#dd8a3c"
    wood1Text.innerText = "Beech"
})
let purpleHeartButton1 = document.getElementById("purpleHeart1")
purpleHeartButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = "#8d515f"
    wood1Text.innerText = "Purple Heart"
})
// Drop down button2 event listeners --> changes wood color
let mapleButton2 = document.getElementById("maple2")
mapleButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = "#ded0c1"
    wood2Text.innerText = "Maple"
})
let cherryButton2 = document.getElementById("cherry2")
cherryButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = "#6A1616"
    wood2Text.innerText = "Cherry"
})
let walnutButton2 = document.getElementById("walnut2")
walnutButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = "#773f1a"
    wood2Text.innerText = "Walnut"
})
let beechButton2 = document.getElementById("beech2")
beechButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = "#dd8a3c"
    wood2Text.innerText = "Beech"
})
let purpleHeartButton2 = document.getElementById("purpleHeart2")
purpleHeartButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = "#8d515f"
    wood2Text.innerText = "Purple Heart"
})

let boardXDim = document.getElementById('xDim')
let boardYDim = document.getElementById('yDim')

let boardForm = document.getElementById("board-specs")
boardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    boardXDim = e.target.xDim.value
    boardYDim = e.target.yDim.value
    if (boardYDim <= 0 && boardXDim <= 0) { // make sure dimensions have been chosen
        alert("Please select postitive board dimensions")
    } else if (boardYDim <=0) {
        alert("Please select a positive y dimension")
    } else if (boardXDim <=0) {
        alert("Please select a positive x dimension")
    } else if (boardXDim % 2 === 1) { // make sure the board is not symmetric
        alert("X cannot be odd")
    } else if (wood1Text.innerText.length === 0) { // make sure wood types have been chosen
        if (wood2Text.innerText.length === 0) {
            alert("Please select your wood types")
        } else {
        alert("Please pick your 1st wood type")
        }
    } else if (wood2Text.innerText.length === 0) {
        alert("Please pick your 2nd wood type")
    } else { 
    renderBoard(boardXDim, boardYDim) // if it passes all tests, render the board
    }
})

let radiusValue = 0 // default to zero radius round over

// check to see if a round over was selected
let radio0 = document.getElementById("noneRadius")
radio0.addEventListener("click", () => {
    radiusValue = 0
})
let radio1 = document.getElementById("smallRadius")
radio1.addEventListener("click", () => {
    radiusValue = 10
})
let radio2 = document.getElementById("mediumRadius")
radio2.addEventListener("click", () => {
    radiusValue = 18
})
let radio3 = document.getElementById("fullRadius")
radio3.addEventListener("click", () => {
    radiusValue = 25
})

// render the checker board image
let checkerMarker = 0
function renderBoard(xDim, yDim) {
        let boardSpan = document.getElementById("board-render")  
        while (boardSpan.firstChild) { // this clears the render if you resubmit
            boardSpan.removeChild(boardSpan.firstChild)
        }  
        for (let x = 0; x < xDim; x++) { // create the checker and change the color depending on wood chosen
            let newColumn = document.createElement("div")
            newColumn.id = "column"
            for (let y = 0; y < yDim; y++) {
                let square = document.createElement("canvas")
                if (checkerMarker % 2 === 1) {
                square.id = "square1"
                square.style["background-color"] = `${wood1}`;
                } else {
                    square.id = "square2"
                    square.style["background-color"] = `${wood2}`;
                }
                newColumn.appendChild(square)
                checkerMarker++
                if (x === 0 && y === 0) { // add radii to the outter corner dependant on chosen radius 
                    square.style["border-radius"] = `${radiusValue}px 0px 0px 0px`;
                } else if (x === 0 &&  y === yDim - 1){
                    square.style["border-radius"] = `0px 0px 0px ${radiusValue}px`;
                } else if (x === xDim - 1 &&  y === 0){
                    square.style["border-radius"] = `0px ${radiusValue}px 0px 0px`;
                }
                else if (x === xDim - 1 && y === yDim - 1) {
                    square.style["border-radius"] = `0px 0px ${radiusValue}px 0px`;
                }
            } 
            if (xDim % 2 === 0) {
                checkerMarker++
            }
            boardSpan.appendChild(newColumn)
        }
    }


