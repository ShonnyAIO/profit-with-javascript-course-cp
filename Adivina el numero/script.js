/**
 * Guess The Number Game
 * (done) TODO: Get user value from input and save it to variable numberGuess
 * (done) TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * (done) TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * (done) TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * (done) TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * (done) TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * (done) TODO: Save the guess history in a variable called guess
 * (done) TODO: Display the guess history using displayHistory() function
 * (done) TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses
let guesses = [];
// Variable for store the correct random number
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    domEvents();
}


function domEvents(){
  /*
  for(let i = 0; i < document.body.children.length; i++){
    alert(document.body.children[i]);
  } */
  alert(document.body.lastElementChild.innerHTML);
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement
 */
 function displayResult(numberGuess){
   if (numberGuess<correctNumber){
     console.log("muy bajo");
     showNumberBelow();
   }
   else if (numberGuess==correctNumber) {
     console.log("correcto");
     showYouWon();
   }
   else {
     console.log("muy alto");
     showNumberAbove();
   };
 }

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */

function initGame(){
  // *CODE GOES BELOW HERE *
  correctNumber = getRandomNumber(); 
  guesses=[];
  resetResultContent();
  document.getElementById("history").innerHTML = "";
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random
 */
function getRandomNumber(){
  let randomNumber = Math.floor((Math.random()*100)+1);
  return randomNumber;
}

/**
 * Save guess history
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  guesses.push(guess);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length-1; // TODO
  let list = "<ul class='list-group'>";
  while(index>=0){
    list+="<li class='list-group-item'>";
    list+="Tu número " + guesses[index] + "</li>";
    index-=1;
  }
  list+="</ul>";
  document.getElementById("history").innerHTML = list;
  }

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Lo lograste :D"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters
   */
  let dialog=getDialog("won", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Su número es demasiado alto!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  let dialog=getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Su número es demasiado bajo!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  let dialog=getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}
