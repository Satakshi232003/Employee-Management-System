// // import { useContext, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./login.css";
// // import { loginUser } from "../services/authentication";
// // // import context from "react-bootstrap/esm/AccordionContext";
// // import { myContext } from "../../../context/Mycontext";

// // export default function Login() {
// //     const { user, setUser } = useContext(myContext);
// //     const [email, setEmail] = useState();
// //     const [password, setPassword] = useState();
// //     const navigate = useNavigate();
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const res = await loginUser(email, password);
// //             setUser(res);
// //             if (user) navigate("/");
// //         } catch (err) {
// //             console.log(err);
// //         }
// //     };

// //     return (
// //         <div className="login">
// //             <div className="nav-header">
// //                 <Link to="/">
// //                     <img
// //                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
// //                         className="header-logo"
// //                         alt="LeftOver"
// //                     />
// //                 </Link>
// //             </div>
// //             <div className="login-cont">
// //                 <div className="container d-flex justify-content-center align-items-center mt-2">
// //                     <form
// //                         className="login-form p-1 rounded-2 h-50"
// //                         id="loginForm"
// //                         onSubmit={handleSubmit}
// //                     >
// //                         <h2 className="text-center fw-bold">Welcome to EMS</h2>
// //                         <div className="mb-3">
// //                             <label htmlFor="exampleInputEmail1" className="form-label">
// //                                 Email address
// //                             </label>
// //                             <input
// //                                 type="email"
// //                                 className="form-control"
// //                                 id="email"
// //                                 aria-describedby="emailHelp"
// //                                 name="email"
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="mb-3">
// //                             <label htmlFor="exampleInputPassword1" className="form-label">
// //                                 Password
// //                             </label>
// //                             <input
// //                                 type="password"
// //                                 className="form-control"
// //                                 name="password"
// //                                 id="password"
// //                                 onChange={(e) => setPassword(e.target.value)}
// //                             />
// //                         </div>
// //                         <div className="submit-btn-cont d-flex flex-column justify-content-center align-items-center">
// //                             <button type="submit" className="btn btn-primary w-50">
// //                                 Submit
// //                             </button>
// //                             <p className="register-cont1 mt-3">
// //                                 {" Don't have an account?"}
// //                                 <Link to="/register">Register</Link>
// //                             </p>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }
// import { useContext, useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./login.css";
// import { loginUser } from "../services/authentication";
// import { myContext } from "../../../context/Mycontext";
// import Navbar from "../navbar/Navbar";  // Import Navbar

// export default function Login() {
//     const { user, setUser } = useContext(myContext);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     // If user is already logged in, redirect to Show Employees page
//     useEffect(() => {
//         if (user) navigate("/showEmp");
//     }, [user, navigate]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await loginUser(email, password); // Log in user
//             if (res) {
//                 setUser(res); // Store user session
//                 navigate("/showEmp"); // Redirect to Show Employee table
//             } else {
//                 alert("Invalid credentials! Please check your email and password.");
//             }
//         } catch (err) {
//             console.log("Login Error:", err);
//         }
//     };

//     return (
//         <div>
//             <Navbar /> {/* Show Navbar */}
//             <div className="login">
//                 <div className="nav-header">
//                     <Link to="/">
//                         <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
//                             className="header-logo"
//                             alt="EMS Logo"
//                         />
//                     </Link>
//                 </div>
//                 <div className="login-cont">
//                     <div className="container d-flex justify-content-center align-items-center mt-2">
//                         <form
//                             className="login-form p-1 rounded-2 h-50"
//                             id="loginForm"
//                             onSubmit={handleSubmit}
//                         >
//                             <h2 className="text-center fw-bold">Welcome to EMS</h2>
//                             <div className="mb-3">
//                                 <label htmlFor="email" className="form-label">Email address</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="email"
//                                     name="email"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="password" className="form-label">Password</label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     id="password"
//                                     name="password"
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="submit-btn-cont d-flex flex-column justify-content-center align-items-center">
//                                 <button type="submit" className="btn btn-primary w-50">
//                                     Login
//                                 </button>
//                                 <p className="register-cont1 mt-3">
//                                     {"Don't have an account? "}
//                                     <Link to="/register">Register</Link>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { loginUser } from "../services/authentication";
import { myContext } from "../../../context/Mycontext";
import Navbar from "../navbar/Navbar"; // Import Navbar

export default function Login() {
    const { user, setUser } = useContext(myContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Handle login loading state
    const navigate = useNavigate();

    // Redirect logged-in users to Home where ShowEmp will appear if logged in
    useEffect(() => {
        if (user) navigate("/");
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await loginUser(email, password); // Attempt login
            if (res) {
                setUser(res); // Store user session
                navigate("/"); // Redirect to Home
            } else {
                alert("Invalid credentials! Please check your email and password.");
            }
        } catch (err) {
            console.error("Login Error:", err);
            alert("Something went wrong! Please try again.");
        }
        setLoading(false);
    };

    return (
        <div>
            <Navbar /> {/* Show Navbar */}
            <div className="login">
                <div className="nav-header">
                    <Link to="/">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
                            className="header-logo"
                            alt="EMS Logo"
                        />
                    </Link>
                </div>
                <div className="login-cont">
                    <div className="container d-flex justify-content-center align-items-center mt-2">
                        <form
                            className="login-form p-1 rounded-2 h-50"
                            id="loginForm"
                            onSubmit={handleSubmit}
                        >
                            <h2 className="text-center fw-bold">Welcome to EMS</h2>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="submit-btn-cont d-flex flex-column justify-content-center align-items-center">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-50" 
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                                <p className="register-cont1 mt-3">
                                    {"Don't have an account? "}
                                    <Link to="/register">Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
