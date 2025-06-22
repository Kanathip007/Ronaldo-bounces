 import './css.css';
import { useState, useRef } from "react";


function BmiText({ bmi }) {
  if (bmi === 0) return null;
  if (bmi < 18.5)
    return (
      <div className="bmi-result underweight">
        <h2>Too Slim for the Field!</h2>
        <img src="images.jpg" width={120} alt="Underweight" />
      </div>
    );
  if (bmi > 30)
    return (
      <div className="bmi-result overweight">
        <h2>Bulked Up Too Much!</h2>
        <img src="download.jpg" width={150} alt="Overweight" />
      </div>
    );
  return (
    <div className="bmi-result normal">
      <h2>Perfect Like CR7 💪</h2>
      <img src="prime.jpg" width={200} alt="Fit" />
    </div>
  );
}

export default function Bmi() {
  const w_inputRef = useRef(null);
  const h_inputRef = useRef(null);
  const [bmi, setBmi] = useState(0);

  function calBmi() {
    const weight = parseFloat(w_inputRef.current.value);
    const height = parseFloat(h_inputRef.current.value) / 100;
    if (weight > 0 && height > 0) {
      setBmi(weight / (height * height));
    } else {
      alert("Train smart — enter valid numbers!");
    }
  }

  return (
    <div className="cr7-container">
      <h1>CR7 BMI Calculator</h1>
      <p className="subtitle">Train Like a Champion ⚽🔥</p>
      <div className="input-group">
        <label>
          Weight (kg):
          <input ref={w_inputRef} type="number" />
        </label>
        <label>
          Height (cm):
          <input ref={h_inputRef} type="number" />
        </label>
      </div>
      <button onClick={calBmi}>Calculate BMI</button>
      <div className="bmi-value">
        <strong>BMI:</strong> {bmi > 0 ? bmi.toFixed(2) : "--"}
      </div>
      <BmiText bmi={bmi} />
    </div>
  );
}