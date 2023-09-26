import React from "react";
import AttendanceList from "../components/AttendanceList";

const List = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="col-9">
          <h1 className="text-center text-white">Liste des participants</h1>
          <AttendanceList />
        </div>
      </div>
    </>
  );
};

export default List;
