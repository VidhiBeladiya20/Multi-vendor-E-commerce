import { useState } from "react";
import "../../public/assets/css/sellerForm.css";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const SellerSignup = () => {

    const [visible, setVisible] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        image: null,
    });

    const handleInput = (e) => {
        // console.log(e);
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0].name : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch(`http://localhost:5000/user/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);
            if (response.ok) {
                console.log('Registration successful');
            } else if (response.status === 422) {
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
        <div className="bg-light">
        <div className="container">
            <center><h2 className="pt-5">Seller Registration</h2></center>
            <center><hr /></center>
            <form className="">

            <div className="row">
                <div className="col-lg-6 part">
                    <div className="mb-3">
                        <label for="sellerName" className="form-label">Seller Name</label>
                        <input 
                        type="text" 
                        className="form-control shadow-none" 
                        id="sellerName" 
                        name="sellerName" 
                        />
                    </div>
                    <div className="mb-3">
                        <label for="category" className="form-label">Category</label>
                        <input 
                        type="text" 
                        className="form-control shadow-none" 
                        id="category" 
                        name="category" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="annualTurnover" className="form-label">Annual Turnover</label>
                        <input 
                        type="number" 
                        className="form-control shadow-none" 
                        id="annualTurnover" 
                        name="annualTurnover" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="products" className="form-label products">Where do you get products from?</label><br />
                        <input 
                        type="radio" 
                        className="radio" 
                        id="option1" 
                        name="products" 

                        /> I manufacture them <br />
                        <input 
                        type="radio" 
                        className="radio" 
                        id="option2" 
                        name="products" 

                        /> I import them <br />
                        <input 
                        type="radio" 
                        className="radio" 
                        id="option3" 
                        name="products" 

                        /> I resell products that i buy
                    </div>
                    <div className="mb-3">
                        <label for="streetAddress" className="form-label">Street Address</label>
                        <input 
                        type="text" 
                        className="form-control shadow-none" 
                        id="streetAddress" 
                        name="streetAddress" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="city" className="form-label">City/Town</label>
                        <input type="text" 
                        className="form-control shadow-none" 
                        id="city" 
                        name="city" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="state" className="form-label">State/Region</label>
                        <input 
                        type="text" 
                        className="form-control shadow-none" 
                        id="state" 
                        name="state" 

                        />
                    </div>
                </div>
                <div className="col-lg-6 part">
                    <div className="mb-3">
                        <label for="country" className="form-label">Country</label>
                        <input 
                        type="text" 
                        className="form-control shadow-none" 
                        id="country" 
                        name="country" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="postalCode" className="form-label">Zip/Postal Code</label>
                        <input 
                        type="number" 
                        className="form-control shadow-none" 
                        id="postalCode" 
                        name="postalCode" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="businessTitle" className="form-label">Business Title</label>
                        <input 
                        type="text" 
                        className="form-control shadow-none" 
                        id="businessTitle" 
                        name="businessTitle" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="companyName" className="form-label">Company Name</label>
                        <input 
                        type="text" 
                        className="form-control shadow-none" 
                        id="companyName" 
                        name="companyName" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input 
                        type="email" 
                        className="form-control shadow-none" 
                        id="email" 
                        name="email" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="phoneNumber" className="form-label">Phone Number</label>
                        <input 
                        type="tel" 
                        className="form-control shadow-none" 
                        id="phoneNumber" 
                        name="phoneNumber" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input 
                        type="password" 
                        className="form-control shadow-none" 
                        id="password" 
                        name="password" 

                        />
                    </div>
                    <div className="mb-3">
                        <label for="photo" className="form-label">Photo</label>
                        <input 
                        type="file" 
                        className="form-control shadow-none" 
                        id="photo" 
                        name="photo" 

                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </div>
            </div>
            </form>
        </div>
        </div>

            {/* <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 bg-light">
                <div className="form_div bg-white px-5 py-4 shadow-sm">
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-center">Seller Registration</h3>
                        <hr className="mx-auto" />
                        <div className="container">
                        <div className="mb-3 mt-4">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                id="username"
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
                                placeholder="Enter Your Email"
                                id="email"
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
                                placeholder="Enter Your Mobile number"
                                id="phone"
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
                                type={visible ? "text" : "password"}
                                placeholder="Enter Your Password"
                                id="password"
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
                            <label className="mb-1" htmlFor="image">Upload Profile Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
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
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    )
}