import { useState } from "react";
import "../../public/assets/css/form.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";


export const ForgotPassword = () => {

    const [email,setEmail] = useState('');

    const navigate = useNavigate();   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/user/forgot-password`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            })
            console.log("Forgot-password page",response);
            if(response.ok){
                alert("sent reset-password link on your email")
                setEmail("");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <>
        <Navbar />
            <div className="signin template d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
                <div className="form_div bg-white px-5 py-4 shadow-sm">
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-center">Forgot Password</h3>
                        <hr className="mx-auto"/>
                        <div className="mb-3">
                            <label className="mb-1" htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            autoComplete="off"
                            className="form-control shadow-none" 
                            required
                            />
                        </div>                     
                        <div className="d-grid mb-3">
                            <button type="submit" className="btn btn-primary shadow-none">Next</button>
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