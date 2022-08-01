import { useCounter } from "../hooks/useCounter"


export const CounterWithCusttomHook = () => {


    // Se retorna con corchotes porque el retorno del custom hook es un objeto, si fuera un arreglo se hace con []
    const { counter, incrementar, decrementar, reset } = useCounter();



    return (

        <>
            <h1>Counter with hok: {counter}</h1>
        

            <hr></hr>


            {/* El botón de sumar sumará de 3 en 3 y el de restar restará de 2 en 2 */}
            <button className="btn btn-primary" onClick={() => decrementar(2)}>-1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => incrementar(3)}>+1</button>

        </>
    )
}
