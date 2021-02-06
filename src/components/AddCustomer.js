import React from "react";
const AddCustomer = () => {
  return (
    <React.Fragment>
      <div className="container">{patientInfo()}</div>
    </React.Fragment>
  );
};

const patientInfo = () => {
  return (
    <React.Fragment>
      <div className="row pb-3" style={{ borderBottom: "1px solid" }}>
        <h5 className="pt-2">Add new Customer</h5>
        <div className="col-md-12">
          <form>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label for="dob">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                />
              </div>
            </div>

            {/*<button className="btn btn-primary" type="submit">Submit form</button>*/}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AddCustomer;
