import { useEffect } from "react"
import { useReducer } from "react"
import { TodoAdd } from "./Components/TodoAdd"
import { TodoList } from "./Components/TodoList"


import { todoReducer } from "./todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime() + 100,
    //     description: 'Recolectar la piedra del tiempo',
    //     done: false
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []); // Si es nulo regresa un arreglo vació
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {

        // Traerlo a string
        localStorage.setItem('todos', JSON.stringify(todos));
      
    }, [todos])
    


    console.log(todos)

    const handleNewTodo = (e) => {
    
        const action = {
            // el type debe tener el mismo nombre que el case
            type: '[TODO] Add Todo',
            payload: e
        };

        // Le mandamos la acción al reducer
        dispatch(action)
    
    };

    const handleDeleteTodo = (id) => {
        // console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        console.log(id)
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return (
        <>
            <h1>TodoApp: {todos.length} <small>Pendientes: 2</small></h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
                    
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr></hr>

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

            </div>

            
        
        
        
        </>
    )
}
