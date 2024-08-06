import React from "react";
import { registerUser } from "actions/actions";
import { useState } from "react";

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    registerUser(userData);
    console.log("submitted");
    setUserData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="register-form">
      <h2>Register here</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="first_name"
            value={userData.first_name}
            className="form-control"
            placeholder="Username or email"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="last_name"
            value={userData.last_name}
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            onChange={handleInputChange}
            type="email"
            name="email"
            value={userData.email}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            value={userData.password}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <p className="description">
          The password should be at least eight characters long. To make it
          stronger, use upper and lower case letters, numbers, and symbols like
          ! " ? $ % ^ & )
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
