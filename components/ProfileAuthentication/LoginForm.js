import React from "react";
import Link from "next/link";
import { loginUser } from "actions/actions";
import { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(userData);
    console.log("Login response:", response);
    localStorage.setItem("token", response.jwt);
    console.log(
      "Token stored in local storage:",
      localStorage.getItem("token")
    );

    setUserData({
      email: "",
      password: "",
    });
    router.push("/profile");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="login-form">
      <h2>Login</h2>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username or email</label>
          <input
            onChange={handleInputChange}
            type="text"
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

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
            <p>
              <input type="checkbox" id="test2" />
              <label htmlFor="test2">Remember me</label>
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
            <Link href="#">
              <span className="lost-your-password">Lost your password?</span>
            </Link>
          </div>
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
