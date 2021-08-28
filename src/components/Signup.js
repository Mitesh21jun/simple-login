import React, { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState([]);

  const submitSignUp = (e) => {
    e.preventDefault();
    setNewUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  };
  return (
    <form onSubmit={submitSignUp}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="first-name"
          id="first-name"
          value={firstName}
          onChange={setFirstName}
        />
      </div>
      <br />

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="last-name"
          id="last-name"
          value={lastName}
          onChange={setLastName}
        />
      </div>
      <br />

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          id="email"
          value={email}
          onChange={setEmail}
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
          onChange={setPassword}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};
export default Signup;
