import {useEffect, useState, useRef} from "react";

function Stopwatch(){
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(()=>{
    if(isRunning){
      intervalRef.current = setInterval(()=>{setElapsedTime(Date.now() - currentTime)}, 10);
    }

    return () => {clearInterval(intervalRef.current)};
  }, [isRunning]);

  function startStop(){
    if(!isRunning){
      setCurrentTime(Date.now() - elapsedTime);
    }
    setIsRunning(i=>!i);
  }
  function reset(){
    setIsRunning(false);
    setElapsedTime(0);
  }
  function formatTime(time){
    const minutes = Math.floor((time/1000/60)%60);
    const seconds = Math.floor((time/1000)%60);
    const miliseconds = Math.floor(time%100);
    return `${padZero(minutes)}:${padZero(seconds)}:${padZero(miliseconds)}`;
  }
  function padZero(time){
    return (time<10 ?"0"+time : time);
  }

  return(
    <div className="box">
      <h1>Stopwatch</h1>
      <p style={{fontSize:"2em"}}>{formatTime(elapsedTime)}</p>
      <button onClick={startStop}>Start/Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch