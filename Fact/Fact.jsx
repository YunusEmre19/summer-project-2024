import {useState} from "react"

function Fact(){
  const [fack, setFack] = useState("");
  function getFact(n){
    if (n==="") return <></>;
    if (n < 2) return 1;
    return n*getFact(n-1);
  }
  return <div className="box">
    <h1>Factorial</h1>
    <input type="text" placeholder="value" value={fack} onChange={(e)=>setFack(e.target.value)}/>
    <p>Result: {getFact(fack)}</p>
  </div>
}

export default Fact