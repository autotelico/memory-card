document.addEventListener("DOMContentLoaded", () => {
  const playerSelection = document.querySelector("#player-selection-text"); 
  const computerSelection = document.querySelector("#computer-selection");
  const startButton = document.querySelector("#start-button");

  const bgMusic = document.querySelector("#background-music");
  const toggleMusicButton = document.querySelector("#toggle-music-button");
  let musicPlaying = true;

  const playerOption = document.querySelectorAll(".player-option");
  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");

  function getComputerChoice() {
      computerSelection = Math.floor(Math.random() * 3) + 1;
      switch (computerSelection) {
          case 1:
              return "Rock";
          case 2:
              return "Paper";
          case 3:
              return "Scissors";
      }
  }
  
  startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      startGame();
  });

  function startGame() {
      playerOption.forEach(button => {
          button.style.display = 'inline-block';
      });
  }

  playerOption.forEach(button => {
      button.addEventListener('click', () => {
          getPlayerChoice();
      });
  });

  function getPlayerChoice() {
      playerOption.forEach(button => {
          button.addEventListener('click', () => {
              playerSelection = button.id;
          });
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
  });
});
