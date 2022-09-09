import {useNavigate} from "react-router-dom";

function Timesetter({appointments,setAppointments}){
    let navigate = useNavigate();
return(
    <div>
        <h1>Timesetter</h1>
        <h2>date;{navigate}</h2>
        <button onClick= {() => {
            navigate("Confirmation")
            }}
            >
                {" "} 
                Change to Confirmation Page</button>
    </div>
);
}













// const Timesetter = () => <h3>This is the Timesetter Page</h3>

export default Timesetter