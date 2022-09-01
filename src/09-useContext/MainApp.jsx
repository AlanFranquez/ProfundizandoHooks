import { Route, Routes, Navigate } from "react-router-dom"
import { AboutPage } from "./AboutPage";
import { HomePage } from './HomePage';
import { LoginPage } from "./LoginPage";


export const MainApp = () => {
  return (
    <>
        <h1>Main App</h1>
        <hr/>

      

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='login' element={<LoginPage/>}/>


          {/* Para llevar a una ruta predeterminada cuando el usuario pone una que no existe */}
          {/* <Route path="/*" element={<LoginPage/>}/> */}

          {/* Otra forma de hacer lo mismo */}

          <Route path="/*" element={<Navigate to="/about" />}/>
        </Routes>
    </>
  )
}
