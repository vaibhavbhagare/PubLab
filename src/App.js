import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import AddUser from "./components/AddUser";
import PatientIndex from "./components/PatientIndex";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SelectUser from "./components/SelectUser";
import useAuth from "./utils/useAuth";
import { auth, firestore, FirebaseContext } from "./firebase/firebase";
import AddCustomer from "./components/AddCustomer";
function App() {
  const currentUser = useAuth();

  console.log(currentUser);
  return (
    <FirebaseContext.Provider value={{ currentUser, auth, firestore }}>
      <div className="App">
        <Router>
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="/">
                  <b>भगरे किराणा</b>
                </a>
              </div>
            </div>
          </nav>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return currentUser ? (
                  <Redirect to="/home" />
                ) : (
                  <Redirect to="/" />
                );
              }}
            />
            <Route exact path="/" component={SelectUser} />
            <Route exact path="/home" component={PatientIndex} />
            <Route exact path="/add" component={AddCustomer} />
          </Switch>
        </Router>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
