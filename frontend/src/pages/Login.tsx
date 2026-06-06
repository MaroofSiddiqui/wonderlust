import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [emailError, setEmailError] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

    const handleLogin = async () => {

        try {

            const response =
                await axios.post(
                    "http://localhost:8080/api/users/login",
                    formData
                );

            if (response.data) {

                alert("Login Successful");

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data)
                );

                navigate("/");
            } else {

                alert(
                    "Invalid Email or Password"
                );
            }

        } catch (error) {

            alert("Login Failed");
            console.log(error);

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
                    width: "400px",
                    background: "white",
                    padding: "40px",
                    borderRadius: "15px",
                    boxShadow:
                        "0 4px 15px rgba(0,0,0,0.15)",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                    }}
                >
                    Login
                </h2>

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

                <button
                    onClick={handleLogin}
                    style={buttonStyle}
                >
                    Login
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

export default Login;