
//Define the array with words to choose from
var chemWords = ["oxygen", "nitrogen", "carbon", "hydrogen", "helium", "sodium", "aluminum", "silver", "uranium", "copper",
"potassium", "sulfur", "krypton", "radon", "iron", "gold"]
var blanks = [];


//Initial scores
var wins = 0;
var losses = 0;



// Press any key to get started
document.onkeyup = function (event) {

    var refreshPage = function () {

        var numGuesses = 10;
        var wrongLetters = [];
        var wrongLetter = document.getElementById("incorrect");
        var rightLetter = document.getElementById("rightLetters");
        var guessesLeft = document.getElementById("guessesRemaining");

        wrongLetter.textContent = "Incorrect Guesses: " + wrongLetters.join(" ");
        guessesLeft.textContent = numGuesses;

        //when a key is pressed, a random word from the array is chosen
        var randomNumber = Math.floor(Math.random() * chemWords.length);
        var randomWord = chemWords[randomNumber];
        console.log(randomWord);

        //In order for the random chosen word to be displayed, need to know its length
        var randomWordLength = randomWord.length;
        console.log(randomWordLength);

        //display the number of lines depending on the length of the word

        var wordLines = document.getElementById("unknown");

        for (var i = 0; i < randomWord.length; i++) {
            blanks[i] = " ___ ";
        }
        console.log(blanks);
        wordLines.textContent = blanks.join(" ");

        //Play the game
        document.onkeyup = function (event) {
            var usersLetter = event.key;
            console.log(usersLetter);

            //evalute the letter being pressed to guess



            //when a letter that is pressed, for the entirety of the word, check if it matches one of the letters 


            var matchLetter = function (randomLetter) {
                var letterMatch = false;


                for (var j = 0; j < randomWordLength; j++) {
                    // if the user's letter is in the random word at object from 0 to the length of the word,
                    if (randomWord[j] === usersLetter) {
                        letterMatch = true;
                        console.log(letterMatch);
                        blanks[j] = usersLetter;
                        wordLines.textContent = blanks.join(" ");
                    }
                }

                if (letterMatch === false) {
                    // add that letter to an array called wrongLetters
                    wrongLetters.push(usersLetter);
                    console.log(wrongLetters);
                    numGuesses--;
                    guessesLeft.textContent = numGuesses;
                    wrongLetter.textContent = "Incorrect Guesses: " + wrongLetters.join(" ");
                }
            }
            matchLetter(usersLetter);

            if (numGuesses === 1) {
                alert("You have 1 guess left. Choose carefully!")
            }

            var numLosses = document.getElementById("losses");

            if (numGuesses === 0) {
                losses++;
                numLosses.textContent = losses;
                refreshPage();
            }

            var numWins = document.getElementById("wins");    

            
            console.log("This is blanks array: " + blanks);
            console.log("This is wordLines array: " + wordLines);
            
            if (blanks.includes(" ___ ") === false) {
                wins++;
                numWins.textContent = wins;
                alert("Congratulations! You guessed " + randomWord + " correctly! Press OK to play again.");
                refreshPage();
            }
        }
    }
    refreshPage();
}