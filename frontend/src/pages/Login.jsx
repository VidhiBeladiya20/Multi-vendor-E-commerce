import { useState } from "react";
import "./form.css";
import { Link } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
export const Login = () => {

    const [visible, setVisible] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return(
        <>
            <div className="signin template d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
                <div className="form_div bg-white px-5 py-4 shadow-sm">
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-center">Login</h3>
                        <hr className="mx-auto"/>
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
                        <div className="mb-4 position-relative">
                            <label className="mb-1" htmlFor="password">Password</label>
                            <input 
                            type={ visible ? "text" : "password"} 
                            name="password"
                            value={formData.password}
                            onChange={handleInput}
                            autoComplete="off"
                            className="form-control shadow-none mb-2" 
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

                            <a href="#" className="text-decoration-none text-end">Forgot your password?</a>
                            
                        </div>                    
                       
                        <div className="d-grid mb-3">
                            <button type="submit" className="btn btn-primary shadow-none">Login</button>
                        </div>
                        <div className="">
                            Not have an account? <Link className="link text-decoration-none" to="/signup" >Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}