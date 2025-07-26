import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

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

          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link"
              id="navbarDropdown"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) => 'dropdown-item' + (isActive ? ' active' : '')}
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/web-development"
                  className={({ isActive }) => 'dropdown-item' + (isActive ? ' active' : '')}
                >
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/seo"
                  className={({ isActive }) => 'dropdown-item' + (isActive ? ' active' : '')}
                >
                  SEO
                </NavLink>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <NavLink
                  to="/consulting"
                  className={({ isActive }) => 'dropdown-item' + (isActive ? ' active' : '')}
                >
                  Consulting
                </NavLink>
              </li>
            </ul>
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

          <li className="nav-item">
            <NavLink
              to="/StudentRegister"
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              Student Registration
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/StudentList"
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              All Student List
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/EditStudentDetails"
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              Edit Student Details
            </NavLink>
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
