// The logic using JavaScript:

// The main logic of the game is created by using JavaScript. We will be performing DOM manipulation so basic knowledge of JavaScript is enough to build the game.

// Follow steps 

// Create a function game() that will contain all the logic of the game.
// Inside the function declare three variables playerScore, computerScore, moves which will keep the record of the player’s score, computer’s score, and moves completed respectively.
// Create a function playGame() and inside the function use DOM manipulation to get hold of all the three buttons we created in HTML for player input. Create an array playerOptions which will contain all three buttons as its elements. Similarly, create an array for computer options.
// Use forEach() loop on playerOptions so that we can add an event listener on all buttons with a single piece of code. Inside the loop increment moves counter by 1 display moves left on the screen by subtracting moves from 10. Generate a random value for the computer option and compare it with the player’s input.
// Create a function winner() which will receive two arguments one the player’s input and the other the computer’s option  The function will decide who wins the point among the player and computer.
// Create a function gameOver() which will display the final result with reload button. The function will be called when moves will become equals to 10.
// Call the playGame() function inside the game() function.
// Now call the game() function at the end of the file.
// Below is the implementation:

// Filename: app.js

// app.js
 
// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 
    // Function to
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
         
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                // Function to check who wins
                winner(this.innerText,computerChoice)
                 
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
 
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
     
}
 
// Calling the game function
game();