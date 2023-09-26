import React, { useState } from "react";
import axios from "axios";

const AttendanceForm = () => {
  const [attendanceForm, setAttendanceForm] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    setAttendanceForm({ ...attendanceForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(attendanceForm);
    //
    axios
      .post(
        "https://attendancebackend-three.vercel.app/attendance",
        attendanceForm
      )
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setAttendanceForm({
      firstName: "",
      lastName: "",
      number: "",
      email: "",
    });
  };
  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="lastName" className="form-label">
            Nom du participant
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={attendanceForm.lastName}
            name="lastName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="firstName" className="form-label">
            Prénom du participant
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={attendanceForm.firstName}
            name="firstName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="number" className="form-label">
            Numéro du participant
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            value={attendanceForm.number}
            name="number"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Adresse email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={attendanceForm.email}
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Ajouter
          </button>
        </div>
      </form>
    </>
  );
};

export default AttendanceForm;
