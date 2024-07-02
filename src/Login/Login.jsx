import {useState} from "react"
import styles from "./Login.module.css";
function Login(){

  const password = "Finger";

  const [isCorrect, setIsCorrect] = useState(false);

  const [result, setResult] = useState(null);

  function handleClick(){
    if(document.getElementById("password").value == password){
      setResult( <img src="https://media1.tenor.com/m/nicIRWJkKIwAAAAC/walter-white-walter.gif" height={200} width={200}/>);
    } else{
      setResult(<p>Wrong Password</p>);
    }
  }

  return(
  <div className="box">
    <h1>Enter password</h1>
    <input id="password"/>
    <button onClick={handleClick}>Enter</button>
    <br/>
    {result}
  </div>
  )
}

export default Login