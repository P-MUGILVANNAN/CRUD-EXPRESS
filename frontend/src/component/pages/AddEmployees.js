import React from 'react'
import Form from '../components/Form'
import Team from '../assets/images/team.gif'

export default function AddEmployees() {
  return (
    <section className='px-lg-5 px-2 m-0 p-0' id="AddEmployees">
      <div className=' border border-warning-subtle rounded-5 my-4 row p-0 m-0'>
        <div className="col-10 col-lg-5 mx-auto text-center d-flex flex-column align-self-center">
          <h2 className="text-center my-4"> ADD EMPLOYEE </h2>
          <img src={Team} alt='' className='image-fluid mx-auto' width='90%' height='auto' /> 
        </div>
        <div className='col-12 col-lg-7 px-5 mx-auto'>
          <Form /></div>
      </div>
    </section>
  );
}
