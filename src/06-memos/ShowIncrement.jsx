import { memo } from "react"




export const ShowIncrement = memo(({increment}) => {

    
    

    console.log('Nos recibimoooooooooo')

  return (
    <button className="btn btn-primary" onClick={() => {increment(5)}}>

        Increment

    </button>
  )
})
