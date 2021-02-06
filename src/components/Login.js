import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import firebase from "../firebase/firebase";
import { useHistory } from "react-router-dom";

export default function Login({ role }) {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    debugger;
    let emailNew;

    // // Form validation
    // if (!email) {
    //   return setErrors({
    //     ...errors,
    //     email: "Username or email is required",
    //   });
    // } else if (!password) {
    //   return setErrors({
    //     ...errors,
    //     email: "",
    //     password: "Password is required",
    //   });
    // }

    // setErrors({});

    // if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    //   emailNew = email;
    // } else {
    //   emailNew = email + "@pro-optics.com";
    // }
    try {
      //hard code email for shree app
      emailNew = "admin@admin.com";
      firebase
        .auth()
        .signInWithEmailAndPassword(emailNew, password)
        .then((user) => {
          history.push("/home");
        })
        .catch((error) => {
          // var errorCode = error.code;
          // var errorMessage = error.message;
        });
    } catch (error) {
      console.log(error);
      return setErrors({
        general: "Incorrect log in details",
      });
    }
  };

  return (
    <div className="Login">
      <div className="center mt-5">
        <h4>Shree Kirana</h4>
      </div>
      <Form onSubmit={onSubmit} className="mt-5 p-4">
        {/* <Form.Group size="lg" controlId="email">
          <Form.Label className="font-weight-bold">Email Address*</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            error={errors.email || errors.general}
                errorMessage={errors.email}
                autoFocus={true}
          />
        </Form.Group> */}
        <Form.Group size="lg" controlId="password">
          <Form.Label className="font-weight-bold">Password*</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            error={errors.password || errors.general}
            errorMessage={errors.password || errors.general}
          />
        </Form.Group>
        {/* <a href="#" className=" float-right text-primary stretched-link mb-4">Forgot Password?</a> */}
        <Button className="mt-5" block size="lg" type="submit">
          Login
        </Button>
      </Form>
      {/* <div className="center p-4">
        By continue you agree to
        <a href="">Terms of User</a>  and 
         <a href=""> Privacy Policy</a>  
      </div> */}
    </div>
  );
}
