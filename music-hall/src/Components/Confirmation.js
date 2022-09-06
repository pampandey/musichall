import {useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
// import { List, Alert } from 'antd';
import Appointment from './Appointment.js';

function Confirmation(){
    let navigate = useNavigate();
return(
    <div>
        <button onClick= {() => {
            navigate("Homepage")
            }}
            >
                {" "} 
                Change to Home Page</button>
    </div>
);
}



export default function appointment({ appointmentlist, setAppointment, token }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // call the api and use setTasklist to fill in state...
  useEffect(() => {
    fetch('https://three-do-api-mtm.web.app/tasks', { 
    // fetch('http://localhost:5555/tasks', {
      headers: {
        'Authorization': token,
      }
    })
      .then(results => results.json())
      .then(appointment => {
        setAppointment(Appointment);
        setLoading(false);
        setError('');
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, [token, setAppointment, setLoading, setError]);
  return (
    <>
      {(error && token) && <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
      />}
      <div className='appointment'>
        <List
          dataSource={'appointmentList'}
          loading={loading}
          renderItem={(item) => (
            <Appointment
              // key={item.id}
              item={item}
              // token={token}
              setLoading={setLoading}
              setAppointmentt={setAppointment}
              setError={setError} />
          )}
        />
      </div>
    </>
  )
}


// const Confirmation = () => <h3>This is the Confirmation Page.</h3>

 