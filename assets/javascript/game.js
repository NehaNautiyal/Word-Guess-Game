
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

    var blanks = [];
    for (var i = 0; i < randomWord.length; i++) {
        blanks[i] = " ___ ";
    }
    console.log(blanks);
    wordLines.textContent = blanks.join(" ");

//Play the game
document.onkeyup = function(event) {
    var usersLetter = event.key;

//evalute the letter being pressed to guess

var incorrectLetter = document.getElementById("incorrect");

//for a letter that is pressed, if matches one of the letters 

for (var j = 0; j < randomWordLength; j++) {
    if (usersLetter === randomWord[j]) {
//replace the blank line with the users input letter
console.log("You have a match!");
usersLetter = blanks[j];

//         incorrectLetter.textContent = usersLetter + " is not in the word. Guess another letter!";
//         numGuesses--;
//         alert("Now you have " + numGuesses " left!");
// } else if (
}
}
    
    
}
}
    

    
    
    

