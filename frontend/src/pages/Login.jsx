import { useState } from "react";
import "../../public/assets/css/form.css";
import Helmet from 'react-helmet';
import { Link, NavLink, useNavigate } from "react-router-dom";
// import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useAuth } from "../store/auth";
import { Navbar } from "../components/Navbar.jsx";


export const Login = () => {

    // const [visible, setVisible] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/user/login`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            console.log("login page",response);
            if(response.ok){
                const res_data = await response.json();
                // console.log(res_data);
                console.log("login successfull");
                setFormData({email:"",password:""})
                storeTokenInLS(res_data.token)
                navigate("/");
            }else{
                console.log("hello");
            }
        } catch (error) {
            console.log(error);
        }
        console.log(formData);
    };

    return (
        <>
            <Helmet bodyAttributes={{ style: 'background-color :rgb(237 238 239) ' }} />

            <Navbar />
            <div class="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 mx-auto" style={{ marginTop: "70px", marginBottom: "56px", border: "white", backgroundColor: "white" }}>
                            <div className="form container" style={{ marginTop: "50px", marginBottom: "50px", border: "white", backgroundColor: "white" }}>
                                <h4 className="text-center">Sign In</h4>
                                <hr className="mx-auto" />
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row ">
                                        <div className="col-sm-12">
                                            <input
                                                type="email"
                                                placeholder="Enter Your Email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInput}
                                                autoComplete="off"
                                                className="form-control shadow-none"
                                                style={{ height: "42px", fontSize: "14px" }}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <input
                                                // type={visible ? "text" : "password"}
                                                type="password"
                                                placeholder="Enter Your Password"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInput}
                                                autoComplete="off"
                                                className="form-control shadow-none"
                                                style={{ height: "42px", fontSize: "14px" }}
                                            />
                                            {/* {
                                                visible ? (
                                                    <AiOutlineEye
                                                        className="eyeicon position-absolute"
                                                        size={20}
                                                        onClick={() => setVisible(false)}
                                                    />
                                                ) : (
                                                    <AiOutlineEyeInvisible
                                                        className="eyeicon position-absolute"
                                                        size={20}
                                                        onClick={() => setVisible(true)}
                                                    />
                                                )
                                            } */}
                                        </div>

                                    </div>
                                    <br />
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="checkbox-content">
                                                    <input type="checkbox" id="logCheck" name="remember_me" style={{ marginRight: "6px" }} />
                                                    <label for="logCheck" className="text">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-end">
                                                <div className="forgot-pass">
                                                    <NavLink to="/forgot-password" className="">Forgot password?</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <button className="btn d-block mx-auto" type="submit" name="signup" style={{ backgroundColor: "#1f7b6f", color: "white", width: "128px", margin: "18px 0px", height: "46px" }}>Sign In</button>
                                    </div>

                                    <div className="signup-link text-center">Not a member? <Link className="link text-decoration-none" to="/signup" >Sign Up</Link></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
