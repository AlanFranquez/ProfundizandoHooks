


const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];



const todoReducer = (state = initialState, action = {}) => {

    if(action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }



    return state;
}


let todos = todoReducer();

// Hacerle modificación al Reducer
const newTodo = {
    id:2,
    todo: 'Recolectar piedra del tiempo',
    done: false
}


const nuevaAccion = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, nuevaAccion)

console.log({todos})




