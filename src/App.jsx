import './App.css';

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({ 
    brand:"Ford",
    model:"SUV",
    Year:"1999",
    color:"red"
  });

  return( 
    <>
      <h1> my car is {car.brand}</h1>
      <p> its model is {car.model} and year {car.Year} {car.color} </p>
    </>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

export default App;
