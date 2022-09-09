import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Homepage.css";

// function Homepage(){
//     let navigate = useNavigate();
// return(
//     <div>
//         <button onClick= {() => {
//             navigate("Appointment")
//             }}
//             >
//                 {" "}
//                 Change to Appointment Page</button>
//     </div>
// );
// }

// const Homepage = () => <h3>This is the Homepage</h3>

export default function Homepage({ appointment, setAppointment }) {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  console.log({ firstName }, { lastName }, { email });

  const newAppointment = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  console.log({ newAppointment });

  async function handleAppointment(e) {
    e.preventDefault();
    try {
      const results = await fetch(
        `https://musichall-api.web.app/appointments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAppointment),
        }
      );
      const data = await results.json();
      console.log(data);


      setAppointment(data);
      alert(
        `A new appointment for ${firstName} ${lastName} has been submitted`
      );
      navigate("/Confirmation");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("Appointment");
          }}
        >
          {" "}
          Change to Appointment Page
        </button>
      </div>
      <div className="form-container">
        <form className="register-form">
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            id="last name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleAppointment}
            className="form field"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
