import React from "react";
import { Link } from 'react-router-dom';
import loginImage from "../../assets/images/logos/login.png";

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return (
            <form className="login-form">
                <div className="form-content d-flex align-items-center">
                <div className="image-container">
                        <img src={loginImage} alt="Login" /> {/* Use the imported image */}
                    </div>
                    <div className="form-fields">
                        <div className="d-flex align-items-center my-4">
                            <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                        </div>
                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">Email address:</label>
                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                            placeholder="Enter a valid email address" />
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form3Example4">Password:</label>
                            <input type="password" id="form3Example4" className="form-control form-control-lg"
                            placeholder="Enter your password" />
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            {/* <!-- Checkbox --> */}
                            <div className="form-check mb-0">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label className="form-check-label" htmlFor="form2Example3">
                                    Remember me
                                </label>
                            </div>
                            <Link to="/resetpassword" className="text-body">Forgot password?</Link>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <Link to="/" type="button" className="btn btn-primary btn-lg">Login</Link>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                                className="link-danger">Register</a></p>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginPage;
