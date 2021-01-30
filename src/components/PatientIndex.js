import React from "react";
import PatientCard from "../view/PatientCard"
import FirebaseContext from '../firebase/context';

const PatientIndex = ({ history, match }) => {

console.log(history, match)
const { currentUser } = React.useContext(FirebaseContext);

  //React.useEffect(() => {
  //  console.log(4)
  //   if (!currentUser) {
  //     history.push('/sign-in');
  //   }
  // }, [currentUser, history]);

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