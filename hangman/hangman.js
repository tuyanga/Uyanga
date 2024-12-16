const hangmanImage=document.querySelector(".hangman-box img");/*Get the first element with class*/
const wordDisplay=document.querySelector(".word-display");
const guessesText=document.querySelector(".guesses-text b");
const keyboardDiv=document.querySelector(".keyboard");
const conModal=document.querySelector(".con-modal");
const gameModal=document.querySelector(".game-modal");
const playAgainBtn=document.querySelector(".play-again");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses=5;

const resetGame = () =>{
    //resetting game
    correctLetters=[];
    wrongGuessCount=0;
    hangmanImage.src=`images/hangman-${wrongGuessCount}.svg`;/*img src=-d utga onooh heseg*/
    guessesText.innerText= `${wrongGuessCount}/${maxGuesses}`;/*onoonii hesegt guesses text b text oruulah heseh */
    keyboardDiv.querySelectorAll("button").forEach(btn=>btn.disabled=false);/*function(btn) {
        btn.disabled = false;
    }*/
    wordDisplay.innerHTML = currentWord.split("").map(()=> '<li class="letter"></li> ').join("");//ugiig usegen array bolgoh split, map returns the string '<li class="letter"></li>'in each char, join"" specifies there should be no separator between the array elements.
    gameModal.classList.remove("show");// use the classList API to remove and add classes
};
const getRandomWord = () =>{
    //word listees sanamsargiu ug songoh
   const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];//random 0-1, wordlist len, buhel utga avah floor
   currentWord=word;//taah ug onooh
   document.querySelector(".hint-text b").innerText = hint;//textiig hint onooh
   resetGame();//daraagiin ued beldeh
};

const gameOver = (isVictory) =>{

    setTimeout(()=>{
        const modalText = isVictory ? `You found the word: ` : `The correct word was: `;
        gameModal.querySelector("img").src=`images/${isVictory ? 'victory': 'lost'}.gif`;
        gameModal.querySelector("h4").innerText=`${isVictory ? 'Congarts!': 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML=`${modalText}<b>${currentWord}</b>`;
        gameModal.classList.add("show");
    },300);
};

const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)){//darsan useg ni ugend bagtaj baival
        //zuv taasan usgiig delgetsleh
        [...currentWord].forEach((letter, index) => {//ugee husnegt bolgood useg ni darsan usegtei taarch bvl
            if(letter===clickedLetter){
                correctLetters.push(letter);//zuv usegnii array ruu oruulna
                wordDisplay.querySelectorAll("li")[index].innerText = letter;//darsan usgiig hargalzah hesegt delgetslene
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");//class guessed helbertei delgetslene
                
                const congratsGif = conModal.querySelector("img"); // congrats.gif-г харуулах логик
                congratsGif.src = `images/congrats.gif`; // Зураг тохируулах
                conModal.classList.add("show");
                setTimeout(() => {conModal.classList.remove("show");}, 1000); // 1 секундийн дараа арилгах
            }
        });
    }else{
        wrongGuessCount++;//buruu taasan bol
        if(wrongGuessCount===0){
            hangmanImage.src=`images/hangman-${wrongGuessCount}.svg`;
        }
        if(wrongGuessCount===1){
            hangmanImage.src=`images/hangman-${1}.svg`;  
            hangmanImage.src=`images/hangman-${2}.svg`;  
        }
        else{
            hangmanImage.src=`images/hangman-${wrongGuessCount+1}.svg`;
        }
    }
    button.disabled=true; //tovchluur darsan bol idevhgui bolgoh
    guessesText.innerText= `${wrongGuessCount} /${maxGuesses}`;//aldaag delgetsleh

    //gameover funciton call
    if(wrongGuessCount===maxGuesses) return gameOver(false);
    if(correctLetters.length===currentWord.length) return gameOver(true);
};
//keyboard button hiih
for( let i=97; i<=122; i++){
    const button=document.createElement("button");
    button.innerText=String.fromCharCode(i);
    keyboardDiv.appendChild(button);//Adds the button to the keyboardDiv element
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));//button daragdah ued e object parameter ashiglan initGame function call
}

getRandomWord();
playAgainBtn.addEventListener("click",getRandomWord);

// const-cannot be reassigned another value
// let-reassigned another value
// var-can be accessed before they are declared
// document.querySelector();-ehnnii tohiroh neg elementiig songono
// document.querySelectorAll();-buh tohiroh elementiig songono
// `${}` replaced with their corresponding values in the resulting string.
// innerHTML-The text content of the element, including all spacing and inner HTML tags
// innerText-sets or returns the text content of an element.
// The forEach() method calls a function for each element in an array.