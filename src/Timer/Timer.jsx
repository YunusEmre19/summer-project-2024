import {useState, useRef, useEffect} from "react"

function Timer(){
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  
  const duration = 25*60*1000;

  useEffect(()=>{
    if(isRunning){
      intervalIdRef.current = setInterval(()=>{
        setElapsedTime(Date.now()-startTimeRef.current);
      }, 10);
    }
    
    return ()=>{clearInterval(intervalIdRef.current)};

  }, [isRunning]);

  function startStop(){
    if(!isRunning){
      startTimeRef.current = Date.now() - elapsedTime;
    }
    setIsRunning(i=>!i);
  }
  function reset(){
    setElapsedTime(0);
    setIsRunning(false);
  }
  function formatTime(time){
    if(duration <= elapsedTime){
      reset();
      let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
      audio.play();
    }
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    return (`${padZero(minutes)}:${padZero(seconds)}`);
  }
  function padZero(val){
    return (val<10 ? "0"+val : val);
  }
  return(
    <div className="box">
      <h1>Pomodoro Timer</h1>
      <p style={{fontSize:"2em"}}>{formatTime(duration - elapsedTime)}</p>
      <button onClick={startStop}>Start/Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer