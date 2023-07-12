import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
export default function Nabar(){
    return(   
<html>
<head>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
<script src="https://kit.fontawesome.com/3ee142b205.js" crossorigin="anonymous"></script>
</head>
<nav className="container-fluid navbar navbar-expand-lg navbar-light bg-black border-1px">


      <div className="container-fluid"   style={{borderBottom:"solid black"}}>
        <a href="#" className="navbar-brand fw-bold ms-xl-3 ms-lg-3 ms-2 text-white ">School</a>

        <button className="navbar-toggler border-0 outline-0 navbar_toggler_button" data-bs-toggle="offcanvas"
          data-bs-target="#myNavbar">
          <span className="navbar-toggler-icon" ></span>
        </button>

        <div id="myNavbar" className="offcanvas offcanvas-end w-75 "style={{backgroundColor:"black"}}>
          <div className="container">
            <div className="offcanvas-header">
              <button className="btn-close border-0 outline-0 ms-auto fs-3 offcanvas_close_btn"
                data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body justify-content-between align-items-center">
              <ul className="navbar-nav">
               
                <li className="nav-item dropdown mx-xl-3 mx-lg-3 mx-0">
                  <a href="#" className="nav-link dropdown-toggle text-secondary text-white" data-bs-toggle="dropdown"></a>
                  <div className="dropdown-menu border-0" >
                    <a href="#" className="dropdown-item text-secondary" id="drp">Admission</a>
                    <a href="#" className="dropdown-item text-secondary" id="drp">Status</a>
                    <a href="#" className="dropdown-item text-secondary" id="drp">Fee Payment</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-secondary text-white fw-bold" > Admission</a>
                </li>
                <li className="nav-item ms-xl-3 ms-lg-3 ms-0">
                  <a href="#" className="nav-link text-secondary text-white fw-bold" > Contact </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item ms-xl-3 ms-lg-3 ms-0">
                  <a href="#" className="nav-link btn px-xl-3 px-md-3 btn-outline-dark fw-bold" id="loginbtn" >
                    Login / Register<i className="fa-sharp fa-light fa-list"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </nav>

</html>
    );
}