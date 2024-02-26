import { useState } from "react";
import "../../public/assets/css/sellerForm.css"
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';

export const SellerSignup = () => {

    const [formData, setFormData] = useState({
        sellerName: '',
        category: '',
        annualTurnover: '',
        getProducts: '',
        streetAddress: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        businessTitle: '',
        companyName: '',
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
    }

    return (
        <>
        

            <div className="container mt-3 mb-3" style={{ maxWidth: "750px", width: "100%", backgroundColor: "#fff", padding: "25px 30px", borderRadius: "5px", boxShadow: "0 5px 10px rgba(0,0,0,0.15)" }}>
                <div className="title">Registration</div>
                <div className="mt-3 text-center" style={{ fontSize: "17px",fontWeight: "550",
textAlign: "center" }} >Personal Details</div><hr  className="mx-auto"/>
                <div className="content">
                    <form action="#">
                        <div>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        name="sellerName"
                                        id="sellerName"
                                        value={formData.name}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input
                                        type="number"
                                        placeholder="Enter your Mobile no"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input
                                        type="password"
                                        placeholder="Enter your Password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3" style={{ fontSize: "17px",fontWeight: "550",
textAlign: "center"}}>Company Details</div><hr className="mx-auto"/>
                        <div>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Company Name</span>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Category</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your Category"
                                        name="category"
                                        id="category"
                                        value={formData.category}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Annual Turnover</span>
                                    <input
                                        type="number"
                                        step="any"
                                        max={Infinity}
                                        placeholder="Annual Turnover"
                                        id="annualTurnover"
                                        name="annualTurnover"
                                        value={formData.annualTurnover}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Street Address</span>
                                    <input
                                        type="text"
                                        placeholder="Street Address"
                                        id="streetAddress"
                                        name="streetAddress"
                                        value={formData.address}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">City/Town</span>
                                    <input type="text"
                                        placeholder="City/Town"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">State/Region</span>
                                    <input
                                        type="text"
                                        placeholder="State/Region"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Country</span>
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Zip/Postal Code</span>
                                    <input
                                        type="number"
                                        placeholder="Zip/Postal Code"
                                        id="zipCode"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Upload Company Logo</span>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" />
                            <input type="radio" name="gender" id="dot-2" />
                            <input type="radio" name="gender" id="dot-3" />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one" />
                                    <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two" />
                                    <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three" />
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div className="button text-center">
                            <input type="submit" defaultValue="Register" />
                        </div>
                    </form>
                </div>
            </div>



            {/* <div classNameName="bg-light">
                <div classNameName="container mx-auto">
                    <center><h2 classNameName="pt-5">Seller Registration</h2></center>
                    <center><hr /></center>
                    <form onSubmit={handleSubmit}>

                        <div classNameName="row">
                            <div classNameName="col-lg-4 part">
                                <div classNameName="mb-3">
                                    <label htmlFor="sellerName" classNameName="form-label">Seller Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        classNameName="form-control shadow-none"
                                        id="sellerName"
                                        name="sellerName"
                                        value={formData.name}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="category" classNameName="form-label">Category</label>
                                    <input
                                        type="text"
                                        placeholder="Category"
                                        classNameName="form-control shadow-none"
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="annualTurnover" classNameName="form-label">Annual Turnover</label>
                                    <input
                                        type="number"
                                        step="any"
                                        max={Infinity}
                                        placeholder="Annual Turnover"
                                        classNameName="form-control shadow-none"
                                        id="annualTurnover"
                                        name="annualTurnover"
                                        value={formData.annualTurnover}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="products" classNameName="form-label products">Where do you get products from?</label><br />
                                    <input
                                        type="radio"
                                        classNameName="radio"
                                        id="option1"
                                        name="getProducts"
                                        value="I Manufacture Them"
                                        checked={formData.getProducts === 'I Manufacture Them'}
                                        onChange={handleInput}
                                        required
                                    /> I Manufacture Them <br />
                                    <input
                                        type="radio"
                                        classNameName="radio"
                                        id="option2"
                                        name="getProducts"
                                        value="I Import Them"
                                        checked={formData.getProducts === 'I Import Them'}
                                        onChange={handleInput}
                                        required
                                    /> I Import Them <br />
                                    <input
                                        type="radio"
                                        classNameName="radio"
                                        id="option3"
                                        name="getProducts"
                                        value="I Resell Products That I Buy"
                                        checked={formData.getProducts === 'I Resell Products That I Buy'}
                                        onChange={handleInput}
                                        required
                                    /> I Resell Products That I Buy
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="streetAddress" classNameName="form-label">Street Address</label>
                                    <input
                                        type="text"
                                        placeholder="Street Address"
                                        classNameName="form-control shadow-none"
                                        id="streetAddress"
                                        name="streetAddress"
                                        value={formData.address}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="city" classNameName="form-label">City/Town</label>
                                    <input type="text"
                                        placeholder="City/Town"
                                        classNameName="form-control shadow-none"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="state" classNameName="form-label">State/Region</label>
                                    <input
                                        type="text"
                                        placeholder="State/Region"
                                        classNameName="form-control shadow-none"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            </div>
                            <div classNameName="col-lg-4 part">
                                <div classNameName="mb-3">
                                    <label htmlFor="country" classNameName="form-label">Country</label>
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        classNameName="form-control shadow-none"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="postalCode" classNameName="form-label">Zip/Postal Code</label>
                                    <input
                                        type="number"
                                        placeholder="Zip/Postal Code"
                                        classNameName="form-control shadow-none"
                                        id="zipCode"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="businessTitle" classNameName="form-label">Business Title</label>
                                    <input
                                        type="text"
                                        placeholder="Business Title"
                                        classNameName="form-control shadow-none"
                                        id="businessTitle"
                                        name="businessTitle"
                                        value={formData.businessTitle}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="companyName" classNameName="form-label">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        classNameName="form-control shadow-none"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="email" classNameName="form-label">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        classNameName="form-control shadow-none"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="phoneNumber" classNameName="form-label">Mobile Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter Mobile Number"
                                        classNameName="form-control shadow-none"
                                        id="phoneNumber"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="password" classNameName="form-label">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter Your Password"
                                        classNameName="form-control shadow-none"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInput}
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <div classNameName="mb-3">
                                    <label htmlFor="image" classNameName="form-label">Upload Image</label>
                                    <input
                                        type="file"
                                        classNameName="form-control shadow-none"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                <button type="submit" classNameName="btn btn-primary shadow-none">Submit</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    )
}
