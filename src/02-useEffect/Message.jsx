import { useEffect, useState } from "react"

export const Message = () => {

    // useEffect(() => {
    //   console.log('Compononente montado')
    
    //   return () => {
    //     console.log('Compononente demonstado')
    //   }
    // }, [])
    
    const [coords, setCoords] = useState({x:0, y: 0})

    useEffect(() => {
      const nuevasCords = ({x, y}) => {
        setCoords({x, y})
      }

      window.addEventListener('mousemove', nuevasCords)
    
      return () => {
        window.removeEventListener('mousemove',nuevasCords)
      }
    }, [])
    


  return (
    <>
        <h3 className="text-center btn ">Usuario ya existe!</h3>
        {JSON.stringify(coords)}

    </>
  )
}
