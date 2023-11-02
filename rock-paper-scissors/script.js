document.addEventListener("DOMContentLoaded", () => {
    const playerSelection = document.querySelector("#player-selection"); 
    const computerSelection = document.querySelector("#computer-selection");
    const startButton = document.querySelector("#start-button");

    const bgMusic = document.querySelector("#background-music");
    const toggleMusicButton = document.querySelector("#toggle-music-button");
    let musicPlaying = true;

    const playerOptions = document.querySelectorAll(".player-option");
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    function getComputerChoice() {
      computerSelection = Math.floor(Math.random() * 3) + 1;
      switch(computerSelection) {
        case 1:
          return "Rock";
        case 2:
          return "Paper";
        case 3:
          return "Scissors";
      }
      
      function getPlayerChoice() {
        playerSelection
      }
      
    }
    
    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      startGame();
    })

    function startGame() {
      playerOptions.forEach(button => {
          button.style.display = 'inline-block';
      });
  }

    toggleMusicButton.addEventListener('click', () => {
      if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
      } else {
        bgMusic.currentTime = 0;
        bgMusic.play();
        musicPlaying = true;
      }
      
    })

  })

  // Make a 'stop music' button with a logo
