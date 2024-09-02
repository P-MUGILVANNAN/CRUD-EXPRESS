import React from 'react'
import { Link } from 'react-router-dom';
import Office from '../assets/images/office.gif';

export default function Hero() {
  return (
    <div>
      <div className="px-4 py-5 text-center ">
        <h1 className="display-5 fw-bold text-body-emphasis ">
          <span className='Color_text '>C</span><span className=''>ompan</span><span className='Color_text '>Y</span>
        </h1>

        <div className='row mt-3'>
          <div className='col col-md-5 mx-auto px-5 py-5'>
            <img src={Office} alt='' className='image-fluid' height='auto' width='90%' />
          </div>        
          <div className="col-10 col-md-7 px-3 py-2 d-grid mx-auto">
            <div className='align-self-center'>
              <p className="px-1 py-3 px-lg-5 py-lg-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. 
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3 mt-lg-4 ">
                <Link to='/Form'>
                    <button type="button" className="fs-6 fw-semibold  btn btn-secondary btn-lg px-4 mx-1 mx-lg-3 shadow">
                      Add Employees
                    </button>
                </Link>
                <Link to='/Details'>
                    <button type="button" className="fs-6 fw-semibold btn btn-outline-secondary btn-lg px-4 mx-1 mx-lg-3 shadow">
                      View Employees
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
