import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import ProfileCourses from "../components/Profile/ProfileCourses";
import Quizzes from "../components/Profile/Quizzes";
import { getUser } from "actions/actions";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    console.log("Token retrieved from local storage:", token);
    const userData = await getUser(token);
    console.log("User data:", userData);
    setUser(userData);
    console.log("User state:", user.email);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Profile"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Profile"
      />

      <div className="profile-area">
        <div className="container">
          <div className="profile-box ptb-100">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4">
                <div className="image">
                  <img src="/images/advisor/advisor10.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-8 col-md-8">
                <div className="content">
                  <h3>
                    {user.first_name} {user.last_name}
                  </h3>
                  <span className="sub-title">Agile Project Expert</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <ul className="info">
                    <li>
                      <span>Phone Number:</span>{" "}
                      <a href="tel:+44254588689">(+44) -2545 - 88689</a>
                    </li>
                    <li>
                      <span>Email:{user.email}</span>{" "}
                    </li>
                  </ul>

                  <ul className="social-link">
                    <li>
                      <a href="#" className="d-block" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <ProfileCourses />

          <Quizzes />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
