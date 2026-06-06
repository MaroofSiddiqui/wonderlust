import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }
  };

  const handleRegister = async () => {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Invalid email format");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    try {

      await axios.post(
        "http://localhost:8080/api/users/register",
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: "USER"
        }
      );

      alert("Registration Successful");

      navigate("/");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {

      alert("Registration Failed");
      console.log(error);

    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent
  ) => {

    if (e.key === "Enter") {

      handleRegister();

    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Create Account
        </h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        {emailError && (
          <p style={{ color: "red" }}>
            {emailError}
          </p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={inputStyle}
        />

        <button
          onClick={handleRegister}
          style={buttonStyle}
        >
          Register
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#00b4ff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Register;