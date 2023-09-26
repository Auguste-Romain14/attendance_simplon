import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="d-flex justify-content-center gap-3 display-6">
        <li>
          <Link to="/">
            <button className="btn btn-primary fs-5">
              Ajouter Un Participant
            </button>
          </Link>
        </li>
        <li>
          <Link to="/liste">
            <button className="btn btn-primary fs-5">
              Liste des Participants
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
