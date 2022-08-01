
import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FormWithCustomHook = () => {


    const {formState, onInputChange, setFormState, onReset} = useForm({
      username: '',
      email: '',
      password: ''
    });

    const {username, email, password} = formState


    

  return (
    <>

        <h1>Simple Form</h1>

        <hr></hr>

        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>

        <input type="email" className="form-control mt-3" placeholder="santifranquez@gmail.com" name="email" value={email} onChange={onInputChange}/>

        <input type="password" className="form-control mt-3" placeholder="Contraseña" name="password" value={password} onChange={onInputChange}/>



        <button className="my-3 btn btn-primary" onClick={onReset}>Borrar</button>


        
    </>
  )
}
