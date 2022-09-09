import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage.js";
import React, {useState,} from 'react';
//or should I write...
// import {useState} from "react";
import Appointment from "./Components/Appointment.js";
// import Timesetter from "./Components/Timesetter.js";
import Confirmation from "./Components/Confirmation.js";
import Header from "./Components/Header.js";
import 'antd/dist/antd.css'
import "./styles.css";
// import Test from "./Components/Test.js";


 


function App() {
   // Declare a new state variable, which we'll call "count"
  //  const initialValues = { firstname: "", lastname; "", email: ""};
   const [appointment, setAppointment] = useState({});
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Homepage appointment={appointment} setAppointment={setAppointment}/>} />
        <Route path="Appointment" element={<Appointment appointment={appointment} setAppointment={setAppointment}/>} />
        {/* <Route path="Timesetter/:date" element={<Timesetter appointment={appointment} setAppointment={setAppointment} />} /> */}
        <Route path="Confirmation" element={<Confirmation appointment={appointment} setAppointment={setAppointment}/>} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="Test" element={<Test />} /> */}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}




const NotFound = () => {
  return (
    <>
      <img src="./images/Musichallpic.png" alt="404 page" />
    </>
  );
};

export default App;
