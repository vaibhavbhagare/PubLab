import React from "react";
import PatientCard from "../view/PatientCard"
const PatientIndex = () => {
  return (
    <div className="PatientIndex">
      <div className="bg-primary top-card-title">
        <span className="indexTitle pl-3">Patient record</span>
        <span className="float-right indexTitle pr-2">
          <i className="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;
          <i className="fa fa-sliders" aria-hidden="true"></i>
        </span>
      </div>
      <PatientCard/>
    </div> );
}
 
export default PatientIndex;