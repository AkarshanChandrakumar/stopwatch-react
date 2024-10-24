import React,{useState,useEffect,useRef} from'react'  
function Stopwatch(){
     
    const [IsRunning,setIsRunning]=useState(false);
    const [elapse,setelapse]=useState(0);
    const intervalRef=useRef(null);
    const startTimeRef=useRef(0);
    
    useEffect(()=>{
        if (IsRunning){
            intervalRef.current=setInterval(()=>{
                setelapse(Date.now()-startTimeRef.current)
            },10)
        }
        return ()=>{
            clearInterval(intervalRef.current)
        }
    }
,[IsRunning])
     
function start(){
  setIsRunning(true);
  startTimeRef.current=Date.now()-elapse;
}
function stop(){
setIsRunning(false)
}
function reset(){
  setelapse(0);
  setIsRunning(false);
}
function formatTime(){
    let hours=Math.floor(elapse/(1000*60*60));
    let minutes=Math.floor(elapse/(1000*60)%60);
    let seconds=Math.floor(elapse/(1000)%60);
    let milliseconds=Math.floor((elapse%1000)/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0")
    milliseconds=String(milliseconds).padStart(2,"0");

   return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
    return(
    <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
         <button className="start-button" onClick={start}>Start</button>
         <button className="stop-button" onClick={stop}>Stop</button>
         <button className="reset-button" onClick={reset}>Reset</button>
        </div>
    </div>
    )
}
export default Stopwatch