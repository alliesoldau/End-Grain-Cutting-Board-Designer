
// declare variables for the name of the wood that was chosen
let wood1Text = document.getElementById("wood1")
let wood2Text = document.getElementById("wood2")

// define endgrain image routes
let maple = "images/maple-endgrain.jpg" // image source: https://woodgears.ca/wood_grain/hardwood.html
let cherry = "images/cherry-endgrain.png" // image source: https://butcherblockco.com/product/boos-sample-cherry-end-grain
let walnut = "images/walnut-endgrain.png" // image source: https://www.wood-database.com/black-walnut/
let beech = "images/beech-endgrain.jpg"  // image source: https://mlp.arboretum.purdue.edu/weboi/oecgi3.exe/INET_ECM_DispFeat?FEATCODE=FNR-BEECH&TOURMODE=0#.Y2znBuzMJJU
let purpleHeart = "images/purpleheart-endgrain.jpg" // image source: https://exotichardwoodsukltd.com/product/purpleheart-lumber-48-x-6-x-2/

// drop down button1 event listeners --> changes wood color
let mapleButton1 = document.getElementById("maple1")
mapleButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = maple
    wood1Text.innerText = "Maple"
})
let cherryButton1 = document.getElementById("cherry1")
cherryButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = cherry
    wood1Text.innerText = "Cherry"
})
let walnutButton1 = document.getElementById("walnut1")
walnutButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = walnut
    wood1Text.innerText = "Walnut"
})
let beechButton1 = document.getElementById("beech1")
beechButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = beech
    wood1Text.innerText = "Beech"
})
let purpleHeartButton1 = document.getElementById("purpleHeart1")
purpleHeartButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = purpleHeart
    wood1Text.innerText = "Purple Heart"
})
// drop down button2 event listeners --> changes wood color
let mapleButton2 = document.getElementById("maple2")
mapleButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = maple
    wood2Text.innerText = "Maple"
})
let cherryButton2 = document.getElementById("cherry2")
cherryButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = cherry
    wood2Text.innerText = "Cherry"
})
let walnutButton2 = document.getElementById("walnut2")
walnutButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = walnut
    wood2Text.innerText = "Walnut"
})
let beechButton2 = document.getElementById("beech2")
beechButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = beech
    wood2Text.innerText = "Beech"
})
let purpleHeartButton2 = document.getElementById("purpleHeart2")
purpleHeartButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = purpleHeart
    wood2Text.innerText = "Purple Heart"
})

let boardXDim = document.getElementById('xDim')
let boardYDim = document.getElementById('yDim')
let rectHeight;
let rectWidth;
let thickness;

let boardForm = document.getElementById("board-specs")
boardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    boardXDim = e.target.xDim.value
    boardYDim = e.target.yDim.value
    thickness = e.target.thickness.value // this will get passed into the thickness render maker
    // THE DEAULT VALUE ISNT WORKING. HOW CAN I MAKE IT DEFAULT TO 1 W/O HAVING THE CLICK IN THE FEILD??
    if (rectWidth !== "") {
    rectWidth = e.target.rectWidth.value
    } else {
        rectWidth = 1; // default to 50px --> 50px will equal 1 inch
    }
    if (rectHeight !== "") {
    rectHeight = e.target.rectHeight.value
    } else {
        rectHeight = 1
    }
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

// banana for scale
let bananaForScale = document.getElementById("banana")
let bananaButton = document.getElementById("flexCheckDefault")
bananaButton.checked = false
bananaButton.addEventListener("click", () => { 
    bananaButton.checked != bananaButton.checked })

// render the checker board image
let checkerMarker = 0
function renderBoard(xDim, yDim) {
        thicknessRender(xDim, yDim) // remove the variable you don't need
        let boardSpan = document.getElementById("board-render")
        // THE WAY IM DOING ROUND OVER ISNT REALISTIC. THINK OF MAYBE INSTEAD ADDING A SHADOW FOR 
        // ROUND OVER BASED ON THE BIT/DEPTH
        boardSpan.style["border-radius"] = `${radiusValue}px`
        while (boardSpan.firstChild) { // this clears the render if you resubmit
            boardSpan.removeChild(boardSpan.firstChild)
        }  
        for (let x = 1; x <= xDim; x++) { // create the checker and change the color depending on wood chosen
            let newColumn = document.createElement("div")
            newColumn.id = "column"
            for (let y = 1; y <= yDim; y++) {
                let square = document.createElement("canvas")
                // adjust the squares height and width depending on user input
                squareWidth = 50 * rectWidth
                squareHeight = 50 * rectHeight
                square.style.height = `${squareHeight}px`
                square.style.width = `${squareWidth}px`
                if (checkerMarker % 2 === 1) {
                square.id = "square1"
                square.style["background-image"] = `url(${wood1})`;
                } else {
                    square.id = "square2"
                    square.style["background-image"] = `url(${wood2})`;
                } 
                newColumn.appendChild(square)
                checkerMarker++ // increment the checker to change the wood type in the next square
                } if (yDim % 2 === 1) { // this makes sure the checker works even if y is odd
                    checkerMarker++
                } 
                if (xDim % 2 === 0) {
                    checkerMarker++
                }    
            boardSpan.appendChild(newColumn)
        } if (bananaButton.checked === true) {
            bananaForScale.style.display = "inline-block"
        } else {
            bananaForScale.style.display = "none"
        }
    }


// create the thickness render

function thicknessRender(xDim, yDim) {
    let thicknessCheckerMarker = 0
    let thicknessDiv = document.getElementById("thickness-render")
    let thicknessSquare = document.createElement("canvas")
    while (thicknessDiv.firstChild) { // this clears the render if you resubmit
        thicknessDiv.removeChild(thicknessDiv.firstChild)
    }
    for (let y = 1; y <= yDim; y++) {
        // adjust the squares height and width depending on user input
        let thicknessSquare = document.createElement("canvas")
        let thicknessPx = 50 * thickness
        thicknessHeight = 50 * rectHeight
        thicknessSquare.style.width = `${thicknessPx}px`
        thicknessSquare.style.height = `${thicknessHeight}px`
        // I had to flip wood 1 and wood 2 here to get it to render correctly... idk why
        if (thicknessCheckerMarker % 2 === 1) {
        thicknessSquare.id = "square2"
        thicknessSquare.style["background-image"] = `url(${wood2})`;
        } else {
            thicknessSquare.id = "square1"
            thicknessSquare.style["background-image"] = `url(${wood1})`;
        } 
        thicknessDiv.appendChild(thicknessSquare)
        thicknessCheckerMarker++ 
    thicknessDiv.append(thicknessSquare)
    }
}

