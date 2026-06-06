import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user") || "null"
    );

    const [emailError, setEmailError] = useState("");

    const [formData, setFormData] = useState({
        fullName: user?.fullName || "",
        email: user?.email || "",
        phone: "",
        travelDate: "",
        travelers: "",
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

    const handleSubmit = async () => {
        if (!user) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phoneRegex =
            /^[0-9]{10}$/;

        if (
            !formData.fullName ||
            !formData.email ||
            !formData.phone ||
            !formData.travelDate ||
            !formData.travelers
        ) {
            alert("Please fill all fields");
            return;
        }

        if (formData.fullName.trim().length < 3) {
            alert(
                "Name must be at least 3 characters"
            );
            return;
        }

        if (!emailRegex.test(formData.email)) {
            alert(
                "Please enter a valid email address"
            );
            return;
        }

        if (!phoneRegex.test(formData.phone)) {
            alert(
                "Phone number must be exactly 10 digits"
            );
            return;
        }

        const selectedDate = new Date(
            formData.travelDate
        );

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert(
                "Travel date cannot be before today"
            );
            return;
        }

        if (Number(formData.travelers) < 1) {
            alert(
                "Number of travelers must be at least 1"
            );
            return;
        }

        try {
            await axios.post(
                "http://localhost:8080/api/bookings",
                {
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    travelDate: formData.travelDate,
                    travelers: Number(
                        formData.travelers
                    ),
                }
            );

            alert("Booking Successful!");
            navigate("/success");

        } catch (error) {
            alert("Booking Failed!");
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
                    width: "450px",
                    background: "white",
                    padding: "40px",
                    borderRadius: "15px",
                    boxShadow:
                        "0px 4px 15px rgba(0,0,0,0.15)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "25px",
                    }}
                >
                    Book Tour
                </h1>

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
                    value={formData.email}
                    readOnly
                    style={{
                        ...inputStyle,
                        backgroundColor: "#eee",
                        cursor: "not-allowed",
                    }}
                />

                {emailError && (
                    <p
                        style={{
                            color: "red",
                            marginTop: "-10px",
                            marginBottom: "10px",
                            fontSize: "14px",
                        }}
                    >
                        {emailError}
                    </p>
                )}

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    type="date"
                    min={
                        new Date()
                            .toISOString()
                            .split("T")[0]
                    }
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    type="number"
                    min="1"
                    name="travelers"
                    placeholder="Number of Travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <button
                    style={buttonStyle}
                    onClick={handleSubmit}
                >
                    Confirm Booking
                </button>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    boxSizing: "border-box" as const,
};

const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#00b4ff",
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
};

export default Booking;