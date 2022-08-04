import { useReducer } from "react"
import { TodoAdd } from "./Components/TodoAdd"
import { TodoList } from "./Components/TodoList"


import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() + 100,
        description: 'Recolectar la piedra del tiempo',
        done: false
    },
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)


    const handleNewTodo = (e) => {
      const action = {
        type: '[TODO] Add Todo',
        payload: e
      };

      dispatch(action);
    }

    return (
        <>
            <h1>TodoApp: {todos.length} <small>Pendientes: 2</small></h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
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
