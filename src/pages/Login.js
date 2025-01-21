// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Login.css'; // Import the external CSS file

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/users");
//       const data = await response.json();

//       const user = data.find(
//         (user) => user.email === email && user.password === password
//       );

//       if (user) {
//         console.log("Login successful!");
//         navigate("/dashboard");
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error(err.message);
//       setError("Failed to login. Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-content">
//         <div className="login-form">
//           <h1>Login</h1>
//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="input-field"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="input-field"
//             />
//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>
//           {error && <p className="error-message">{error}</p>}
          
//           {/* Forgot Password Link */}
//           <p className="forgot-password">
//             <span
//               style={{ color: "blue", cursor: "pointer" }}
//               onClick={() => navigate("/forgot-password")}
//             >
//               Forgot Password?
//             </span>
//           </p>

//           <p>
//             Don't have an account?{" "}
//             <span
//               className="signup-link"
//               onClick={() => navigate("/")}
//             >
//               Signup
//             </span>
//           </p>
//         </div>
//         <div className="login-image">
//           <img
//             src="login.png"
//             alt="Login Illustration"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Import the external CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();

      const user = data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log("Login successful!");

        // Store login data in logindata endpoint
        const loginData = {
          email,
          loginTime: new Date().toISOString(),
        };

        await fetch("http://localhost:5000/logindata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        // Redirect to dashboard after login
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error(err.message);
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
          
          {/* Forgot Password Link */}
          <p className="forgot-password">
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
          </p>

          <p>
            Don't have an account?{" "}
            <span
              className="signup-link"
              onClick={() => navigate("/")}
            >
              Signup
            </span>
          </p>
        </div>
        <div className="login-image">
          <img
            src="login.png"
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
