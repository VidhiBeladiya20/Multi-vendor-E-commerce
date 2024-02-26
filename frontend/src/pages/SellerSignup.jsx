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
                <div className="mt-3 text-center" style={{
                    fontSize: "17px", fontWeight: "550",
                    textAlign: "center"
                }} >Personal Details</div><hr className="mx-auto" />
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
                        <div className="mt-3" style={{
                            fontSize: "17px", fontWeight: "550",
                            textAlign: "center"
                        }}>Company Details</div><hr className="mx-auto" />
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
                                    <span className="details">Years/Months in Business</span>
                                    <input
                                        type="number"
                                        step="any"
                                        max={Infinity}
                                        placeholder="Number of Years/Months"
                                        id="annualTurnover"
                                        name="annualTurnover"
                                        value={formData.years}
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
                                <div className="input-box">
                                    <span className="details">Breif Description</span>
                                   <textarea name="desc" id="desc" cols="90" rows="3" placeholder="Product/Service Breif Description"></textarea>
                                </div>
                            </div>
                            <div className="company-type">
                                <input type="radio"
                                    id="dot-1"
                                    name="getType"
                                    value="I Manufacture Them"
                                    checked={formData.getProducts === 'I Manufacture Them'}
                                    onChange={handleInput}
                                    required
                                />
                                <input type="radio"
                                    name="getType"
                                    id="dot-2"
                                    value="I Import Them"
                                    checked={formData.getProducts === 'I Import Them'}
                                    onChange={handleInput}
                                    required
                                />
                                <input type="radio"
                                    name="getType"
                                    id="dot-3"
                                    value="I Resell Products That I Buy"
                                    checked={formData.getProducts === 'I Resell Products That I Buy'}
                                    onChange={handleInput}
                                    required
                                />
                                <span className="details">Where do you get products from?</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <span className="dot one" />I Manufacture Them <br />
                                    </label>
                                    <label htmlFor="dot-2">
                                        <span className="dot two" />I Import Them <br />
                                    </label>
                                    <label htmlFor="dot-3">
                                        <span className="dot three" />I Resell Products That I Buy
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="button text-center">
                            <input type="submit" defaultValue="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
