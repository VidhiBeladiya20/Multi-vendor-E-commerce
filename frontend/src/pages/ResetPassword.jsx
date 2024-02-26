import { useState } from "react";
import "../../public/assets/css/form.css";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Navbar } from "../components/Navbar.jsx";


export const ResetPassword = () => {

    const [password,setPassword] = useState('');

    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();  
    
    const {id, token} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/user/reset-password/${id}/${token}`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({password}),
            })
            console.log("reset-password page",response);
            if(response.ok){
                setPassword("");
                navigate("/login");
            }
        } catch (error) {
            console.log(`error from reset-password page : ${error}`);
        }
    };

    return(
        <>
        <Navbar />
            <div className="signin template d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
                <div className="form_div bg-white px-5 py-4 shadow-sm">
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-center">Reset Password</h3>
                        <hr className="mx-auto"/>
                        <div className="mb-4 position-relative">
                            <label className="mb-1" htmlFor="password">Password</label>
                            <input 
                            type={ visible ? "text" : "password"} 
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
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
                            
                        </div>                   
                        <div className="d-grid mb-3">
                            <button type="submit" className="btn btn-primary shadow-none">Update</button>
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