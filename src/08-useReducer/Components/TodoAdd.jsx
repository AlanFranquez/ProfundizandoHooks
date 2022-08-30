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
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000);

            return;
       };

       setError(false);

       const newITEM = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        onNewTodo(newITEM)
        onReset();
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
