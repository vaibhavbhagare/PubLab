import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import FirebaseContext from '../firebase/context';
import {
  createUserProfileDocument,
  createNewUser
} from '../firebase/firebase';
import { useHistory } from "react-router-dom";
//const secondaryApp = firebase.initializeApp(firebaseConfig, 'Secondary');

export default function AddUser() {
  const history = useHistory();
  const [password, setPassword] = React.useState('');
  const [email1, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');
  const [errors, setErrors] = React.useState({});

  //const { currentUser } = React.useContext(FirebaseContext);

  

  // React.useEffect(() => {
  //   if (currentUser) {
  //     const { role } = currentUser;
  //     if (role !== 'admin') {
  //       history.push('/');
  //     }
  //   } else {
  //     history.push('/login');
  //   }
  // }, [currentUser, history]);

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const user = await createNewUser(email1, password);

      const { uid, email } = user;

      const userData = {
        uid,
        name,
        email,
        role: role.toLowerCase(),
       // created_by: currentUser
      };

      let a = await createUserProfileDocument(userData);
      console.log(user, a, '======================asd')
      if (role === 'admin') {
        return history.push('/admins');
      } else if (role === 'provider') {
        return history.push('/providers');
      } else if (role === 'technicians') {
        return history.push('/technicians');
      }
    } catch (error) {
      console.log(error);
      // return setErrors({
      //   email: 'Email is already in use'
      // });
    }
  };

  return (
    <div className="Login">
      <div className="center mt-5">
        <h4>Login as a Super admin</h4>
      </div>
      <Form onSubmit={onSubmit} className="mt-5 p-4">
        <Form.Group size="lg" controlId="email">
          <Form.Label className="font-weight-bold">Email Address*</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email1}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            error={errors.email || errors.general}
                errorMessage={errors.email}
                autoFocus={true}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Form.Label className="font-weight-bold">Username</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            error={errors.name || errors.general}
                errorMessage={errors.name}
                autoFocus={true}
          />
        </Form.Group>
        
        <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Role</Form.Label>
    <Form.Control as="select" value={role}
            onChange={(e) => setRole(e.target.value)}>
      <option value="1">1</option>
      <option value="1">2</option>
    </Form.Control>
  </Form.Group>
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
          Continue
        </Button>
      </Form>
    </div>
  );
}