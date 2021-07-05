// Desafio #1: Tu edad en dias
function tuEdadenDias() {
    let birthYear = prompt("Ingrese el year de su nacimiento");
    let ageInDays = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswers = document.createTextNode("Tienes " + ageInDays + " dias");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswers);
    document.getElementById('flex-box-results').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}


// Desafio #2: Generar Gatos
function generateCat() {
    let sound = new Audio('./sounds/Cat Meow.mp3');
    sound.play();
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Desafio #3: Piedra, Papel o Tijeras

function rpsGame(tuSeleccion) {
    let humanSeleccion, botSeleccion, results;

    humanSeleccion = tuSeleccion.id;
    botSeleccion = numeroParaSeleccionar(randToRpsInt());

    results = decideWinner(humanSeleccion, botSeleccion);
    message = finalMessage(results);
    rpsFrontEnd(humanSeleccion, botSeleccion, message);

    return;
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numeroParaSeleccionar(number) {
    return ["piedra", "papel", "tijera"][number];
}

function decideWinner(tuSeleccion, botSeleccion) {
    let rpsDatabase = {
        'piedra': { 'tijera': 1, 'piedra': 0.5, 'papel': 0 },
        'papel': { 'piedra': 1, 'papel': 0.5, 'tijera': 0 },
        'tijera': { 'papel': 1, 'tijera': 0.5, 'piedra': 0 },
    };

    let tuPuntaje = rpsDatabase[tuSeleccion][botSeleccion];
    let botPuntaje = rpsDatabase[botSeleccion][tuSeleccion];

    return [tuPuntaje, botPuntaje];
}

function finalMessage([tuPuntaje, botPuntaje]) {
    if (tuPuntaje === 0) {
        return { 'message': 'Perdiste D:', 'color': 'red' };
    } else if (tuPuntaje === 0.5) {
        return { 'message': 'Empate', 'color': 'yellow' };
    } else {
        return { 'message': 'Ganaste :D', 'color': 'green' };
    }
}

function rpsFrontEnd(humanSeleccion, botSeleccion, finalMessage) {

    let imagesDatabase = {
        'piedra': document.getElementById('piedra').src,
        'papel': document.getElementById('papel').src,
        'tijera': document.getElementById('tijera').src
    };

    // Eliminar todas las imagenes
    document.getElementById('piedra').remove();
    document.getElementById('papel').remove();
    document.getElementById('tijera').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanSeleccion] + "' width='150px' height='150px' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'  />";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botSeleccion] + "' width='150px' height='150px' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'  />";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Desafio #4: Cambiar todo los botones de colores
let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonData) {
    if (buttonData.value === 'red') {
        buttonsRed();
    } else if (buttonData.value === 'green') {
        buttonsGreen();
    } else if (buttonData.value === 'reset') {
        buttonsColorReset();
    } else if (buttonData.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning', 'btn-info', 'btn-secondary'];
    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 6);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

// Desafio #5: Blackjack
let blackjackGame = {
    'You': { 'scoreSpan': '#your-blackjack-results', 'div': '#your-box', 'score': 0, },
    'Dealer': { 'scoreSpan': '#dealer-blackjack-results', 'div': '#dealer-box', 'score': 0, },
    "Cards": ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    "cardsMap": { 'A': [1, 11], '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10 },
    "Wins": 0,
    "Losses": 0,
    "Draws": 0,
    'isStand': false,
    'turnsOver': false,
};

const you = blackjackGame['You'];
const dealer = blackjackGame['Dealer'];

const hitSound = new Audio('sounds/swish.m4a');

const winSound = new Audio('sounds/cash.mp3');

const lostSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

function blackjackHit() {
    if(blackjackGame['isStand'] === false){
        let card = randomCard();
        console.log(card);
        showCard(you, card);
        updateScore(you, card);
        showScore(you);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['Cards'][randomIndex];
}

function showCard(activePlayer, card) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    if(blackjackGame['turnsOver'] === true){
        let yourImage = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
    
        for (let i = 0; i < yourImage.length; i++) {
            yourImage[i].remove();
        }
    
        for (let i = 0; i < dealerImage.length; i++) {
            dealerImage[i].remove();
        }
    
        you['score'] = 0;
        dealer['score'] = 0;
    
        document.querySelector('#your-blackjack-results').textContent = 0;
        document.querySelector('#dealer-blackjack-results').textContent = 0;
    
        document.querySelector('#your-blackjack-results').style.color = 'white';
        document.querySelector('#dealer-blackjack-results').style.color = 'white';
    
        document.querySelector('#blackjack-results').textContent = "Vamos a jugar :D";
        document.querySelector('#blackjack-results').style.color = 'black';
    
        blackjackGame['isStand'] = false;
        blackjackGame['turnsOver'] = true;
    }

}

function updateScore(activePlayer, card) {
    if (card === 'A') {
        // If adding 11 keeps me below 21, add 11. Otherwise, add 1.
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'LIMITE!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;
    while(dealer['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(dealer, card);
        updateScore(dealer, card);
        showScore(dealer);
        await sleep(1000);
    }
    blackjackGame['turnsOver'] = true;
    let ganador = computerWinner();
    showResults(ganador);
}

// La computadora termina y debe retornar quien gano
// Actualizamos la tabla de victorias, derrotas y empatadas
function computerWinner() {
    let ganador;
    if (you['score'] <= 21) {
        // Condicion: Puntaje alto que el computador cuando el computador llega al limite
        if (you['score'] > dealer['score'] || (dealer['score'] > 21)) {
            blackjackGame['Wins']++;
            ganador = you;
        } else if (you['score'] < dealer['score']) {
            blackjackGame['Losses']++;
            ganador = dealer;
        } else if (you['score'] === dealer['score']) {
            blackjackGame['Draws']++;
        }
        // Condicion: cuando el usuario llega el limite pero no el computador
    } else if (you['score'] > 21 && dealer['score'] <= 21) {
        blackjackGame['Losses']++;
        ganador = dealer;
        // Condicion: Cuando el usuario llega el limite y el computador tambien
    } else if (you['score'] > 21 && dealer['score'] > 21) {
        blackjackGame['Draws']++;
    }

    console.log(blackjackGame);
    return ganador;
}

function showResults(ganador) {

    let message, messageColor;

    if(blackjackGame['turnsOver'] === true){
        if (ganador === you) {
            document.querySelector('#wins').textContent = blackjackGame['Wins'];
            message = 'Ganaste :D';
            messageColor = 'green';
            winSound.play();
        } else if (ganador === dealer) {
            document.querySelector('#losses').textContent = blackjackGame['Losses'];
            message = 'Perdiste D:';
            messageColor = 'red';
            lostSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['Draws'];
            message = "Empate :(";
            messageColor = "black";
        }
    
        document.querySelector('#blackjack-results').textContent = message;
        document.querySelector('#blackjack-results').style.color = messageColor;
    }
}