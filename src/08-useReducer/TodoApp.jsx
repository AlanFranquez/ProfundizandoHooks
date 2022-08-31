import { useEffect } from "react"
import { useReducer } from "react"
import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./Components/TodoAdd"
import { TodoList } from "./Components/TodoList"




export const TodoApp = () => {

    const  {
        handleToggleTodo,
        handleNewTodo,
        handleDeleteTodo,
        todos,
        dispatch} = useTodo()

    

    return (
        <>
            <h1>TodoApp: {todos.length}</h1>
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
