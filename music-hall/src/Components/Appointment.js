import {useNavigate} from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';



function Appointment(){
    let navigate = useNavigate();
return(
    <div>
        <button onClick= {() => {
            navigate("Timesetter")
            }}
            >
                {" "} 
                Change to Timesetter Page</button>
                <Calendar/>
    </div>
);
}













// const Appointment = () => <h3>This is the Appointment page</h3>

export default Appointment