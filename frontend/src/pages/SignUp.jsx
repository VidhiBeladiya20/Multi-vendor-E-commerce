import { useState } from "react";
import "../../public/assets/css/form.css";
import { Link, useNavigate } from "react-router-dom";
import Helmet from 'react-helmet';
import { Navbar } from "../components/Navbar";
import { useAuth } from "../store/auth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const SignUp = () => {

    // const [visible, setVisible] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');

    const [otpSec, setOtpSec] = useState(false);

    const [otpData, setOtpData] = useState({
        email:'',
        sentOtp: '',
        userOtp: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setOtpData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [error, setError] = useState({});

    const formData = new FormData()
    formData.append('username', username);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('image', image);

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            const response = await fetch(`http://localhost:5000/user/register`, {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                setOtpSec(true);
                const res_data = await response.json();
                // console.log(res_data.extraDetails);
                console.log('Registration successfully');
                // setSentOtp(res_data.otp);
                setOtpData({sentOtp:res_data.otp,email:email});
                storeTokenInLS(res_data.token);
            }
            else {
                const errors = await response.json();
                console.log(errors);
                if (response.status && errors) {
                    setError(errors);
                    console.log(error.extraDetails); //it contains error now
                }
            }
            //  else {
            //     alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            //     // console.error('Server error:', response.status);
            // }
        } catch (error) {
            console.log(error);
        }
    }

    const handleOtp = async (e) => {
        e.preventDefault();
        console.log(otpData);
        try {
            const response = await fetch(`http://localhost:5000/user/otp`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(otpData),
            })

            if (response.ok) {
                const res_data = await response.json();
                console.log('otp done');
                navigate("/")
            }
            else {
                const errors = await response.json();
                console.log(errors);
                if (response.status && errors) {
                    setError(errors);
                    console.log(error.extraDetails); //it contains error now
                }
            }
        } catch (error) {
            console.log(`error from signup page in otpData section : ${error}`);
        }
    }

    return (
        <>
            <Helmet bodyAttributes={{ style: 'background-color :rgb(237 238 239) ' }} />

            <Navbar />
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 mx-auto" style={{ marginTop: "30px", marginBottom: "56px", border: "white", backgroundColor: "white" }}>
                            <div className="form container" style={{ marginTop: "50px", marginBottom: "50px", border: "white", backgroundColor: "white" }}>
                                <h4 className="text-center">Sign Up</h4>
                                <hr className="mx-auto" />
                                <p className="text-danger">
                                    {error.extraDetails}
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                placeholder="Enter Your Name"
                                                id="username"
                                                name="username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                autoComplete="off"
                                                className="form-control shadow-none"
                                                style={{ height: "42px", fontSize: "14px" }}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row ">
                                        <div className="col-sm-12">
                                            <input
                                                type="email"
                                                placeholder="Enter Your Email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
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
                                                type="number"
                                                placeholder="Enter Your Mobile number"
                                                id="phone"
                                                name="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
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
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
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
                                    <div className="form-group row">
                                        <div className="col-sm-12">
                                            <input
                                                type="file"
                                                id="image"
                                                name="image"
                                                onChange={(e) => setImage(e.target.files[0])}
                                                className="form-control  shadow-none"
                                                style={{ height: "42px", fontSize: "14px" }}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="forgot-pass">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    <div className="">
                                        <button className="btn d-block mx-auto" type="submit" name="signup" style={{ backgroundColor: "#1f7b6f", color: "white", width: "128px", margin: "12px 0px", height: "46px" }}>Sign Up</button>
                                    </div>

                                    <div className="signup-link text-center">Already a member? <Link className="link text-decoration-none" to="/login" >Sign In</Link></div>
                                </form>

                                {
                                    otpSec ?
                                        (
                                            <>
                                                <form onSubmit={handleOtp}>
                                                    <div className="form-group row mt-4">
                                                        <div className="col-sm-3">
                                                            <div className="signup-link text-center mt-1">Enter OTP</div>
                                                        </div>
                                                        <div className="col-sm-5">
                                                            <input
                                                                type="number"
                                                                placeholder="Enter OTP"
                                                                id="userOtp"
                                                                name="userOtp"
                                                                value={otpData.userOtp}
                                                                onChange={handleInput}
                                                                autoComplete="off"
                                                                className="form-control shadow-none"
                                                                style={{ height: "42px", fontSize: "14px" }}
                                                            />
                                                        </div>
                                                        <div className="">
                                                            <button className="btn d-block mx-auto" type="submit" name="signup" style={{ backgroundColor: "#1f7b6f", color: "white", width: "100px", margin: "12px 0px", height: "36px" }}>Verify</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </>
                                        )
                                        :
                                        (<></>)
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
