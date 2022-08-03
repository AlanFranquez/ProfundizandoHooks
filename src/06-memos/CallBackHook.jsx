import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    // Es similar al useMemo pero sirve para memorizar funciones, ya que estás están en diferentes lugar que los objetos
    
    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value)
        },
        [],
    );


    useEffect(() => {
        // incrementFather()
    }, [incrementFather])


    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }


    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr></hr>


            <ShowIncrement increment={incrementFather}/>
        </>
    )
}
