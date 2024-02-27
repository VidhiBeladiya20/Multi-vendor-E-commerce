import "../../../public/assets/css/admin.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import  Request  from "./Request";
import Customer from "./Customer";
import Seller from "./Seller";

export const Admin = () => {

  const [customers, setCustomers] = useState(false);
  const [sellers, setSellers] = useState(false);
  const [requests, setRequests] = useState(false);

  const handleCustomers = async (e) => {
    setCustomers(true);
    setSellers(false);
    setRequests(false);
  }
  const handleSellers = async (e) => {
    setSellers(true);
    setCustomers(false);
    setRequests(false);
  }
  const handleRequests = async (e) => {
    setRequests(true);
    setSellers(false);
    setCustomers(false);
  }

  function handleClick(e) {
    
  }

  return (
    <>
      <div className="container-fluid text-light p-3 d-flex align-items-center justify-content-between sticky-top">
        <h3 className="mb-0 h-font text-white">E-Shop</h3>
        <a href="#" className="btn btn-light btn-sm p-1">Logout</a>
      </div>

      <div className="mainDiv col-lg-2 border-top border-3 border-secondary" id="dashboard-menu">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid flex-lg-column align-items-stretch">
            {/* <h4 className="mt-4 text-light">Admin Panel</h4> */}
            <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#adminDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-column align-items-stretch mt-2" id="adminDropdown">
              <ul className="nav flex-column">
                <li className="nav-item pt-4">
                  <NavLink className="nav-link text-white links" to="/admin">Dashboard</NavLink>
                </li>
                <li className="nav-item pt-4">
                  <NavLink className="nav-link text-white links" to="/admin" onClick={handleCustomers}>Customers</NavLink>
                </li>
                <li className="nav-item pt-4">
                  <NavLink className="nav-link text-white links" to="/admin" onClick={handleSellers}>Sellers</NavLink>
                </li>
                <li className="nav-item pt-4">
                  <NavLink className="nav-link text-white links" to="/admin" onClick={handleRequests}>Requests</NavLink>
                </li>
                <li className="nav-item pt-4">
                  <NavLink className="nav-link text-white links" to="/admin">Commission</NavLink>
                </li>
                <li className="nav-item pt-4">
                  <NavLink className="nav-link text-white links" to="/admin">Sellers Queries</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid" id="main-content">
        <div className="row">
          <div className="col-lg-10 ms-auto p-4 overflow-hidden">
            {customers ?
              (<Customer />)
              :
              (
                <></>)
            }
            {sellers ?
              (<Seller />)
              :
              (<></>)
            }
            {requests ?
              (<Request />)
              :
              (<></>)
            }



          </div>
        </div>
      </div>















      {/* <div className="container-fluid" id="main-content">
        <div className="row">
          <div className="col-lg-10 ms-auto p-4 overflow-hidden">
    
            <h3 className="mb-4">DASHBOARD</h3>
            <div className="row mb-4">
              <div className="col-md-4 mb-4 px-4">
                <a href="#" className="text-decoration-none">
                  <div className="card text-center p-3 text-success shadow">
                    <h6 className="mt-1">New Bookings</h6>
                    <h1 className="mt-2 mb-0"></h1>
                  </div>
                </a>
              </div>
              <div className="col-md-4 mb-4 px-4">
                <a href="#" className="text-decoration-none">
                  <div className="card text-center p-3 text-info shadow">
                    <h6 className="mt-1">User Queries</h6>
                    <h1 className="mt-2 mb-0"></h1>
                  </div>
                </a>
              </div>
              <div className="col-md-4 mb-4 px-4">
                <a href="#" className="text-decoration-none">
                  <div className="card text-center p-3 text-primary shadow">
                    <h6 className="mt-1">Rating & Review</h6>
                    <h1 className="mt-2 mb-0"></h1>
                  </div>
                </a>
              </div>
            </div>
    
            <h5 className="mb-3 ms-2">Booking Analytics</h5>
            <div className="row mb-3">
              <div className="col-md-4 mb-4 px-4">
                <div className="card text-center p-3 text-primary shadow">
                  <h6 className="mt-1">Total Bookings</h6>
                  <h1 className="mt-2 mb-0"></h1>
                  <h4 className="mt-2 mb-0"></h4>
                </div>
              </div>
              <div className="col-md-4 mb-4 px-4">
                <div className="card text-center p-3 text-success shadow">
                  <h6 className="mt-1">Active Bookings</h6>
                  <h1 className="mt-2 mb-0"></h1>
                  <h4 className="mt-2 mb-0"></h4>
                </div>
              </div>
              <div className="col-md-4 mb-4 px-4">
                <div className="card text-center p-3 text-danger shadow">
                  <h6 className="mt-1">Cancelled Bookings</h6>
                  <h1 className="mt-2 mb-0"></h1>
                  <h4 className="mt-2 mb-0"></h4>
                </div>
              </div>
            </div>
    
            <h5 className="mb-3 ms-2">Users, Queries, Reviews Analytics</h5>
            <div className="row mb-3">
              <div className="col-md-4 mb-4 px-4">
                <div className="card text-center p-3 text-success shadow">
                  <h6 className="mt-1">Registrations</h6>
                  <h1 className="mt-2 mb-0"></h1>
                </div>
              </div>
              <div className="col-md-4 mb-4 px-4">
                <div className="card text-center p-3 text-info shadow">
                  <h6 className="mt-1">Queries</h6>
                  <h1 className="mt-2 mb-0"></h1>
                </div>
              </div>
              <div className="col-md-4 mb-4 px-4">
                <div className="card text-center p-3 text-primary shadow">
                  <h6 className="mt-1">Reviews</h6>
                  <h1 className="mt-2 mb-0"></h1>
                </div>
              </div>
            </div>
    
            <h5 className="mb-3 ms-2">Users</h5>
            <div className="row mb-3 px-2">
              <div className="col-md-3 mb-4 ps-3">
                <div className="card text-center p-3 text-info shadow">
                  <h6 className="mt-1">Total</h6>
                  <h1 className="mt-2 mb-0"></h1>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card text-center p-3 text-success shadow">
                  <h6 className="mt-1">Active</h6>
                  <h1 className="mt-2 mb-0"></h1>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card text-center p-3 text-warning shadow">
                  <h6 className="mt-1">Inactive</h6>
                  <h1 className="mt-2 mb-0"></h1>
                </div>
              </div>
              <div className="col-md-3 mb-4 pe-3">
                <div className="card text-center p-3 text-danger shadow">
                  <h6 className="mt-1">Unverified</h6>
                  <h1 className="mt-2 mb-0"></h1>
                </div>
              </div>
            </div>
    
          </div>
        </div>
    </div> */}
    </>
  );
};