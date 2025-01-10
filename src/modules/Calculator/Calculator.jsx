import {useState} from "react"
import styles from "./Calculator.module.css"
function Calculator(){
  const [operation, setOperation] = useState((0).toFixed(2));
  function calculate(op){
    return String(eval(op).toFixed(2));
  }
  function calculateOld(op){
    let numString = "";
    let numList = []
    for (const i  of op){
      if("+-*/".includes(i)){
        numList.push(parseInt(numString))
        numString=""
      }else{
        numString+=i;
      }
    }
    
    return <img src="https://media1.tenor.com/m/nicIRWJkKIwAAAAC/walter-white-walter.gif" alt="" height={150}/>;
  }
  function handleClick(a){
    if(a == "="){
      setOperation(calculate(operation));
    }
    else if (a=="C"){
      setOperation("0.00");
    }
    else if(operation=="0.00"){
      if("+-*/".includes(a)){
        return;
      }
      else{
        setOperation(a);
      }
    }
    else if("+-*/".includes(a)){
      if(!"+-*/".includes(operation.slice(-1))){
        setOperation(operation+a);
      } else {
        setOperation(operation.slice(0,-1)+a);
      }
    } else {
      setOperation(operation+a);
    }
    }
  function buttons(n){
    const valueList = ["1","2","3","+",
                       "4","5","6","-",
                       "7","8","9","*",
                       "C","0","=","/"
    ];
    const buttonList = valueList.map((i)=><button className="button" onClick={()=>handleClick(i)}>{i}</button>);
    return buttonList;
  }
  return <div className="box">
      <h1>Calculator</h1>
      <p className="text">{operation}</p>
      <div className="button-grid">
        {buttons(10)}
      </div>
  </div>
}

export default Calculator