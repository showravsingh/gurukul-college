import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import "../App.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={logo}
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-text-top me-2"
        />
        GuruKul
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Service"
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              Contact
            </NavLink>
          </li>

          {/* ✅ Student Area (Hover Dropdown) */}
          <li className="nav-item dropdown position-relative">
            <div
              className="btn btn-warning fw-bold text-dark px-3 rounded shadow-sm blink"
              id="studentDropdown"
            >
              🎓 Student Area
            </div>
            <ul className="dropdown-menu" aria-labelledby="studentDropdown">
              <li>
                <NavLink
                  to="/StudentRegister"
                  className={({ isActive }) => 'dropdown-item' + (isActive ? ' active' : '')}
                >
                  Register New Student
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/GetStudentById"
                  className={({ isActive }) => 'dropdown-item' + (isActive ? ' active' : '')}
                >
                  Student Details with Roll No
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/EditStudentDetails"
                  className={({ isActive }) => 'dropdown-item' + (isActive ? ' active' : '')}
                >
                  Update Student Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/StudentList"
                  className={({ isActive }) => 'dropdown-item' + (isActive ? ' active' : '')}
                >
                  All Student List
                </NavLink>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <NavLink
                  to="/RemoveStudentDetails"
                  className={({ isActive }) =>
                    'dropdown-item text-danger fw-bold' + (isActive ? ' active bg-light' : '')
                  }
                >
                  Remove Student Details
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
