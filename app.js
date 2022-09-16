const cardArray = [
    {
        name : "fries",
        img : "images/fries.png"
    },
    {
        name : "cheeseburger",
        img : "images/cheeseburger.png"
    },
    {
        name : "hotdog",
        img : "images/hotdog.png"
    },
    {
        name : "ice-cream",
        img : "images/ice-cream.png"
    },
    {
        name : "milkshake",
        img : "images/milkshake.png"
    },
    {
        name : "pizza",
        img : "images/pizza.png"
    },
    {
        name : "fries",
        img : "images/fries.png"
    },
    {
        name : "cheeseburger",
        img : "images/cheeseburger.png"
    },
    {
        name : "hotdog",
        img : "images/hotdog.png"
    },
    {
        name : "ice-cream",
        img : "images/ice-cream.png"
    },
    {
        name : "milkshake",
        img : "images/milkshake.png"
    },
    {
        name : "pizza",
        img : "images/pizza.png"
    }
   

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector("#grid")
const result = document.querySelector("#result")
let cardsChossen = []
let cardsChossenId = []
const cardsWon = []


// Create Board

function createBoard(){
    for(let i =0; i<cardArray.length;i++){
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        grid.appendChild(card)
    }
}

// Check for matches

function checkMatch(){
    const cards = document.querySelectorAll("#grid img")
    const optionOneId = cardsChossenId[0]
    const optionTwoId = cardsChossenId[1]
    console.log(cards)
    console.log("check for match")

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("You have clicked the same Image!")
    }
    else if(cardsChossen[0] == cardsChossen[1]){
        alert("You found a match")
        cards[optionOneId].setAttribute("src","images/white.png")
        cards[optionTwoId].setAttribute("src","images/white.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChossen)
    }else{
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("Sorry, Try again!")
    }
    result.textContent = cardsWon.length
    cardsChossen = []
    cardsChossenId = []

    if(cardsWon.length == cardArray.length/2){
        result.textContent = "Congratulations you found them all!!"
    }
    
}

function flipCard() {
    console.log(cardArray)
    let cardId = this.getAttribute("data-id")
    cardsChossen.push(cardArray[cardId].name)
    cardsChossenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)

    if(cardsChossen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

createBoard()