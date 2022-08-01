import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const {username, email, password} = formState;

    const onInputChange = (e) => {
        const {name, value} = e.target;
        // console.log({name, value})
        
        setFormState({
            ...formState,
            [name]: value
        })
    };

    useEffect(() => {
        // console.log('Disparado')  
      }, [])

    // Se disparará cada vez que haya un cambio en el formulario

    useEffect(() => {
    //   console.log('formstate cambiado')  
    }, [formState])

    useEffect(() => {
        // console.log('email cambiado')  
      }, [email])

  return (
    <>

        <h1>Simple Form</h1>

        <hr></hr>

        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>

        <input type="email" className="form-control mt-3" placeholder="santifranquez@gmail.com" name="email" value={email} onChange={onInputChange}/>

        <input type="password" className="form-control mt-3" placeholder="Contraseña" name="password" value={password} onChange={onInputChange}/>



        {/* Conditional rendering */}
        {username === 'dumeia2' ? <Message /> : null}
        
    </>
  )
}
