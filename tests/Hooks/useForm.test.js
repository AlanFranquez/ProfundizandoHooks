import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";


describe('Pruebas en el useForm', () => { 


    const intialForm = {
        name: 'Alan',
        email: 'santifranquez@gmail.com'
    }

    test('Debe de regresar los valores por defecto', () => {
        
       const { result } = renderHook(() => useForm(intialForm));

       expect(result.current).toEqual( {
        formState: 
        { name: intialForm.name, 
        email: intialForm.email },
        onInputChange: expect.any(Function),
        onReset: expect.any(Function)
      });

    });

    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        const {result} = renderHook(() => useForm(intialForm));

        const {onInputChange} = result.current

        const target = {
            name: 'name',
            value: newValue
        };

        act(() => {
            onInputChange({target})
        });

        console.log(result.current)
        expect(result.current.formState.name).toBe(newValue);
    });


    test('Debe de realizar el reset del form', () => {

        const newValue = 'Juan';

        const {result} = renderHook(() => useForm(intialForm));

        const {onInputChange, onReset} = result.current

        const target = {
            name: 'name',
            value: newValue
        }

        // const newValue = 'Juan'

        act(() => {
            onInputChange({target});

            onReset()
        });



       expect(result.current.formState.name).toBe(intialForm.name)
    })

})