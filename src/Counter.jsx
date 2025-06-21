import'./hello.css';
import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return (<>
        <button onClick={()=>setCount(count+1)}>
           <img src="ronaldo.png"width={100}></img>
        </button>
       <button onClick={()=>setCount(count-1)}>
           <img src="images.jpg"width={100}></img>
        </button>
        <button onClick={()=>setCount(count*0)}>
           <img src="prime.jpg"width={200}></img>
        </button>
        <p>
        You clicked {count} times
        </p>
        
        </>);
}