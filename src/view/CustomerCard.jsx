import { Card, Form } from "react-bootstrap";

const CustomerCard = (props) => {
  return (
    <>
      <Card className="mt-1">
        <Card.Body>
          <div className="card-head-title navy">
            <span>
              <b>Vaibhav Bhagare</b>
            </span>
            <span className="date float-right">11 june 2121</span>
          </div>
          <div className="card-phone navy pt-2 pb-2">
            <span className="phone">+91 98989888998 | vb@gmail.com</span>
          </div>
          <div className="card-head-title">
            <Card className="pd-unset sm-card bg-danger">
              <Card.Body className="pd-unset sm-card-body">
                <div className="sm-text-2">
                  <span>Test Result</span>
                  <span className="float-right">18 Dec 2020 | 06:30 pm</span>
                </div>
                <h5 className="sm-text-1">The Covid-19 test is positive</h5>
              </Card.Body>
            </Card>
          </div>
          <div className="card-btn-title pt-3">
            <div className="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-light fw-5 sm-send-btn">Send SMS</button>
            </div>
            <div className="btn-group mr-2 float-right" role="group" aria-label="Second group">
              <button type="button" className="btn btn-primary fw-5">Send Email</button>
            </div>
            <Form.Check className="sm-checkbox mt-3" type="checkbox" label="SMS or Email send request is successful" />
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-1">
        <Card.Body>
          <div className="card-head-title navy">
            <span>
              <b>Vaibhav Bhagare</b>
            </span>
            <span className="date float-right">11 june 2121</span>
          </div>
          <div className="card-phone navy pt-2 pb-2">
            <span className="phone">+91 98989888998 | vb@gmail.com</span>
          </div>
          <div className="card-head-title">
            <Card className="pd-unset sm-card bg-success">
              <Card.Body className="pd-unset sm-card-body">
                <div className="sm-text-2">
                  <span>Test Result</span>
                  <span className="float-right">18 Dec 2020 | 06:30 pm</span>
                </div>
                <h5 className="sm-text-1">The Covid-19 test is positive</h5>
              </Card.Body>
            </Card>
          </div>
          <div className="card-btn-title pt-3">
            <div className="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-light fw-5 sm-send-btn">Send SMS</button>
            </div>
            <div className="btn-group mr-2 float-right" role="group" aria-label="Second group">
              <button type="button" className="btn btn-primary fw-5">Send Email</button>
            </div>
            <Form.Check className="sm-checkbox mt-3" type="checkbox" label="SMS or Email send request is successful" />
          </div>
        </Card.Body>
      </Card>

    </>
  );
}

export default CustomerCard;