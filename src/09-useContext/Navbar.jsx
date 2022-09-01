import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
          
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">


                {/* La forma que se utiliza para saber que pagina está mostrando, navbar funcional */}
                <NavLink to="/" className={({isActive}) => {
                    return `nav-link ${isActive ? 'active' : ''}`
                }}>
                    Home
                </NavLink>

                <NavLink to="/about" className={({isActive}) => {
                    return `nav-link ${isActive ? 'active' : ''}`
                }}>
                    About
                </NavLink>

                <NavLink to='/login' className={({isActive}) => {
                    return `nav-link ${isActive ? 'active' : ''}`
                }}>
                    Login
                </NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}
