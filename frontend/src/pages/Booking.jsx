import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
    const navigate = useNavigate();

    const location = useLocation();

    const { tourName, amount } =
        location.state || {};

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
        tourName: tourName || "",
        amount: amount || 0,
        paymentMethod: "PHONEPE",
        paymentStatus: "PENDING",
        transactionId: "",
    });

    const handleChange = (e) => {
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

    const handlePayment = async () => {

        const transactionId =
            "TXN" +
            Date.now();

        alert(
            "PhonePe Payment Successful\nTransaction ID: " +
            transactionId
        );

        setFormData(prev => ({
            ...prev,
            paymentStatus: "PAID",
            transactionId: transactionId,
        }));

        setTimeout(() => {
            handleSubmit(
                transactionId
            );
        }, 500);
    };

    const handleSubmit = async (
        transactionId
    ) => {
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
                    tourName: formData.tourName,
                    amount:
                        formData.amount *
                        Number(formData.travelers),

                    paymentMethod: "ONLINE",
                    paymentStatus: "PAID",
                    transactionId:
                        transactionId
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

                <div
                    style={{
                        background: "#f5f5f5",
                        padding: "15px",
                        borderRadius: "10px",
                        marginBottom: "15px",
                    }}
                >
                    <h3>{formData.tourName}</h3>

                    <p>
                        Package Price: ₹{formData.amount}
                    </p>
                </div>

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

                <div
                    style={{
                        background: "#f5f5f5",
                        padding: "15px",
                        marginBottom: "15px",
                        borderRadius: "8px",
                    }}
                >
                    <h3>{formData.tourName}</h3>
                    <p>
                        Price: ₹{formData.amount * Number(formData.travelers || 1)}
                    </p>
                </div>

                <div
                    style={{
                        background: "#5f259f",
                        color: "white",
                        padding: "20px",
                        borderRadius: "12px",
                        marginBottom: "20px",
                    }}
                >
                    <h3>Payment Summary</h3>

                    <p>
                        Package:
                        {formData.tourName}
                    </p>

                    <p>
                        Amount: ₹{formData.amount * Number(formData.travelers || 1)}
                    </p>
                </div>

                <button
                    style={buttonStyle}
                    onClick={handlePayment}
                >
                    Pay ₹{formData.amount * Number(formData.travelers || 1)}
                </button>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    boxSizing: "border-box",
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