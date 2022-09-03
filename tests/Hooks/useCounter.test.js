import { renderHook } from "@testing-library/react"
import { equal } from "assert";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter"


describe('Pruebas en el useCounter', () => {

    test('Debe de retornar los valores por defecto', () => {

        const {result} = renderHook(() => useCounter());

        const {counter, decrementar, incrementar, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrementar).toEqual(expect.any(Function));
        expect(incrementar).toEqual(expect.any(Function));
        expect(equal).toEqual(expect.any(Function));

    });

    test('debe de generar el counter con el valor de 100', () => { 

        const {result} = renderHook(() => useCounter(100));

        const {counter} = result.current;

        expect(counter).toBe(100);

    });

    test('Debe de incrementar el contador', () => { 

        const {result} = renderHook(() => useCounter(100));

        const {counter, incrementar} = result.current;

        act(() => {
            incrementar(3);
            incrementar();
        });

        expect(result.current.counter).toBe(104);


    })

    test('Debe de decremntar el contador', () => { 

        const {result} = renderHook(() => useCounter(100));

        const {counter, decrementar} = result.current;

        act(() => {
            decrementar(3);
            decrementar();
        });

        expect(result.current.counter).toBe(96);


    });

    test('Debe de resetear el contador', () => { 

        const {result} = renderHook(() => useCounter(100));

        const {counter, reset, decrementar} = result.current;

        act(() => {
            decrementar();
            reset()
        });

        expect(result.current.counter).toBe(100);


    });

})