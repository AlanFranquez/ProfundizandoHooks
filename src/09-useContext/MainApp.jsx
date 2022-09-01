import { Route, Routes, Navigate, Link } from "react-router-dom"
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from './HomePage';
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";


export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1>Main App</h1> */}
        <Navbar/>
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
    </UserProvider>
  )
}
