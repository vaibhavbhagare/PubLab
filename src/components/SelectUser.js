import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import logo from '../logo.svg';
import { Card } from "react-bootstrap";
import Login from '../components/Login';

export default function SelectUser() {

  //1.Super User
  //2.data logger
  const [selectedTab, setSelectedTab] = useState(1);

  const [showLogin, setShowLogin] = useState(false);

  return (
    <React.Fragment>
      <Login role ={selectedTab === 1 ? "admin" : "data logger"} />
    </React.Fragment>
    );
}

const SelectUserView = ({selectedTab, setSelectedTab, setShowLogin}) => {
  return (
    <div className="center electUser bg-primary">
      <div className="center mt-5 mb-5">
        <img src={logo} alt="Logo" width="150"/>
      </div>
      <div className="bt-box bg-white mt-5">
        <div className="pd-30 navy">
          <h4>Login your account as a</h4>
        </div>
        <div className="parentCard desk-view">
          <Card className={selectedTab === 1 ? "m-3 round-border active": "m-3 round-border"} onClick={()=>{setSelectedTab(1)}}>
            <Card.Body>
              <Card.Title className="navy">Super admin</Card.Title>
              <Card.Text className="nav-link fw-6 grey fs-13">
                Select your role to login as a Super admin.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={selectedTab === 2 ? "m-3 round-border active": "m-3 round-border"} onClick={()=>{setSelectedTab(2)}}>
            <Card.Body>
              <Card.Title className="navy">Data logger</Card.Title>
              <Card.Text className="nav-link fw-6 grey fs-13">
                Select your role to login as a Data logger.
              </Card.Text>
            </Card.Body>
          </Card>

          <Button className="mt-5" block size="lg" type="submit" onClick={()=>{setShowLogin(true)}}>
            Next
        </Button>
          <br/>
        </div>
      </div>
      
    </div>
  );
}