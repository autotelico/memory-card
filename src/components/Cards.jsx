import React, { useState, useEffect, useRef } from "react";

export default function GameBoard() {
  const [characterList, setCharacterList] = useState(null);
  const [selectedCharList, setSelectedCharList] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const playerScoreRef = useRef(0);

  async function getPokemonList() {
    const response = await fetch("https://dragonball-api.com/api/characters");
    const data = await response.json();
    // add a selected prop to every character
    const updatedData = [];
    data.items.forEach((obj) => updatedData.push(obj));
    setCharacterList(updatedData);
  }

  function shuffleList(array) {
    for (
      let currentIndex = array.length - 1;
      currentIndex > 0;
      currentIndex--
    ) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  characterList && shuffleList(characterList);

  useEffect(() => {
    if (!characterList) {
      getPokemonList();
    }
  }, [characterList]);

  function verifyCharacter(character) {
    let included = false;
    if (!selectedCharList.length) {
      setSelectedCharList((prevList) => [...prevList, character]);
    }

    for (const char of selectedCharList) {
      if (char.id === character.id) {
        console.log("FOUND");
        included = true;
        break;
      }
    }
    
    if (!included) {
      playerScoreRef.current++;
      console.log(playerScoreRef.current);
      setSelectedCharList((prevList) => [...prevList, character]);
    } else {
      setGameOver(true);
      console.log("GAME OVER.");
    }
    console.log(selectedCharList);
  }

  function resetGame() {
    setGameOver(false);
    setSelectedCharList([]);
    playerScoreRef.current = 0;
  }

  return (
    <>
      {gameOver && (
        <GameOverModal score={playerScoreRef.current} handleClick={resetGame} />
      )}
      <div id="game-board">
        {characterList &&
          characterList.map((character) => {
            return (
              <Card
                key={character.id}
                character={character}
                handleClick={verifyCharacter}
              />
            );
          })}
      </div>
    </>
  );
}

function Card({ character, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(character)}>
      <img src={character.image} alt="" className="character-image" />
      <h3>{character.name}</h3>
    </div>
  );
}

function GameOverModal({ score, handleClick }) {
  return (
    <div>
      <p style={{ color: "indigo" }}>GAME OVER</p>
      <p>Your score was {score}</p>
      <button onClick={handleClick}>Continue</button>
    </div>
  );
}
