import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [employeeId, setEmployeeId] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

 const handleSubmit = (event) => {
    event.preventDefault();

    const Details = {
        employeeId,
        firstname,
        lastname,
        email,
        phone,
        city,
    };

    console.log('Form Details:', Details);  // Log the form data

    const url = "http://localhost:4200/Form";

    axios.post(url, Details)
    .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        alert("Employee added successfully");
    })
    .catch((err) => {
        console.log(err);
        alert("Failed to add employee. Please try again.");
    });
};


  return (
    <section className="py-5">
      <form
        className="col-12 d-flex flex-column mx-auto py-4 px-5 border border-secondary-subtle rounded-5 shadow"
        onSubmit={handleSubmit}
      >
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">Employee ID:</span>
          <input
            className="form-control w-25"
            type="number"
            name="Eid"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">First Name:</span>
          <input
            className="form-control w-75"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">Last Name:</span>
          <input
            className="form-control w-75"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">Email:</span>
          <input
            className="form-control w-75"
            type="email"
            name="email"
            placeholder="Employee E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">Phone:</span>
          <input
            className="form-control w-75"
            type="tel"
            name="phone"
            placeholder="Employee Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label className="form-label mb-3">
          <span className="fw-bold text-secondary">City:</span>
          <input
            className="form-control w-75"
            name="address"
            placeholder="Employee City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <div className="my-2 px-5">
          <hr />
        </div>
        <button
          type="submit"
          className="btn btn-outline-warning fw-bold w-50 mx-auto shadow"
        >
          
          Submit
        </button>
      </form>
    </section>
  );
}
