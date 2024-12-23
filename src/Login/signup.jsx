import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: users.length + 11,
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };

    // Add the new user to the local storage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign up successful! Redirecting to homepage...");
    navigate("/homepage"); // Redirect to homepage
  };

  return (
    <div className="card">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div style={{ textAlign: "left" }}>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="John Doe"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          <br />

          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="johndoe@example.com"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          <br />

          <label>Phone number</label>
          <br />
          <input
            type="text"
            placeholder="01XXXXXXXXX"
            id="number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^01[0-9]{9}$/,
                message: "Invalid phone number format",
              },
            })}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
          <br />

          <label>Password</label>
          <br />
          <input
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
        <button type="submit" style={{ marginTop: 12 }}>
          Submit
        </button>
      </form>

      <hr />

      <Link to="/login">Registered user? Log in!</Link>
      <Link to="/homepage" style={{ color: "grey" }}>
        or continue as guest
      </Link>
    </div>
  );
}

export default SignUp;
