import {useState, useEffect} from "react"
import styles from "./GradientTest.module.css"
function GradientTest(){
  const [col1,setCol1] = useState(0);
  const [col2,setCol2] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{setCol1((prevCount) => prevCount + 1)},20);
    return ()=>{clearInterval(interval)};
  }, []);
  function gradient(){
    const [hue1,sat1,vib1] = [col1,50,50];
    const [hue2,sat2,vib2] = [col1+20,70,70];
    return `linear-gradient(to right, hsl(${hue1},${sat1}%,${vib1}%), hsl(${hue2},${sat2}%,${vib2}%))`
  }
  return <div className="box" style={{background:gradient()}}>
  </div>
}

export default GradientTest