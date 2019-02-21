
//Define the array with words to choose from
var chemWords = ["oxygen", "nitrogen", "carbon", "hydrogen", "helium", "sodium", "aluminum", "silver", "uranium", "copper",
    "potassium", "sulfur", "krypton", "radon", "iron", "gold"]

//Initial scores
var wins = 0;
var losses = 0;

// Press any key to get started
document.onkeyup = function (event) {

    var refreshPage = function () {

        var numGuesses = 10;
        var wrongLetters = [];
        var blanks = [];
        var wrongLetter = document.getElementById("incorrect");
        var guessesLeft = document.getElementById("guessesRemaining");
        var imageDetails = document.getElementById("image");


        // Update the content to remove all incorrect guesses, restart to 10 guesses, & remove the image
        wrongLetter.textContent = "Incorrect Guesses: " + wrongLetters.join(" ");
        guessesLeft.textContent = numGuesses;
        setTimeout(function () {
            imageDetails.setAttribute("src", "");
            // imageDetails.setAttribute("src", "assets/images/question-mark.png");
            // imageDetails.setAttribute("height", "400px");
            // imageDetails.setAttribute("width", "300px");
        }, 2000);                        

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

        //display the number of lines that matches the length of the random word on the screen
        wordLines.textContent = blanks.join(" ");

        //Play the game
        //----------------------------------------------------

        //Upon pressing any key
        document.onkeyup = function uniKeyCode(event) {

            var x = event.keyCode;

            //that key is evaluated to be an alpha key, otherwise an alert is shown to pick another key
            if (x > 90 || x < 57) {
                alert("You pressed an incorrect key. Please choose a letter from a to z.");
            } else {

                var usersLetter = event.key.toLowerCase();
                console.log(usersLetter);


                //when a letter that is pressed, for the entirety of the word, check if it matches one of the letters 
                var matchLetter = function (randomLetter) {
                    var letterMatch = false;

                    // for every letter in the word
                    for (var j = 0; j < randomWordLength; j++) {
                        // if the user's letter is in the random word at object from 0 to the length of the word,
                        if (randomWord[j] === usersLetter) {
                            letterMatch = true;
                            console.log(letterMatch);
                            // the user's letter becomes the letter in the blank array where it has made the match
                            blanks[j] = usersLetter;
                            //display the array with the user's letter in the correct index position
                            wordLines.textContent = blanks.join(" ");
                        }
                    }

                    if (letterMatch === false) {
                        // add that letter to an array called wrongLetters, ONLY IF IT DOESN'T ALREADY APPEAR in the wrongLetters Array
                        if (wrongLetters.includes(usersLetter)) {
                            
                        } else {
                            wrongLetters.push(usersLetter);
                            console.log(wrongLetters);
                            //number of guesses goes down by 1
                            numGuesses--;
                            guessesLeft.textContent = numGuesses;
                            wrongLetter.textContent = "Incorrect Guesses: " + wrongLetters.join(" ");
                        }
                    }
                }
                matchLetter(usersLetter);

                var cheer = new Audio("assets/images/cheer.mp3");
                var boo = new Audio("assets/images/boo3.mp3");
                var applause = new Audio("assets/images/applause3.mp3");

                if (numGuesses === 1) {
                    cheer.play();
                    alert("You have 1 guess left. Choose carefully!")
                }

                var numLosses = document.getElementById("losses");

                if (numGuesses === 0) {
                    boo.play();
                    losses++;
                    numLosses.textContent = losses;
                    refreshPage();
                }

                var numWins = document.getElementById("wins");


                console.log("This is blanks array: " + blanks);
                console.log("This is wordLines array: " + wordLines);


                var showImage = function () {

                    

                    if (randomWord === chemWords[0]) {
                        imageDetails.setAttribute("src", "assets/images/oxygen.JPG");
                    } else if (randomWord === chemWords[1]) {
                        imageDetails.setAttribute("src", "assets/images/nitrogen.JPG");
                    } else if (randomWord === chemWords[2]) {
                        imageDetails.setAttribute("src", "assets/images/carbon.JPG");
                    } else if (randomWord === chemWords[3]) {
                        imageDetails.setAttribute("src", "assets/images/hydrogen.JPG");
                    } else if (randomWord === chemWords[4]) {
                        imageDetails.setAttribute("src", "assets/images/helium.JPG");
                    } else if (randomWord === chemWords[5]) {
                        imageDetails.setAttribute("src", "assets/images/sodium.JPG");
                    } else if (randomWord === chemWords[6]) {
                        imageDetails.setAttribute("src", "assets/images/aluminum.JPG");
                    } else if (randomWord === chemWords[7]) {
                        imageDetails.setAttribute("src", "assets/images/silver.JPG");
                    } else if (randomWord === chemWords[8]) {
                        imageDetails.setAttribute("src", "assets/images/uranium.JPG");
                    } else if (randomWord === chemWords[9]) {
                        imageDetails.setAttribute("src", "assets/images/copper.JPG");
                    } else if (randomWord === chemWords[10]) {
                        imageDetails.setAttribute("src", "assets/images/potassium.JPG");
                    } else if (randomWord === chemWords[11]) {
                        imageDetails.setAttribute("src", "assets/images/sulfur.JPG");
                    } else if (randomWord === chemWords[12]) {
                        imageDetails.setAttribute("src", "assets/images/krypton.JPG");
                    } else if (randomWord === chemWords[13]) {
                        imageDetails.setAttribute("src", "assets/images/radon.JPG");
                    } else if (randomWord === chemWords[14]) {
                        imageDetails.setAttribute("src", "assets/images/iron.JPG");
                    } else if (randomWord === chemWords[15]) {
                        imageDetails.setAttribute("src", "assets/images/gold.JPG");
                    }
                }





                if (blanks.includes(" ___ ") === false) {
                    applause.play();
                    wins++;
                    numWins.textContent = wins;
                    showImage();
                    setTimeout(function () {
                        alert("Congratulations! You guessed " + randomWord + " correctly! Press OK to play again.");
                    }, 1000);

                    refreshPage();
                }
            }
        }
    }
    refreshPage();
}