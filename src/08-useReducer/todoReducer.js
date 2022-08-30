export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [action.payload, ...initialState]
        default:
            return initialState
    }




}