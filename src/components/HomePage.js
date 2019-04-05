// The Landing Page
import React from "react";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <section className="main">
        <h1>Welcome, this is homepage</h1>
        <p>
          Lorem Ipsum <br />
          <a className="btn" href="/login">
            Signup Now
          </a>
        </p>
      </section>
      <Footer />
    </div>
  );
};
const Footer = () => {
  return <footer>&copy; Webception IT Solutions Pvt. Ltd. MIT License</footer>;
};
export default HomePage;
