import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import $ from "jquery";

class Home extends React.Component {
  componentDidMount() {
    //animation code
    $(document).ready(function () {
      $(".login-info-box").fadeOut();
      $(".login-show").addClass("show-log-panel");

      $('input[type="radio"]').on("change", function () {
        if ($("#log-reg-show").is(":checked")) {
          $(".register-info-box").fadeIn();
          $(".login-info-box").fadeOut();

          $(".white-panel").removeClass("right-log");

          $(".login-show").addClass("show-log-panel");
          $(".register-show").removeClass("show-log-panel");
        }
        if ($("#log-login-show").is(":checked")) {
          $(".register-info-box").fadeOut();
          $(".login-info-box").fadeIn();

          $(".white-panel").addClass("right-log");
          $(".register-show").addClass("show-log-panel");
          $(".login-show").removeClass("show-log-panel");
        }
      });
    });
  }

  render() {
    return (
      <div class="login-reg-panel">
        <div class="login-info-box">
          <h2 id="t1">Have an account?</h2>
          <label id="label-register" for="log-reg-show">
            Login
          </label>
          <input
            type="radio"
            name="active-log-panel"
            id="log-reg-show"
            value="log-reg-show"
          />
        </div>

        <div class="register-info-box">
          <h2 id="t1">Don't have an Account?</h2>
          <label id="label-login" for="log-login-show">
            Register
          </label>
          <input
            type="radio"
            name="active-log-panel"
            value="log-login-show"
            id="log-login-show"
          />
        </div>

        <div class="white-panel">
          <div class="login-show">
            <h2 class="log">LOGIN</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="button" value="Login" />
          </div>
          <div class="register-show">
            <h2 class="reg">REGISTER</h2>
            <input type="text" placeholder="First Name"  />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Place of Birth" />
            <input type="date" placeholder="DOB" />
            <label class="gen"for="gender"> Select your Gender</label>
            <br />
            <select id="gender" name="gender" >
              <option value="none" selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="email" placeholder="Mail ID"/>
            <input type="text" placeholder="Nationality"/>
            <p class="add">RESIDENTIAL ADDRESS</p>
            <input type="text"  placeholder="Address Line 1"/>
            <input type="text" placeholder="Address Line 2 (optional)"/>
            <input type="text" placeholder="City"/>
            <input type="password" placeholder="Password" />
            <label class="form-label" for="customFile">Upload Aadhar</label>
            <input type="file" class="form-control" id="customFile" />
            <label class="form-label" for="customFile">Upload  Birth  Certificate</label>
            <input type="file" class="form-control" id="customFile" />
            <label class="form-label" for="customFile">Upload  TC</label>
            <input type="file" class="form-control" id="customFile" />
            <input  type="button" value="Register" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;