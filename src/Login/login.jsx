import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const apiUsers = await response.json();
      const signedUpUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check API users with password "0000"
      const user =
        apiUsers.find(
          (u) => u.email === data.email && data.password === "0000"
        ) ||
        signedUpUsers.find(
          (u) => u.email === data.email && u.password === data.password
        );

      if (user) {
        alert(`Welcome back, ${user.name}!`);
        localStorage.setItem("loggedInUser", JSON.stringify(user)); 
        navigate(`/homepage`);
      } else {
        setLoginError(true); // Show error if login fails
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <form className="form-group" onSubmit={handleSubmit(handleLogin)}>
          <h3 id="logInTitle">Login</h3>
          <div style={{ textAlign: "left" }}>
            <label>Email</label>
            <br />
            <input
              className="form-control logIn"
              type="email"
              placeholder="johndoe@gmail.com"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            <br />

            <label>Password</label>
            <br />
            <input
              className="form-control logIn"
              type="password"
              placeholder="Enter your password"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
            <br />
          </div>
          {loginError && (
            <p style={{ color: "red" }}>
              Username or password are incorrect. Please try again or sign up.
            </p>
          )}
          <button type="submit" style={{ marginTop: 12 }}>
            Submit
          </button>
        </form>

        <hr />

        <Link to="/signup">New user? Sign up!</Link>
        <Link to="/homepage" style={{ color: "black" }}>
          or continue as guest
        </Link>
      </div>
    </div>
  );
}

export default Login;
