import React from 'react';
const AddPatient = () => {
  return (
    <React.Fragment>
      <div className="bg-primary top-card-title">
        <span className="indexTitle pl-3 pt-2">Add new Patient</span>        
      </div>
      <div className="auth-wrapper">
        <div className="auth-inner">
        <form>
          <div className="form-group">
              <label>Full name</label>
              <input id="fullName" name="fullName" type="text" className="form-control" placeholder="Full name" />
          </div>

          <div className="form-group">
              <label>Date of Birth (Age)</label>
              <input id="dob" name="dob" type="date" className="form-control" placeholder="Select Date of Birth" />
          </div>

          <div className="form-group">
              <label>National Identity Number (NIN)</label>
              <input id="NIN" name="NIN" type="text" className="form-control" placeholder="National Identity Number (NIN)" />
          </div>
            
          <div className="form-group">
            <label>Phone Number</label>
            <input id="phone" name="phone" type="text" className="form-control" placeholder="Phone Number" />
          </div>
            
          <div className="form-group">
              <label>Email address (optional)</label>
              <input id="email" name="email" type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="form-group">
              <label>Test Date</label>
              <input id="testDate" name="testDate" type="date" className="form-control" placeholder="Select Test Date" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input id="phone" name="phone" type="text" className="form-control" placeholder="Phone Number" />
          </div>  



          <button type="submit" className="btn btn-primary btn-block">Add</button>          
          </form>
        </div>
      </div>
      
    </React.Fragment>
  );
}
 
export default AddPatient;