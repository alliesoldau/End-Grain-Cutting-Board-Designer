let boardXDim = document.getElementById('xDim')
let boardYDim = document.getElementById('yDim')

let boardForm = document.getElementById("board-specs")
boardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    boardXDim = e.target.xDim.value
    boardYDim = e.target.yDim.value
    if (boardXDim % 2 === 1) {
        alert("X cannot be odd")
    } else {
    renderBoard(boardXDim, boardYDim)
    }
})

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

// render the checker board image
// MAKE SURE THERE IS A CHECK FOR BOTH WOOD TYPES BEING CHOSEN
// MAKE SURE THERE IS A CHECK FOR THE DIMENSIONS BEING CHOSEN
let checkerMarker = 0
function renderBoard(xDim, yDim) {
    let boardDiv = document.getElementById("board-render")  
    while (boardDiv.firstChild) { // this clears the render if you resubmit
        boardDiv.removeChild(boardDiv.firstChild)
    }  
    for (let y = 0; y < yDim; y++) { 
        let newColumn = document.createElement("div")
        newColumn.id = "column"
        for (let x = 0; x < xDim; x++) {
            let square = document.createElement("canvas")
            if (checkerMarker % 2 === 1) {
            square.id = "square1"
            square.style["background-color"] = `${wood1}`;
            console.log(square)
            } else {
                square.id = "square2"
                square.style["background-color"] = `${wood2}`;
            }
            newColumn.appendChild(square)
            checkerMarker++
        }
        if (xDim % 2 === 0) {
            checkerMarker++
        }
        boardDiv.appendChild(newColumn)
    }
}

