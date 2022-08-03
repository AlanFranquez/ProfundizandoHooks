// USEREF

import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()

    const handle = () => {
        inputRef.current.select()
        
    }
    

    return (
        <>
            <h1>Focus Screen</h1>
            <hr></hr>

            <input ref={inputRef} type='text' placeholder="ingrese su nombre" className="form-control"></input>


            <button onClick={handle} className="btn btn-primary mt-3">
                Set Focus
            </button>

        </>
    )
}
