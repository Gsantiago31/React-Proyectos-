import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <NavLink className={ ({ isActive }) => `navbar-brand ${ isActive ? 'active' : ''}`} to="/">
          useContext
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavLink 
            to="/"
            end
            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`}>
                Home
            </NavLink>
            <NavLink 
            to="/about"
            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`}>
                About
            </NavLink>
            <NavLink 
            to="/login"
            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`}>
                Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
