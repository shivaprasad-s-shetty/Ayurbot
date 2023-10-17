import React from "react";
import "./Home.css";


function Home() {
  return (
    <div className="App">
      <header className="header">
      <img src="/images/logo.png" alt="Company Logo" className="logo" />


      </header>
      <div className="content">
        <div className="left-content">
          <h1>For Doctors</h1>
          <a href="/login-doctor"><button>Login</button></a>
          <p>Don't have an account? <a href="/register-doctor">Register</a></p>
        </div>
        <div className="right-content">
          <h1>For Patients</h1>
          <a href="/login-patient"><button>Login</button></a>
          <p>Don't have an account?<a href="/register-patient">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Home;