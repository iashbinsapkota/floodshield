import React from "react";
import { Link } from 'react-router-dom';
import registerImage from "../../assets/images/logos/register.png";

class RegisterPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return (
            <form className="register-form">
                <div className="form-content d-flex align-items-center">
                <div className="image-container">
                        <img src={registerImage} alt="register" /> {/* Use the imported image */}
                    </div>
                    <div className="form-fields">
                        <div className="d-flex align-items-center my-4">
                            <h1 className="text-center fw-normal mb-0 me-3">Regsiter</h1>
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

                                          {/* <!-- Phoneinput --> */}
                                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form3Example4">Phone:</label>
                            <input type="text" id="form3Example4" className="form-control form-control-lg"
                            placeholder="Enter your phone number" />
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <Link to="/" type="button" className="btn btn-primary btn-lg">Register</Link>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Already a Member? <a href="/login"
                                className="link-danger">Login</a></p>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default RegisterPage;
