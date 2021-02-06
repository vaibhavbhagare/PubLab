import React from "react";
import CustomerCard from "../view/CustomerCard";
import FirebaseContext from "../firebase/context";
import { Link, Router } from "react-router-dom";

const PatientIndex = ({ history, match }) => {
  const { currentUser } = React.useContext(FirebaseContext);
  return (
    <div className="PatientIndex">
      <div className="patientCard desk-view">
        <div class="row mt-1">
          <button
            style={{ marginLeft: "80%" }}
            class="btn btn-danger btn-sm navbar-btn"
            onClick={() => {
              history.push("/add");
            }}
          >
            <Link to="/add" style={{ color: "#fff" }}>
              Add <i class="fa fa-plus" aria-hidden="true"></i>
            </Link>
          </button>
        </div>
        <CustomerCard />
      </div>
    </div>
  );
};

export default PatientIndex;
