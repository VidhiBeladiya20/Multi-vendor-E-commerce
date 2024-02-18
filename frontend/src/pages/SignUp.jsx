import { useState } from "react";
import "./form.css";
import { Link } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {RxAvatar} from "react-icons/rx"; 
export const SignUp = () => {

    const [visible, setVisible] = useState(false);
    // const [avatar, setAvatar] = useState(null);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }

    return(
        <>
            <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
                <div className="form_div bg-white px-5 py-4 shadow-sm">
                    <form>
                        <h3 className="text-center">Sign Up</h3>
                        <hr className="mx-auto"/>
                        <div className="mb-3 mt-4">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input 
                            type="text" 
                            name="username" 
                            autoComplete="off"
                            className="form-control shadow-none" />
                        </div>
                        <div className="mb-3">
                            <label className="mb-1" htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            name="email" 
                            autoComplete="off"
                            className="form-control shadow-none" />
                        </div>
                        <div className="mb-3 position-relative">
                            <label className="mb-1" htmlFor="password">Password</label>
                            <input 
                                type={ visible ? "text" : "password"} 
                                name="password" 
                                autoComplete="off"
                                className="form-control  shadow-none" />
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
                            <label className="mb-1" htmlFor="phone">Phone Number</label>
                            <input 
                            type="number" 
                            name="phone" 
                            autoComplete="off"
                            className="form-control  shadow-none" />
                        </div>
                        {/* <div className="avt mt-2 mb-4 d-flex align-items-center">
                            <span className="h-50 w-50 d-inline-block rounded-circle">
                                {
                                    avatar ? 
                                    (
                                        <img src={URL.createObjectURL(avatar)} alt="avatar" className="h-auto w-auto object-cover rounded-circle" />
                                    ) : (
                                        <RxAvatar className="h-50 w-50 avtar"/>
                                    )
                                }
                            </span>
                            <label htmlFor="file-input" className="px-2 py-2 border border-dark rounded shadow-sm text-sm bg-white">
                                <input type="file" name="avatar" id="file-input" accept=".jpg, .jpeg, .png" className="position-absolute p-0 overflow-hidden text-white d-none"/>
                                <span>Upload a file</span>
                            </label>
                        </div> */}
                        <div className="d-grid mb-3">
                            <button className="btn btn-primary">Sign Up</button>
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