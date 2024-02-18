import { useState } from "react";
import "./form.css";
import { Link } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

export const SignUp = () => {

    const [visible, setVisible] = useState(false);
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        profile: null,
    });

    const handleInput = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0].name : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return(
        <>
            <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
                <div className="form_div bg-white px-5 py-4 shadow-sm">
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-center">Sign Up</h3>
                        <hr className="mx-auto"/>
                        <div className="mb-3 mt-4">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input 
                            type="text" 
                            name="username" 
                            value={formData.username}
                            onChange={handleInput}
                            autoComplete="off"
                            className="form-control shadow-none" 
                            required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-1" htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleInput}
                            autoComplete="off"
                            className="form-control shadow-none" 
                            required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="mb-1" htmlFor="phone">Phone Number</label>
                            <input 
                            type="number" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleInput}
                            autoComplete="off"
                            className="form-control  shadow-none" 
                            required
                            />
                        </div>
                        <div className="mb-3 position-relative">
                            <label className="mb-1" htmlFor="password">Password</label>
                            <input 
                                type={ visible ? "text" : "password"} 
                                name="password" 
                                value={formData.password}
                                onChange={handleInput}
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
                            <label className="mb-1" htmlFor="profile">Upload Profile</label>
                            <input 
                            type="file" 
                            name="profile" 
                            onChange={handleInput}
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