import {useState, useEffect} from "react"

function GnGm(){
  const [time,setTime] = useState(0);
  const [col1,setCol1] = useState(0);
  function saturation(time){
    return 100;
  }
  function hue(time){;
    return time*360/24;
  }
  function light(time){
    return Math.max(0,50-(15-time/1000/60/60)**2);
  }
  useEffect(()=>{
    const interval = setInterval(()=>{setTime((Date.now() % (60*60*24*1000) - (new Date().getTimezoneOffset()*60*1000))/(60*60*1000))}, 20);
    return ()=>clearInterval(interval);
  }, []);
  function gradient(){
    const [hue1,sat1,vib1] = [hue(time),50,50];
    const [hue2,sat2,vib2] = [hue(time)-30,70,70];
    return `linear-gradient(50deg, hsl(${hue1},${sat1}%,${vib1}%), hsl(${hue2},${sat2}%,${vib2}%))`

  }
  return (<div className="box" style={{background:gradient()}}>
    <h1>{time<10 && time>4?"GM":time>22?"GN":"MOGAF"}</h1>
    <img style={{border: "solid"}} src="https://media.tenor.com/EhdoUo7q2tUAAAAM/oshi-no-ko-yoasobi-idol.gif" alt="" />
  </div>);
}

export default GnGm