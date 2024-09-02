import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark border-bottom border-warning border-1 border-body sticky-top" data-bs-theme="dark">
        <div className="container-fluid">
            <h2 className='ms-2 me-3 text-center text-warning'> CompanY</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' style={{textDecoration:'none'}}>
                    <a className="nav-link " >
                      Home
                    </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Form" style={{textDecoration:'none'}} >
                    <a className="nav-link" >
                      Add Employees
                    </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Details" style={{textDecoration:'none'}} >
                    <a className="nav-link" >
                       View Employees
                    </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
