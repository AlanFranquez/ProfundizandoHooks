
import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small"


export const Memorize = () => {


    const {incrementar, counter} = useCounter(0);
    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter <Small value={counter}/></h1>

        <button className="btn btn-primary mt-3" onClick={() => {incrementar(1)}}>
            +1
        </button>

        <button className="btn btn-outline-primary mt-3" onClick={() => setShow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>


    </>
  )
}
