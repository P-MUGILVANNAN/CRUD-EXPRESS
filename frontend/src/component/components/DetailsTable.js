import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Update } from './Update';



export default function DetailsTable() {

  const [employees , setEmployees] = useState([]);

  useEffect(()=> {
    const url = "http://localhost:4200/Details";

    axios.get(url)
    .then((res) => {
      setEmployees(res.data);
    })
    .catch((err) => {
      console.error(`Error in fetching the Employee details ${err}`);
    })  
  },[]);

  const handleDelete = (id) => {
    const url = `http://localhost:4200/Delete/${id}`;

    axios.delete(url)
    .then((res) => {
      alert(`Employee deleted sucessfully...`);
      console.log("Employee  deleted successfully");
      setEmployees(employees.filter((employee) => employee._id !== id)); 
    })
    .catch((err) => {
      console.log(`Error in deleting the Employee : ${err}`);
    });
  };


  return (
    <div>
      <table className=" table table-hover border border-secondary-subtle text-center">
        <thead>
          <tr className="table-secondary">
            <th scope="col">S.No</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee,index)=>{
            return(
              <tr key={index}>
              <th scope='row'>{index + 1} </th>
              <td>{employee.employeeId}</td>
              <td>{employee.firstname +" "+ employee.lastname}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.city}</td>
              <td>
                  <Update id={employee._id} />
                  <button type='button' className="btn btn-danger" onClick={() => handleDelete(employee._id)}> Delete </button>
              </td>
              </tr>
            )
          })}
        </tbody>
      </table>      
    </div>
  );
}
