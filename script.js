let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
//let sumEL = document.querySelector("#sum-el") --for alternative way to select element
let cardEl = document.getElementById("card-el")

let player = {
    name: "Soham",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips + "/-"

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    message = ""
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += " " + cards[i];
    }
    sumEL.textContent = "Sum: " + sum

    if (sum <= 20) {
        // console.log("Do you want to draw a new card?")
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        // console.log("Blackjack!")
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        // console.log("You are out of the game!")
        message = "You are out of the game!"
        isAlive = false
    }

    // console.log(hasBlackJack)
    // console.log(isAlive)
    // console.log(message)

    messageEL.textContent = message

}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard() // This is a placeholder for the new card value
    sum += card
    cards.push(card) // Add the new card to the cards array

    console.log(cards)

    renderGame()
    }

}


