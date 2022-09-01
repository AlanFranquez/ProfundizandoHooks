import React, { useEffect, useReducer } from 'react';
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []); // Si es nulo regresa un arreglo vació
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {

        // Traerlo a string
        localStorage.setItem('todos', JSON.stringify(todos));
      
    }, [todos]);

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

    const countTodos = todos.length;
    const pendingTodos = todos.filter((todo) => {
        return !todo.done
    }).length;


  return {
        handleToggleTodo,
        handleNewTodo,
        handleDeleteTodo,
        todos,
        dispatch,
        countTodos,
        pendingTodos
  }
}
