import { useState } from "react";
import "../../public/assets/css/sellerForm.css";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
        // try {
        //     const response = await fetch(`http://localhost:5000/user/register`, {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });
        //     console.log(response);
        //     if (response.ok) {
        //         console.log('Registration successful');
        //     } else if (response.status === 422) {
        //         const errorData = await response.json();
        //         console.log('Validation errors:', errorData);
        //     } else {
        //         console.error('Server error:', response.status);
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }

    return (
        <>
        <div className="bg-light">
        <div className="container">
            <center><h2 className="pt-5">Seller Registration</h2></center>
            <center><hr /></center>
            <form onSubmit={handleSubmit}>

            <div className="row">
                <div className="col-lg-6 part">
                    <div className="mb-3">
                        <label htmlFor="sellerName" className="form-label">Seller Name</label>
                        <input 
                        type="text" 
                        placeholder="Enter Your Name"
                        className="form-control shadow-none" 
                        id="sellerName" 
                        name="sellerName" 
                        value={formData.name}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input 
                        type="text" 
                        placeholder="Category"
                        className="form-control shadow-none" 
                        id="category" 
                        name="category" 
                        value={formData.category}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="annualTurnover" className="form-label">Annual Turnover</label>
                        <input 
                        type="number" 
                        step="any"
                        max={Infinity}
                        placeholder="Annual Turnover"
                        className="form-control shadow-none" 
                        id="annualTurnover" 
                        name="annualTurnover" 
                        value={formData.annualTurnover}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="products" className="form-label products">Where do you get products from?</label><br />
                        <input 
                        type="radio" 
                        className="radio" 
                        id="option1" 
                        name="getProducts" 
                        value= "I Manufacture Them"
                        checked= {formData.getProducts === 'I Manufacture Them'}
                        onChange={handleInput}
                        required
                        /> I Manufacture Them <br />
                        <input 
                        type="radio" 
                        className="radio" 
                        id="option2" 
                        name="getProducts" 
                        value="I Import Them"
                        checked= {formData.getProducts === 'I Import Them'}
                        onChange={handleInput}
                        required
                        /> I Import Them <br />
                        <input 
                        type="radio" 
                        className="radio" 
                        id="option3" 
                        name="getProducts" 
                        value="I Resell Products That I Buy"
                        checked= {formData.getProducts === 'I Resell Products That I Buy'}
                        onChange={handleInput}
                        required
                        /> I Resell Products That I Buy
                    </div>
                    <div className="mb-3">
                        <label htmlFor="streetAddress" className="form-label">Street Address</label>
                        <input 
                        type="text" 
                        placeholder="Street Address"
                        className="form-control shadow-none" 
                        id="streetAddress" 
                        name="streetAddress" 
                        value={formData.address}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City/Town</label>
                        <input type="text" 
                        placeholder="City/Town"
                        className="form-control shadow-none" 
                        id="city" 
                        name="city" 
                        value={formData.city}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="state" className="form-label">State/Region</label>
                        <input 
                        type="text" 
                        placeholder="State/Region"
                        className="form-control shadow-none" 
                        id="state" 
                        name="state" 
                        value={formData.state}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                </div>
                <div className="col-lg-6 part">
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input 
                        type="text" 
                        placeholder="Country"
                        className="form-control shadow-none" 
                        id="country" 
                        name="country" 
                        value={formData.country}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="postalCode" className="form-label">Zip/Postal Code</label>
                        <input 
                        type="number" 
                        placeholder="Zip/Postal Code"
                        className="form-control shadow-none" 
                        id="zipCode" 
                        name="zipCode" 
                        value={formData.zipCode}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="businessTitle" className="form-label">Business Title</label>
                        <input 
                        type="text" 
                        placeholder="Business Title"
                        className="form-control shadow-none" 
                        id="businessTitle" 
                        name="businessTitle" 
                        value={formData.businessTitle}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="companyName" className="form-label">Company Name</label>
                        <input 
                        type="text" 
                        placeholder="Company Name"
                        className="form-control shadow-none" 
                        id="companyName" 
                        name="companyName" 
                        value={formData.companyName}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                        type="email" 
                        placeholder="Enter Your Email"
                        className="form-control shadow-none" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Mobile Number</label>
                        <input 
                        type="tel" 
                        placeholder="Enter Mobile Number"
                        className="form-control shadow-none" 
                        id="phoneNumber" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                        type="password" 
                        placeholder="Enter Your Password"
                        className="form-control shadow-none" 
                        id="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handleInput}
                        autoComplete="off"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Upload Image</label>
                        <input 
                        type="file" 
                        className="form-control shadow-none" 
                        id="image" 
                        name="image" 
                        accept="image/*"
                        onChange={handleInput}
                        required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary shadow-none">Submit</button>

                </div>
            </div>
            </form>
        </div>
        </div>
        </>
    )
}