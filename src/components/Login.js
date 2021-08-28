import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const newUser = { email: email, password: password };
      setUser(newUser)
      console.log(user);
      // setEmail("");
      // setPassword("");
    } else {
      alert("E-mail and Password field can not be blank");
    }
  };

  return (
    <form action="" onSubmit={submitForm}>
      <h3>Sign In</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
    
      <Link to={'/cards'} email={email} >  <button type="submit" className="btn btn-primary btn-block">Submit  </button></Link>
    
    </form>
  );
};
export default Login;
