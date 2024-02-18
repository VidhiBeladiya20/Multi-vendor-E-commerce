import { useState } from "react";
import "./form.css";
import { Link } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
export const Login = () => {

    const [visible, setVisible] = useState(false);

    return(
        <>
            <div className="signin template d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
                <div className="form_div bg-white px-5 py-4 shadow-sm">
                    <form>
                        <h3 className="text-center">Login</h3>
                        <hr className="mx-auto"/>
                        {/* <div className="mb-3 mt-4">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input 
                            type="text" 
                            name="username" 
                            autoComplete="off"
                            className="form-control shadow-none" />
                        </div> */}
                        <div className="mb-3">
                            <label className="mb-1" htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            name="email" 
                            autoComplete="off"
                            className="form-control shadow-none" />
                        </div>
                        <div className="mb-4 position-relative">
                            <label className="mb-1" htmlFor="password">Password</label>
                            <input 
                                type={ visible ? "text" : "password"} 
                                name="password" 
                                autoComplete="off"
                                className="form-control shadow-none mb-2" 
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
                            <button className="btn btn-primary">Login</button>
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