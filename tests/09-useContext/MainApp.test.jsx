import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas en <MainApp />', () => {
    
    test('Debe de mostrar el HomePage', () => {
        
        render(
            <MemoryRouter>

                <MainApp />

            </MemoryRouter>
        
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
        // screen.debug()

    });


    test('Debe de mostrar el LoginPage', () => {
        
        render(
            <MemoryRouter initialEntries={['/login']}>

                <MainApp />

            </MemoryRouter>
        
        );

        const linkVerificado = screen.getByLabelText('link');
        console.log(linkVerificado.className)

        expect(screen.getByText('LoginPage')).toBeTruthy();
        expect(linkVerificado.className).toContain('nav-link active')

    });


});