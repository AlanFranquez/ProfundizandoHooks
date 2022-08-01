import { useState } from "react"


export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 20,
        counter2: 30,
        counter3: 40,
    });

    const {counter1, counter2, counter3} = counter
    
  return (
    <>
        <h2>CounterApp: {counter1}</h2>
        <h2>CounterApp: {counter2}</h2>
        <h2>CounterApp: {counter3}</h2>

        <hr></hr>

        {/* Modificar una propiedad en un hook con muchas propiedades */}
        <button className="btn btn-success" onClick={() => {setCounter({...counter, counter1: counter1 + 1})}}>+1</button>
    
    </>
  )
};
