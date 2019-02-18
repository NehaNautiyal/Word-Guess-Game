
//Define the array with words to choose from
var chemWords = ["oxygen", "nitrogen", "carbon", "hydrogen", "helium", "sodium", "aluminum", "silver", "uranium", "copper"]

//Initial scores
var wins = 0;
var losses = 0;
var numGuesses = 10;

// Press any key to get started
document.onkeyup = function(event) {

    //when a key is pressed, a random word from the array is chosen
    var randomNumber = Math.floor(Math.random() * chemWords.length);
    var randomWord = chemWords[randomNumber];
    console.log(randomWord);

    //In order for the random chosen word to be displayed, need to know its length
    var randomWordLength = randomWord.length;
    console.log(randomWordLength);

    //display the number of lines depending on the length of the word

    var wordLines = document.getElementById("unknown");

    if (randomWordLength === 6) {
        wordLines.textContent = "___ ___ ___ ___ ___ ___";
    } else if (randomWordLength === 7) {
        wordLines.textContent = "___ ___ ___ ___ ___ ___ ___";
    } else {
        wordLines.textContent = "___ ___ ___ ___ ___ ___ ___ ___";
    }


//Play the game
document.onkeyup = function(event) {
    var usersLetter = event.key;

//evalute the letter being pressed to guess

var incorrectLetter = document.getElementById("incorrect");

//for a letter that is pressed, if it is NOT one of the letters in the word, 

//something is not right, the letter is not being checked among all the characters, only 1 character at random - "j"

for (var j = 0; j <= randomWordLength; j++) {
    if (usersLetter !== randomWord.charAt(j)) {
//display the letter in the incorrect letter section
        incorrectLetter.textContent = usersLetter + " is not in the word. Guess another letter!";
        numGuesses--;
} else if (usersLetter === randomWord.charAt(j)) {
    alert("You guessed a correct letter!");
}
}
    
    
}
}
    

    
    
    

