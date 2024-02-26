import { useState } from "react";
import "../../public/assets/css/form.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const SignUp = () => {

    const [visible, setVisible] = useState(false);

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [image,setImage] = useState('');



    const formData = new FormData()
        formData.append('username',username);
        formData.append('email',email);
        formData.append('phone',phone);
        formData.append('password',password);
        formData.append('image',image);

        const navigate = useNavigate();
        const {storeTokenInLS} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            const response = await fetch(`http://localhost:5000/user/register`, {
                method: "POST",
                body: formData,
            });
            const res_data = await response.json();
            if (response.ok) {               
                // console.log(res_data);
                console.log('Registration successfully');
                storeTokenInLS(res_data.token);
                navigate("/");
                setUsername('');
                setEmail('');
                setPhone('');
                setPassword('');
                setImage('');
            } else if (response.status === 400) {
                const errorData = await response.json();
                console.log('Validation errors:', errorData);
            } else {
                console.error('Server error:', response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
                <div className="form_div bg-white px-5 py-4 shadow-sm">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h3 className="text-center">Sign Up</h3>
                        <hr className="mx-auto" />
                        <div className="mb-3 mt-4">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                autoComplete="off"
                                className="form-control shadow-none"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                autoComplete="off"
                                className="form-control shadow-none"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-1" htmlFor="phone">Phone Number</label>
                            <input
                                type="number"
                                placeholder="Enter Your Mobile number"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                                autoComplete="off"
                                className="form-control  shadow-none"
                                required
                            />
                        </div>
                        <div className="mb-3 position-relative">
                            <label className="mb-1" htmlFor="password">Password</label>
                            <input
                                type={visible ? "text" : "password"}
                                placeholder="Enter Your Password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                autoComplete="off"
                                className="form-control  shadow-none"
                                required
                            />
                            {
                                visible ? (
                                    <AiOutlineEye
                                        className="eyeicon position-absolute"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="eyeicon position-absolute"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )
                            }
                        </div>
                        <div className="mb-4">
                            <label className="mb-1" htmlFor="image">Upload Profile Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={(e)=>setImage(e.target.files[0])}
                                className="form-control  shadow-none"
                                required
                            />
                        </div>
                        <div className="d-grid mb-3">
                            <button type="submit" className="btn btn-primary shadow-none">Sign Up</button>
                        </div>
                        <div className="">
                            Already have an account? <Link className="link text-decoration-none" to="/login" >Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
