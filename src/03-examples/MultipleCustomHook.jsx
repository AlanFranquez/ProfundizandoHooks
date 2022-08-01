
import { useState } from "react"
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHook = () => {

    const [counter, setCounter] = useState(1)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const {state} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const {isLoading, data, hasError} = state

   const {author, quote} = !!data && data[0];



   

  return (
    <>
        <h1>Breaking Bad Quotes</h1>

        <hr></hr>

        {isLoading ? <p className="text-center alert-info alert">Cargando...</p> : <blockquote className="blockquote text-right">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer mt-1">{author}</footer>
        </blockquote>}

        
        <button onClick={sumar} className="btn btn-primary">
            next quote

        </button>

    </>
  )
}
