// import React from 'react'
// import Navbar from '../navbar/Navbar'
// import ShowEmp from '../showEmp/ShowEmp'

// export default function Home() {
//     return (
//         <div>
//             <Navbar />
//             <ShowEmp />
//         </div>
//     )
// }
import React, { useContext } from "react";
import Navbar from "../navbar/Navbar"; // Navbar Component
import ShowEmp from "../showEmp/ShowEmp"; // Show Employee Component
import { myContext } from "../../../context/Mycontext"; // Context for user authentication
import { Link } from "react-router-dom";
import "./home.css"; // Import the CSS file

export default function Home() {
    const { user } = useContext(myContext); // Get user context

    return (
        <div className="home">
            {/* Navbar */}
            <Navbar className="home-navbar" />

            {/* Employee Management System Image with Overlay */}
            <div className="home-image-container">
                <div className="image-overlay"></div> 
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/3200/3200995.png" 
                    alt="Employee Management System"
                    className="home-image"
                />
            </div>

            {/* Welcome Text */}
            <div className="home-content">
                <h2>Welcome to Employee Management System</h2>

                {/* Show Employee Table Only If Logged In */}
                {user ? (
                    <div className="employee-section">
                        <ShowEmp />
                    </div>
                ) : (
                    <div className="text-center">
                        <h3>You must be logged in to view employees.</h3>
                        <Link to="/login" className="login-button">Login Here</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
