const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

const userStart = [230, 10]
let currentPosition = userStart

// Create block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

// All the blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
]

// Draw all the blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
    }
}

// Call addBlock function
addBlocks()

// Add user
const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)

// Draw the user
function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

// Move user
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            currentPosition[0] -= 10
            drawUser()
            break;
    }
}

document.addEventListener('keydown', moveUser)