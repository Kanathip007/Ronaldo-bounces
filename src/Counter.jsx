import'./hello.css';
import { useState } from "react";

export default function Counter(){
   const[count,setCount]=useState(0);
    const [value,setValue]=useState("");
    function onTextchange(event){
      console.log("this function is called!"+event.target.value);
      console.error("this is error")
      setValue(event.target.value);
    }

    return (<>

    <input value={value} onChange={(event)=>onTextchange(event)}/>
    <p>you type {value.length} characters </p>
    <p>{value} Celcius to {value-1.8+32} Fahrenheit </p>
    <p>{value} M to {value*1000} km </p>

        <button onClick={()=>setCount(count+1)}>
          +
        </button>
       <button onClick={()=>setCount(count-1)}>
          -
        </button>
        <button onClick={()=>setCount(count*0)}>
          reset
        </button>
   
        <p>
        You clicked {count} times
        </p>
        
        </>);
}