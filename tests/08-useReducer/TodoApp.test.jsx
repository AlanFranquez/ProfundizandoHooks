import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo')

describe('Pruebas de <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true}
        ],
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        countTodos: 2,
        pendingTodos: 1
    })

    test('Debe de mostrar el componoente correctamente', () => {

        render(<TodoApp />);
        
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

    })

})