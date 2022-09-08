import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/Components/TodoItem';

describe('Pruebas on <TodoItem />', () => {


    const todo = {
        id: 1,
        description: 'Piedra de arena',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    
    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el Todo pendiente al completar', () => {

        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} /> );

        const liElement = screen.getByRole('listitem')
        // console.log(liElement.innerHTML)

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const span = screen.getByLabelText('span');

        expect(span.className).toContain('align-self-center')
        expect(span.className).not.toContain('text-decoration-line-through')

    });

    test('Debe de mostrar el Todo Completado', () => {

        todo.done = true

        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} /> );

        
        

        const span = screen.getByLabelText('span');

        expect(span.className).toContain('text-decoration-line-through')

    });

    test('Span debe de llamar el ToggleTodo cuando se hace click', () => {

        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} /> );

        const span = screen.getByLabelText('span');
        fireEvent.click(span);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);


    });

    test('button debe de llamar el deleteTodo', () => {

        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} /> );

        const button = screen.getByRole('button');
        fireEvent.click(button)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)



    });

})