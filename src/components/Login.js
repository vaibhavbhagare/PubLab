import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <div className="center mt-5">
        <h4>Login as a Super admin</h4>
      </div>
      <Form onSubmit={handleSubmit} className="mt-5 p-4">
        <Form.Group size="lg" controlId="email">
          <Form.Label className="font-weight-bold">Email Address*</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="font-weight-bold">Password*</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>
        <a href="#" class=" float-right text-primary stretched-link mb-4">Forgot Password?</a>
        <Button className="mt-5" block size="lg" type="submit" disabled={!validateForm()}>
          Continue
        </Button>
      </Form>
      <div class="center p-4">
        By continue you agree to
        <a href="">Terms of User</a>  and 
         <a href=""> Privacy Policy</a>  
      </div>
    </div>
  );
}