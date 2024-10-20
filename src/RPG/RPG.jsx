import {useState} from "react"
import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function Game(){
  const [gameText, setGameText] = useState(lorem.generateSentences(5));
  function handleClick(){
    setGameText(lorem.generateSentences(5));
  }
  return <div className="box">
    <h1>The Game</h1>
    <p className="text">{gameText}</p>
    <button onClick={handleClick}>Option 1</button>
    <button onClick={handleClick}>Option 2</button>
  </div>
}

function Character(){
  return <div className="box">
    <h1>Character Info</h1>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png"  height={200}/>
    <label>Health: 5</label>
    <label>Damage: 3</label>
  </div>
}

function RPG(){
  return <>
    <Game/>
    <Character/>
  </>
}
export default RPG