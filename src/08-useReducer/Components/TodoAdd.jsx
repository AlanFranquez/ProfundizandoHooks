// import { useState } from "react"

import { useState } from "react";
import { useForm } from "../../hooks"
import { Alert } from "./Alert";

export const TodoAdd = ({onNewTodo}) => {

    const {formState, onReset, onInputChange} = useForm({
        description: ''
    });

    const [error, setError] = useState(false)

    const {description} = formState;


    const enviarTodo = (e) => {
        e.preventDefault();

        if(description === '') {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 2000);
            return;
        };

        setError(false)

        // Asignar los valores a un objeto
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };


        // Asignar los valores a la prop que lo manda como arguemtno en una funcion de <TodoApp/>
        onNewTodo(newTodo)
        onReset()
    }

  return (
    <form onSubmit={enviarTodo}>
        <input type="text" placeholder="¿Qué se necesita?" name="description" value={description} onChange={onInputChange} className="form-control" />

        <button type="submit" className="btn btn-outline-primary mt-2">
            Agregar
        </button>

        {error ? <Alert /> : null}
    </form>
  )
}
