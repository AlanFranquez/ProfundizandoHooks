import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook"
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHook />', () => {
    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        incrementar: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componoente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHook />);

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Breaking Bad Quotes'))

        const nextButton = screen.getByRole('button', {name: 'Next quote'})

        expect(nextButton.disabled).toBeTruthy()

        // screen.debug();

    });

    test('debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Alan', quote: 'trying to success'}],
            isLoading: false,
            hasError: null
        });
        

        render(<MultipleCustomHook />);
        // screen.debug();
        expect(screen.getByText('trying to success')).toBeTruthy();
        expect(screen.getByText('Alan')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'})

        expect(nextButton.disabled).toBeFalsy()

    });

    test('Debe de llamar la funcion de incrementar', () => {
        
        

        useFetch.mockReturnValue({
            data: [{author: 'Alan', quote: 'trying to success'}],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHook />);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);
        // screen.debug();

        expect(mockIncrement).toHaveBeenCalled();
    })
})