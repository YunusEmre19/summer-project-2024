import {useState} from "react"

function IsYouHuman(){
  const [input, setInput] = useState("");
  
  function handleChange(e){
    const inputValue = e.target.value;
    const validInput = inputValue.replace(/[^0-1]/g,"");
    setInput(validInput);
  }

  function isHuman(input){
    const check = ["000","001","010","011","100","101","110","111"];
    const count = [];
    for (let i=0;i<8;i++){
      count[i]= countCharacterOccurrences(input,check[i]);
    }
    return (100*isRandom(count,input.length)).toFixed(2);
  }
  function isRandom(count, length){
    let difference = 0;
    for (let i=0;i<count.length;i++){
      difference+= Math.abs(count[i]/length - 1/count.length);
    }
    return difference;
  }

  function countCharacterOccurrences(str, char) {
    let repeats=0;
    for (let i=0;i<str.length-2;i++){
      if (str.slice(i,i+3)==char){
        repeats++;
      }
    }
    return repeats;
  }

  function randomTyper(){
    let num = (Math.random()>0.5)+0;
    setInput((x)=>x+num);
  }

  function standardDeviation(arr) {
    const n = arr.length;
    if (n === 0) return 0;
  
    const mean = arr.reduce((sum, value) => sum + value, 0) / n;
    const variance =
      arr.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / (n - 1);
  
    return Math.sqrt(variance);
  }

  return <div className="box">
    <h1>Is You Human</h1>
    <input type="text" placeholder="value" value={input} onChange={(e)=>handleChange(e)}/>
    <button onClick={randomTyper}>Random</button>
    <p>Result: %{isHuman(input)} Human</p>
  </div>
}

export default IsYouHuman