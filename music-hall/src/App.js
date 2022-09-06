import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage.js";
import Appointment from "./Components/Appointment.js";
import Timesetter from "./Components/Timesetter.js";
import Confirmation from "./Components/Confirmation.js";
import Header from "./Components/Header.js";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="Appointment" element={<Appointment />} />
        {/* <Route path="Timesetter" element={<Timesetter />} /> */}
        <Route path="Confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
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
