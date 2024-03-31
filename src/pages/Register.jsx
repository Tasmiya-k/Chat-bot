import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Registeruser(event) {
    console.log("HERE");
    event.preventDefault();

    const response = await fetch("http://localhost:1337/userapi/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    //convert it into json
    const data = await response.json();

    if (data.status === "ok") {
      navigate("/login");
    } else {
      document.getElementById("error-message").style.display = "block";
      console.log(data);
    }
  }

  return (
    <div className="register-form">
      <form onSubmit={Registeruser}>
        <img src="/Logo.png" className="logo_"></img>
        <h1>Register</h1>
        <div className="contact-form-ele">
          <label className="label">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="name"
          />
        </div>

        <div className="contact-form-ele">
          <label className="label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="email"
          />
        </div>

        <div className="contact-form-ele">
          <label className="label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="password"
          />
        </div>
        <div id="error-message">User already exist! Please login</div>
        <div>
          <input
            type="submit"
            value="Register"
            className="register-submit-div"
          />
        </div>
        <p>
          Already have an account?{" "}
          <span>
            <a href="/login">Login</a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
