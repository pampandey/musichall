import { Link } from "react-router-dom";
import logo from "../images/Musichallpic.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="this is the musichall logo" />
      <nav>
        <Link to="/"> Homepage</Link>
        <Link to="/Appointment">Appointment</Link>
        <Link to="/Timesetter">Timesetter</Link>
        <Link to="/Confirmation"> Confirmation</Link>
      </nav>
    </div>
  );
}
