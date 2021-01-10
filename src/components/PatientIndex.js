import React from "react";
import PatientCard from "../view/PatientCard"
import FirebaseContext from '../firebase/context';
import { useHistory } from "react-router-dom";

const PatientIndex = (props) => {
  const history = useHistory();

const { currentUser } = React.useContext(FirebaseContext);
console.log("currentUser p",currentUser)
  

   React.useEffect(() => {
     if (currentUser) {
       const { role } = currentUser;
       if (role !== 'admin') {
         history.push('/');
       }
     } else {
       history.push('/sign-in');
     }
   }, [currentUser, history]);

  return (
    <div className="PatientIndex">
      <div className="bg-primary top-card-title">
        <span className="indexTitle pl-3">Patient record</span>
        <span className="float-right indexTitle pr-2">
          <i className="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;
          <i className="fa fa-sliders" aria-hidden="true"></i>
        </span>
      </div>
      <PatientCard/>
    </div> );
}
 
export default PatientIndex;