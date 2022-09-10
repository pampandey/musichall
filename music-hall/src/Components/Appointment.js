import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Appointment({ appointment, setAppointment }) {
  let navigate = useNavigate();

  
  return (
    <div>
      <button
        onClick={() => {
          navigate("/Confirmation");
        }}
      >
        {" "}
        Change to Confirmation Page
      </button>
      {/* <Calendar onChange={Confirmation(value)} value={appointment.appointmentdate} /> */}
    </div>
  );
}

// const Appointment = () => <h3>This is the Appointment page</h3>

export default Appointment;
