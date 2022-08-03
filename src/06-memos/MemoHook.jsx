
import { useMemo, useState } from "react";
import { useCounter } from "../hooks";


const heavyStuff = (iterationNumber = 100) => {
    for(let i = 0; i < iterationNumber; i++) {
      console.log('ahi vamos!')
    }

    return `${iterationNumber} realizadas!`
}
 

export const MemoHook = () => {


    const {incrementar, counter} = useCounter(4000);
    const [show, setShow] = useState(true)


    const memorizedValue = useMemo( () => heavyStuff(counter), [counter])


    return (
      <>
          <h1>Counter <small>{counter}</small></h1>
          <hr></hr>

          <h4>{memorizedValue}</h4>


          <button className="btn btn-primary mt-3" onClick={() => {incrementar(1)}}>
              +1
          </button>

          <button className="btn btn-outline-primary mt-3" onClick={() => setShow(!show)}>
              Show/Hide {JSON.stringify(show)}
          </button>


      </>
    )
}
