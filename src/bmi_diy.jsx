import { useState,useRef } from "react";
function BmiText({bmi}){
    if(bmi<18.5) return (<><h1>Underweight<img src="images.jpg"width={100}></img></h1></>);
        if(bmi>30) return (<><h1>Overweight <img src="fat.jpg " width={100}> </img></h1></>);
        return (<><h1>Normal <img src="prime.jpg"width={150}></img></h1></>);
}
export default function Bmi(){
const w_inputRef=useRef(null);
const h_inputRef=useRef(null);
const[bmi,setBmi]=useState(0);
function calBmi(){
    let w=w_inputRef.current.value;
    let h=h_inputRef.current.value/100;
    setBmi(w/(h*h));
}
return (<> 
    <h1>BMI Calculartor</h1>
    Weight <input ref={w_inputRef}  />kg.   <br/>
    hight <input ref={h_inputRef}   />cm.  <br/>  
    <button onClick={calBmi}>caculate!</button>
    Bmi : {bmi.toFixed(2)}  
    <BmiText bmi={bmi}/>
    </>);
} 