import "../../public/assets/css/admin.css";
import { Link } from "react-router-dom";

export const Admin = () => {
    return(
    <>
    <div className="container-fluid bg-dark text-light p-3 d-flex align-items-center justify-content-between sticky-top">
        <h3 className="mb-0 h-font text-white">E-Shop</h3>  
        <a href="#" className="btn btn-light btn-sm pt-2">LOG OUT</a>
    </div>   

    <div className="col-lg-2 bg-dark border-top border-3 border-secondary" id="dashboard-menu">
     <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid flex-lg-column align-items-stretch">
        <h4 className="mt-2 text-light">ADMIN PANEL</h4>
        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#adminDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-column align-items-stretch mt-2" id="adminDropdown">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white active" to="/admin" >Dashboard</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="users.php">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="user_queries.php">User Queries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="rate_review.php">Sellers</a>
            </li>
             <li className="nav-item">
              <a className="nav-link text-white" href="settings.php">Commission</a>
            </li> 
          </ul>
        </div>
      </div>
     </nav>
    </div>

    <div className="container-fluid" id="main-content">
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
    </div>
    </>
    );
};