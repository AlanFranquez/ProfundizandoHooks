import {render, screen} from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { HomePage } from '../../src/09-useContext/HomePage'

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Alan'
    }

    test('debe de mostrar el componoente sin el usuario', () => {

        render(
        <UserContext.Provider value={{user: null}}>
            <HomePage />
        </UserContext.Provider> 
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
            
        // screen.debug()

        expect(preTag.innerHTML).toBe('null')

    });

    test('debe de mostrar el componoente sin el usuario', () => {

        render(
        <UserContext.Provider value={{user: user}}>
            <HomePage />
        </UserContext.Provider> 
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
            
        // screen.debug()

        expect(preTag.innerHTML.name).toBe('Alan')
        expect(preTag.innerHTML.id).toBeTruthy()

    })


})