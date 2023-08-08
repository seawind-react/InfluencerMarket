
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import '../style/LogOut.css'

export default function LogOut() {
  const nav = useNavigate();
  // sessionStorage.removeItem("InfluncerData");
  // window.location.replace("/home");
  // nav("/home");


  confirmAlert({
    title: "Confirm to Log-Out?",
    message: "Are you sure to do this.",
    buttons: [
      {
        label: "Yes",
        onClick: () => {
          sessionStorage.removeItem("InfluncerData");
          window.location.replace("/home");
          nav("/home")
        }
      },
      {
        label: "No",
        onClick: () => {
          nav("/home")
        }
      }
    ]
  });

}; 
