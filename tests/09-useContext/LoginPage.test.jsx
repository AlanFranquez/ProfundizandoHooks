import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {
    
    test('Debe de mostrar el componente sin el usuario', () => {

        render(

          <UserContext.Provider value={{user: null}}>

            <LoginPage />

            
          </UserContext.Provider>  
        );

        const preElement = screen.getByLabelText('pre');

        expect(preElement.textContent).toContain('null');
        
        // screen.debug()
    });

    test('Debe de llamar el setUser cuando se haga click en el botón', () => {
        

        const setUserMock = jest.fn()

        render(

            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
  
              <LoginPage />
  
              
            </UserContext.Provider>  
          );

          const preElement = screen.getByLabelText('pre');
          const button = screen.getByRole('button');
          fireEvent.click(button)
        
          expect(setUserMock).toHaveBeenCalled();
          expect(setUserMock).toHaveBeenCalledWith({"email": "santifranquez@gmail.com", "id": 123, "name": "Alan Fránquez"});
          

    });

});