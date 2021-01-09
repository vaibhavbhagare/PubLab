import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Login from './components/Login';
import AddUser from './components/AddUser';
import PatientIndex from './components/PatientInex';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SelectUser from './components/SelectUser';
import AddPatient from './components/AddPatient';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/AddUser">
            <AddUser/>
          </Route>
          <Route path="/">
            <PatientIndex/>
          </Route>
          <Route path="/addPatient">
            <AddPatient/>
          </Route>
          <Route path="/user">
            <SelectUser/>
          </Route>
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
