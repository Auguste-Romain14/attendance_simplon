import React from "react";
import AttendanceForm from "../components/AttendanceForm";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="col-9 d-flex my-5 formulaire shadow">
          <div className="image col-6">
            <img
              src="/assets/pexels-tim-gouw-53874.jpg"
              alt=""
              className="w-100 h-100"
            />
          </div>
          <div className=" col-6 py-2 px-5">
            <h2 className="text-center mb-5">Ajouter participant</h2>
            <div className="mb-2">
              <AttendanceForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
