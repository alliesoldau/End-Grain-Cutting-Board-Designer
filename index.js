let boardXDim = document.getElementById('xDim')
let boardYDim = document.getElementById('yDim')

let boardForm = document.getElementById("board-specs")
boardForm.addEventListener("submit", (e) => {
    e.preventDefault()
    boardXDim = e.target.xDim.value
    boardYDim = e.target.yDim.value
    renderBoard(boardXDim, boardYDim)
})
let checkerMarker = 0
function renderBoard(xDim, yDim) {
    let boardDiv = document.getElementById("board-render")  
    while (boardDiv.firstChild) { // this clears the render if you resubmit
        boardDiv.removeChild(boardDiv.firstChild)
    }  
    for (let y = 0; y < yDim; y++) { 
        let newColumn = document.createElement("div")
        for (let x = 0; x < xDim; x++) {
            let square = document.createElement("canvas")
            if (checkerMarker % 2 === 1) {
            square.id = "square1"
            } else {
                square.id = "square2"
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
// MAKE A BUTON CLICK EVENT FOR EACH WOOD TYPE
// CHANGE COLOR OF SQUARES WITH THE BUTTON CLICK
