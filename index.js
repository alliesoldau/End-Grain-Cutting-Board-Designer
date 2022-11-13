
// declare variables for the name of the wood that was chosen
let wood1Text = document.getElementById("wood1")
let wood2Text = document.getElementById("wood2")
let wood1Face;
let wood2Face;

// define endgrain image routes
let maple = "images/maple-endgrain.jpg" // image source: https://woodgears.ca/wood_grain/hardwood.html
let cherry = "images/cherry-endgrain.png" // image source: https://butcherblockco.com/product/boos-sample-cherry-end-grain
let walnut = "images/walnut-endgrain.png" // image source: https://www.wood-database.com/black-walnut/
let beech = "images/beech-endgrain.jpg"  // image source: https://mlp.arboretum.purdue.edu/weboi/oecgi3.exe/INET_ECM_DispFeat?FEATCODE=FNR-BEECH&TOURMODE=0#.Y2znBuzMJJU
let purpleHeart = "images/purpleheart-endgrain.jpg" // image source: https://exotichardwoodsukltd.com/product/purpleheart-lumber-48-x-6-x-2/
let mapleFace = "images/maple-facegrain.png" // image source: https://img.hunkercdn.com/1260x/photos.demandstudios.com/getty/article/83/72/139397746.jpg?type=webp
let cherryFace = "images/cherry-facegrain.png" // image source: https://buy.advantagelumber.com/products/8-4-brazilian-cherry-lumber-fl?currency=USD&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=Cj0KCQiAgribBhDkARIsAASA5bvXc_JVKRgNCwbXJDev0NQn1QJ9zSkPNI_pnc5JzoeYuyY82Yx7UuMaAg67EALw_wcB&variant=31529701113898
let walnutFace = "images/walnut-facegrain.jpg" // image source: https://m.media-amazon.com/images/I/511rz9i92dL._AC_.jpg
let beechFace = "images/beech-facegrain.jpg" // image source: https://www.wood-database.com/wp-content/uploads/fagus-sylvatica.jpg
let purpleHeartFace = "images/purpleheart-facegrain.png" // image source: https://www.wood-database.com/purpleheart/
// drop down button1 event listeners --> changes wood color
let mapleButton1 = document.getElementById("maple1")
mapleButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = maple
    wood1Face = mapleFace
    wood1Text.innerText = "Maple"
})
let cherryButton1 = document.getElementById("cherry1")
cherryButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = cherry
    wood1Face = cherryFace
    wood1Text.innerText = "Cherry"
})
let walnutButton1 = document.getElementById("walnut1")
walnutButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = walnut
    wood1Face = walnutFace
    wood1Text.innerText = "Walnut"
})
let beechButton1 = document.getElementById("beech1")
beechButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = beech
    wood1Face = beechFace
    wood1Text.innerText = "Beech"
})
let purpleHeartButton1 = document.getElementById("purpleHeart1")
purpleHeartButton1.addEventListener("click", (e) => { 
    e.preventDefault()
    wood1 = purpleHeart
    wood1Face = purpleHeartFace
    wood1Text.innerText = "Purple Heart"
})
// drop down button2 event listeners --> changes wood color
let mapleButton2 = document.getElementById("maple2")
mapleButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = maple
    wood2Face = mapleFace
    wood2Text.innerText = "Maple"
})
let cherryButton2 = document.getElementById("cherry2")
cherryButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = cherry
    wood2Face = cherryFace
    wood2Text.innerText = "Cherry"
})
let walnutButton2 = document.getElementById("walnut2")
walnutButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = walnut
    wood2Face = walnutFace
    wood2Text.innerText = "Walnut"
})
let beechButton2 = document.getElementById("beech2")
beechButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = beech
    wood2Face = beechFace
    wood2Text.innerText = "Beech"
})
let purpleHeartButton2 = document.getElementById("purpleHeart2")
purpleHeartButton2.addEventListener("click", (e) => { 
    e.preventDefault()
    wood2 = purpleHeart
    wood2Face = purpleHeartFace
    wood2Text.innerText = "Purple Heart"
})

let boardXDim;
let boardYDim;
let rectHeight;
let rectWidth;
let thickness;
let inputColumns;
let inputRows;

let boardForm = document.getElementById("board-specs")
boardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // TODO: UPON SUBMIT RESET WHATEVER WAS IN THE BOARD RENDER AND THEN RESHOW IT IN THE RENDER
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
        alert("Please select a positive 'Rows' dimension")
    } else if (boardXDim <=0) {
        alert("Please select a positive 'Columns' dimension")
    } else if (boardXDim % 2 === 1) { // make sure the board is not symmetric
        alert("'Columns' cannot be odd")
    } else if (boardXDim > boardYDim) {
        alert("'Columns' must be less than or equal to rows")
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
    // make the source board thickness a readonly value based on the rectangle height
    let sourceBoardThickness = document.getElementById("sBoardThickness")
    sourceBoardThickness.placeholder = rectHeight
})

// source board information
let sBoardMaxWidth;
let sBoardThickness;
let bladeKerf;

// NEED TO ADD MORE LOGIC AROUND WARNINGS FOR THE LIMITS OF THE CALCULATOR
let sBoardForm = document.getElementById("sBoard-specs")
sBoardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    sBoardMaxWidth = e.target.sBoardWidth.value
    sBoardThickness = rectHeight
    bladeKerf = e.target.bladeKerf.value
    let columnsAdjusted = parseInt(boardXDim)
    let rowsAdjusted = parseInt(boardYDim)
    // MAKE IT CLEAR THAT YOU NEED TO RESUBMIT EVERYTHING FOR THE SOURCE MATERIAL TO RECALCULATE
    // MAYBE HIDE THE SOURCE MATERIAL REC WHEN THE MAIN BOARD DESIGN IS SUBMITTED?
    // fill out source board non calculated info
    let wood1TableText = document.getElementById("wood1Table")
    wood1TableText.innerText = wood1Text.innerText
    let wood2TableText = document.getElementById("wood2Table")
    wood2TableText.innerText = wood2Text.innerText
    let width1Table = document.getElementById("width1Table")
    width1Table.innerText = sBoardMaxWidth
    let width2Table = document.getElementById("width2Table")
    width2Table.innerText = sBoardMaxWidth
    let thickness1Table = document.getElementById("thickness1Table")
    thickness1Table.innerText = sBoardThickness
    let thickness2Table = document.getElementById("thickness2Table")
    thickness2Table.innerText = sBoardThickness
    // logic to calculate how many source board of given length are required to fit the strips needed
    let wood1Strips = columnsAdjusted/2
    let wood2Strips = columnsAdjusted/2
    let wood1PlusKerf = wood1Strips + bladeKerf
    let wood2PlusKerf = wood2Strips + bladeKerf
    wood1SingleStripLength = rectHeight * rowsAdjusted + bladeKerf
    wood2SingleStripLength = rectHeight * rowsAdjusted + bladeKerf
    wood1CumStripLength = wood1SingleStripLength * wood1Strips
    wood2CumStripLength = wood2SingleStripLength * wood2Strips
    let wood1sBoardsToFitWidth = Math.ceil(((wood1Strips * wood1PlusKerf) / sBoardMaxWidth))
    let wood2sBoardsToFitWidth = Math.ceil(((wood2Strips * wood2PlusKerf) / sBoardMaxWidth))
    let sBoard1NumTable = document.getElementById("sBoard1NumTable")
    let sBoard2NumTable = document.getElementById("sBoard2NumTable")
    sBoard1NumTable.innerText = wood1sBoardsToFitWidth
    sBoard2NumTable.innerText = wood2sBoardsToFitWidth
    // logic to calculate total consecutive board length required
    let crossCutKerf1 = rowsAdjusted * bladeKerf
    let crossCutKerf2 = rowsAdjusted * bladeKerf
    let totalConsecLength1 = wood1sBoardsToFitWidth * wood1SingleStripLength + crossCutKerf1
    let totalConsecLength2 = wood2sBoardsToFitWidth * wood2SingleStripLength + crossCutKerf2
    let totalConsecLength1Table = document.getElementById("totalConsecLength1Table")
    let totalConsecLength2Table = document.getElementById("totalConsecLength2Table")
    totalConsecLength1Table.innerText = totalConsecLength1
    totalConsecLength2Table.innerText = totalConsecLength2
})

// add print functionality to the rec table
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}

let radiusValue = 5 // default to give radius small round over cuz it's pretty

// banana for scale
let bananaForScale = document.getElementById("banana")
let bananaButton = document.getElementById("flexCheckDefault")
bananaButton.checked = false
bananaButton.addEventListener("click", () => { 
    bananaButton.checked != bananaButton.checked })

// render the checker board image
let endGrainH3 = document.getElementById("endGrainTitle")
let faceGrainH3 = document.getElementById("faceGrainTitle")
let checkerMarker = 0
function renderBoard(xDim, yDim) {
        endGrainH3.innerHTML = "Top View (end grain)"
        faceGrainH3.innerHTML = "Side View (face grain)"
        thicknessRender(xDim, yDim) // remove the variable you don't need
        let boardSpan = document.getElementById("board-render")
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
    thicknessDiv.style["border-radius"] = `${radiusValue}px`
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
        thicknessSquare.id = "square1"
        thicknessSquare.style["background-image"] = `url(${wood1Face})`;
        } else {
            thicknessSquare.id = "square2"
            thicknessSquare.style["background-image"] = `url(${wood2Face})`;
        } 
        thicknessDiv.appendChild(thicknessSquare)
        thicknessCheckerMarker++ 
    thicknessDiv.append(thicknessSquare)
    }
}

