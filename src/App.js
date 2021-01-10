import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AddUser from './components/AddUser';
import PatientIndex from './components/PatientIndex';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SelectUser from './components/SelectUser';
import useAuth from './utils/useAuth';
import { auth, firestore, FirebaseContext } from './firebase/firebase';

function App() {
  debugger;
  const currentUser = useAuth();
  console.log(currentUser)
  return (
    <FirebaseContext.Provider value={{ currentUser, auth, firestore }}>
      <div className="App">
        <Router>
          <Switch>
              <Route path="/sign-in">
                <SelectUser/>
              </Route>
              <Route path="/AddUser">
                <AddUser/>
              </Route>
              <Route path="/">
                <PatientIndex/>
              </Route>
            </Switch>        
      </Router>
    </div>
  </FirebaseContext.Provider>
  );
}

export default App;
