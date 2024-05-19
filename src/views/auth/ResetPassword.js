import React from "react";
import { Link } from 'react-router-dom';
import Image from "../../assets/images/logos/forgot.png";

class ResetPassword extends React.Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  render(){
      return (
          <div className="reset-password-section">
              <div className="image-container-forgot">
                  <img src={Image} alt="Login" />
              </div>
              <div className="forgot-content">
                  <div className="centered">
                      <h2>Forgot Password?</h2>
                      <p><em>Please enter your account email address below and a reset link will be sent to you.</em></p>
                  </div>
                  <form id="reset-password-form" role="form" autoComplete="off" className="form" method="post">
                      <div className="form-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                          <label>Email Address:</label>
                          <input id="email" name="email" placeholder="example@email.com" className="form-control form-control-lg" type="email" />
                      </div>
                      <div className="form-group mt-2">
                          <button type="button" className="btn btn-primary btn-lg">Reset Password</button>
                          <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login" className="link-danger">Login</Link></p>
                      </div>
                  </form>
              </div>
          </div>
      );
  }
}

export default ResetPassword;