import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
const [time,setTime] = useState(0)
const [start,setStart] = useState(false)
useEffect ( () => {
let interval = null;
if (start) {
interval = setInterval ( () => {
setTime (prevTime => prevTime + 10)
},10)
} else {
clearInterval(interval);
}

return () => clearInterval(interval)
},[start])
return (
<div classname = "App">
<hl>Stopwatch</hl>
<hl>
<span>{("0" + Match.floor ((time/6000)%60)).slice(-2)}:</span>
<span>{("0" + Math.floor ((time/1000)%60)).slice(-2)}:</span>
<span>{("0" + (time/10)%1000).slice(-2)}</span>
</hl>
<div>
<button onClick = { () => setStart (true)}>Start</button>
<button onClick = { () => setStart (false)}>Stop</button>
<button onClick = { () => {setTime(0); setStart (false);}}>Reset</button>
<button dbClick = { (e) => {
    switch (e.detail) {
      case 1:
        () => {setTime(300); setStart (true);}
        break;
      case 2:
        () => {setTime(0); setStart (false);}
        break;
      case 3:
        <button onClick = { () => setStart (true)}>Start</button>
        break;
      default:
        return;
}}}>Wait</button>

</div>  
</div>
);
}

export default App;
