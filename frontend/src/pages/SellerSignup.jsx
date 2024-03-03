import { useState } from "react";
import "../../public/assets/css/sellerForm.css"
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';

export const SellerSignup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [turnover, setTurnover] = useState('');
    const [years, setYears] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [method, setMethod] = useState('');

    const [otpSec, setOtpSec] = useState(false);

    const [otpData, setOtpData] = useState({
        email: '',
        sentOtp: '',
        userOtp: '',
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setOtpData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const formData = new FormData()
    formData.append('username', username);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('turnover', turnover);
    formData.append('years', years);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('pincode', pincode);
    formData.append('image', image);
    formData.append('desc', desc);
    formData.append('method', method);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch(`http://localhost:5000/admin/request`, {
                method: "POST",
                body: formData,
            });
            const res_data = await response.json();
            if (response.ok) {
                console.log(res_data);
                setOtpSec(true);
                setOtpData({ sentOtp: res_data.otp, email: email });
                console.log('Registration successfully');
                // storeTokenInLS(res_data.token);
                // navigate("/");
            } else if (response.status === 400) {
                const errorData = await response.json();
                console.log('rror from seller signup form :', errorData);
            } else {
                console.error('Server error:', response.status);
            }
        } catch (error) {
            console.log(`error from seller signup form ${error}`);
        }
    }

    const handleOtp = async (e) => {
        e.preventDefault();
        console.log(otpData);
        try {
            const response = await fetch(`http://localhost:5000/admin/otp`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(otpData),
            })

            if (response.ok) {
                const res_data = await response.json();
                console.log('otp done');
                navigate("/")
            }
            else {
                const errors = await response.json();
                console.log(errors);
                // if (response.status && errors) {
                //     setError(errors);
                //     console.log(error.extraDetails); //it contains error now
                // }
            }
        } catch (error) {
            console.log(`error from seller signup page in otpData section : ${error}`);
        }
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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        name="username"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input
                                        type="number"
                                        placeholder="Enter your Mobile no"
                                        name="phone"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input
                                        type="password"
                                        placeholder="Enter your Password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="off"
                                    />
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
                                        id="title"
                                        name="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        autoComplete="off"

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Category</span>
                                    <select onChange={(e) => setCategory(e.target.value)} value={category} id="category" name="category"
                                        style={{ width: "100%", height: "40px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc", paddingLeft: "15px", color: "#7c7373" }}>
                                        <option value="clothes">Clothes</option>
                                        <option value="shoes">Shoes</option>
                                        <option value="accessories">Accessories</option>

                                    </select>
                                </div>
                                <div className="input-box">
                                    <span className="details">Annual Turnover</span>
                                    <input
                                        type="number"
                                        step="any"
                                        max={Infinity}
                                        placeholder="Annual Turnover"
                                        id="turnover"
                                        name="turnover"
                                        value={turnover}
                                        onChange={(e) => setTurnover(e.target.value)}
                                        autoComplete="off"

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Years/Months in Business</span>
                                    <input
                                        type="number"
                                        step="any"
                                        max={Infinity}
                                        placeholder="Number of Years/Months"
                                        id="years"
                                        name="years"
                                        value={years}
                                        onChange={(e) => setYears(e.target.value)}
                                        autoComplete="off"

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Street Address</span>
                                    <input
                                        type="text"
                                        placeholder="Street Address"
                                        id="address"
                                        name="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        autoComplete="off"

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">City/Town</span>
                                    <input type="text"
                                        placeholder="City/Town"
                                        id="city"
                                        name="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        autoComplete="off"

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">State/Region</span>
                                    <input
                                        type="text"
                                        placeholder="State/Region"
                                        id="state"
                                        name="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        autoComplete="off"

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Country</span>
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        id="country"
                                        name="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        autoComplete="off"

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Zip/Postal Code</span>
                                    <input
                                        type="number"
                                        placeholder="Zip/Postal Code"
                                        id="pincode"
                                        name="pincode"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                        autoComplete="off"

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Upload Company Logo</span>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={(e) => setImage(e.target.files[0])}

                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Breif Description</span>
                                    <textarea name="desc" id="desc" cols="90" rows="3" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Product/Service Breif Description"></textarea>
                                </div>
                            </div>
                            <div className="company-type">
                                <input type="radio"
                                    id="dot-1"
                                    name="method"
                                    value="manufacture"
                                    checked={method === 'manufacture'}
                                    onChange={(e) => setMethod(e.target.value)}

                                />
                                <input type="radio"
                                    name="method"
                                    id="dot-2"
                                    value="import"
                                    checked={method === 'import'}
                                    onChange={(e) => setMethod(e.target.value)}

                                />
                                <input type="radio"
                                    name="method"
                                    id="dot-3"
                                    value="resell"
                                    checked={method === 'resell'}
                                    onChange={(e) => setMethod(e.target.value)}

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
                            {/* <input type="submit" defaultValue="Register" /> */}
                            <button className="btn d-block mx-auto" type="submit" name="signup" style={{ backgroundColor: "#1f7b6f", color: "white", width: "128px", margin: "18px 0px", height: "46px" }}>Submit</button>
                        </div>
                    </form>

                    {
                        otpSec ?
                            (
                                <>
                                    <form onSubmit={handleOtp}>
                                        <div className="form-group row mt-4">
                                            <div className="col-sm-2">
                                                <div className="signup-link text-center mt-1">Enter OTP</div>
                                            </div>
                                            <div className="col-sm-4">
                                                <input
                                                    type="number"
                                                    placeholder="Enter OTP"
                                                    id="userOtp"
                                                    name="userOtp"
                                                    value={otpData.userOtp}
                                                    onChange={handleInput}
                                                    autoComplete="off"
                                                    className="form-control shadow-none"
                                                    style={{ height: "42px", fontSize: "14px" }}
                                                />
                                            </div>
                                            <div className="col-sm-2">
                                            <button className="btn d-block mx-auto" type="submit" name="signup" style={{ backgroundColor: "#1f7b6f", color: "white", width: "100px", height: "36px" }}>Verify</button>
                                            </div>
                                            
                                        </div>
                                    </form>
                                </>
                            )
                            :
                            (<></>)
                    }
                </div>
            </div>
        </>
    )
}
