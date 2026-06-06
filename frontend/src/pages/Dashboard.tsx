import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user") || "null"
    );


    const [bookings, setBookings] =
        useState<any[]>([]);

    useEffect(() => {

        if (!user) {

            navigate("/login");
            return;
        }

        if (user.role === "ADMIN") {

            navigate("/admin");
            return;
        }

        fetchBookings();

    }, [navigate]);

    const fetchBookings = async () => {

        try {

            const response =
                await axios.get(
                    `http://localhost:8080/api/bookings/email/${user.email}`
                );

            setBookings(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const deleteBooking = async (
        id: number
    ) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to cancel this booking?"
            );

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `http://localhost:8080/api/bookings/${id}`
            );

            alert(
                "Booking Cancelled Successfully"
            );

            fetchBookings();

        } catch (error) {

            console.log(error);

            alert(
                "Failed to Cancel Booking"
            );
        }
    };



    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "50px",
                background: "#f5f5f5",
            }}
        >
            <h1>
                Welcome, {user?.fullName}
            </h1>

            <h2
                style={{
                    marginTop: "40px",
                    marginBottom: "20px",
                }}
            >
                My Bookings
            </h2>

            {bookings.length === 0 ? (

                <p>No bookings found.</p>

            ) : (

                <table
                    style={{
                        width: "100%",
                        background: "white",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr>
                            <th style={thStyle}>ID</th>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Phone</th>
                            <th style={thStyle}>Travel Date</th>
                            <th style={thStyle}>Travelers</th>
                            <th style={thStyle}>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {bookings.map((booking) => (

                            <tr key={booking.id}>

                                <td style={tdStyle}>
                                    {booking.id}
                                </td>

                                <td style={tdStyle}>
                                    {booking.fullName}
                                </td>

                                <td style={tdStyle}>
                                    {booking.phone}
                                </td>

                                <td style={tdStyle}>
                                    {booking.travelDate}
                                </td>

                                <td style={tdStyle}>
                                    {booking.travelers}
                                </td>

                                <td style={tdStyle}>

                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/edit-booking/${booking.id}`
                                            )
                                        }
                                        style={{
                                            background: "orange",
                                            color: "white",
                                            border: "none",
                                            padding: "8px 12px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            marginRight: "10px",
                                        }}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteBooking(
                                                booking.id
                                            )
                                        }
                                        style={{
                                            background: "red",
                                            color: "white",
                                            border: "none",
                                            padding: "8px 12px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Cancel
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>
                </table>

            )}

        </div>
    );
}

const thStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    background: "#00b4ff",
    color: "white",
};

const tdStyle = {
    border: "1px solid #ddd",
    padding: "12px",
};

export default Dashboard;