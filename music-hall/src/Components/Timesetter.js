import {useNavigate} from "react-router-dom";

function Timesetter(){
    let navigate = useNavigate();
return(
    <div>
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