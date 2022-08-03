import { useCallback } from "react"


export const ShowIncrement = ({increment, counter}) => {

    // Es similar al useMemo pero sirve para memorizar funciones, ya que estás están en diferentes lugar que los objetos
    useCallback(
      () => {
        first
      },
      [second],
    )
    

    console.log('Me volvi a generar')

  return (
    <button className="btn btn-primary" onClick={() => {increment()}}>

        Increment

    </button>
  )
}
