import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Loginuser(event) {
    event.preventDefault(); 

    const response = await fetch("http://localhost:1337/userapi/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    //convert it into json
    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login is successful");
      window.location.href = "/";
    } else {
      alert("Please check your credentials");
    }

    console.log(data);
  }

  return (
    <div className="login-form">
      <form onSubmit={Loginuser}>
        <img src="/Logo.png" className="logo_"></img>
        <h1>Login</h1>
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

        <div>
          <input type="submit" className="login-submit-div" value="Login" />
        </div>
        <p>
          Dont have an account?{" "}
          <span>
            <a href="/register">Register now</a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
