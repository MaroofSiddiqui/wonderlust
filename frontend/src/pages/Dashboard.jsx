import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user") || "null"
    );


    const [bookings, setBookings] =
        useState([]);

    const [wishlistTours, setWishlistTours] =
        useState([]);

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
        fetchWishlist();

    }, [navigate]);

    const fetchWishlist = async () => {

        try {

            const wishlistIds = JSON.parse(
                localStorage.getItem("wishlist") || "[]"
            );

            const response = await axios.get(
                "http://localhost:8080/api/tours"
            );

            const savedTours =
                response.data.filter((tour) =>
                    wishlistIds.includes(tour.id)
                );

            setWishlistTours(savedTours);

        } catch (error) {

            console.log(error);

        }

    };

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
        id
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

    const totalBookings = bookings.length;

    const totalTravelers = bookings.reduce(
        (sum, booking) => sum + booking.travelers,
        0
    );

    const upcomingTrips = bookings.filter(
        (booking) =>
            new Date(booking.travelDate) >= new Date()
    ).length;

    const nextTrip =
        bookings.length > 0
            ? bookings[0].travelDate
            : "N/A";

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "50px",
                background: "#f5f5f5",
            }}
        >
            <h1>
                Welcome Back, {user?.fullName}
            </h1>

            <p>
                Role: {user?.role}
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                    marginTop: "30px",
                    marginBottom: "40px",
                }}
            >
                <div style={cardStyle}>
                    <h3>Total Bookings</h3>
                    <h1>{totalBookings}</h1>
                </div>

                <div style={cardStyle}>
                    <h3>Upcoming Trips</h3>
                    <h1>{upcomingTrips}</h1>
                </div>

                <div style={cardStyle}>
                    <h3>Total Travelers</h3>
                    <h1>{totalTravelers}</h1>
                </div>

                <div style={cardStyle}>
                    <h3>Next Trip</h3>
                    <h2>{nextTrip}</h2>
                </div>
            </div>

            <h2
                style={{
                    marginTop: "40px",
                    marginBottom: "20px",
                }}
            >
                ❤️ My Wishlist
            </h2>

            {wishlistTours.length === 0 ? (

                <p>No saved tours.</p>

            ) : (

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(3, 1fr)",
                        gap: "20px",
                        marginBottom: "40px",
                    }}
                >

                    {wishlistTours.map((tour) => (

                        <div
                            key={tour.id}
                            style={{
                                background: "white",
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,0.08)",
                            }}
                        >

                            <img
                                src={tour.image}
                                alt={tour.title}
                                style={{
                                    width: "100%",
                                    height: "220px",
                                    objectFit: "cover",
                                }}
                            />

                            <div
                                style={{
                                    padding: "15px",
                                }}
                            >

                                <h3>{tour.title}</h3>

                                <p>
                                    📍 {tour.location}
                                </p>

                                <h3>
                                    ₹{tour.price}
                                </h3>

                                <button
                                    onClick={() =>
                                        navigate(
                                            `/tour-details/${tour.id}`
                                        )
                                    }
                                    style={{
                                        background: "#00b4ff",
                                        color: "white",
                                        border: "none",
                                        padding: "10px 15px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                    }}
                                >
                                    View Tour
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

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
                            <th style={thStyle}>Status</th>
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

                                    <span
                                        style={{
                                            padding: "6px 12px",
                                            borderRadius: "20px",
                                            color: "white",
                                            fontWeight: "bold",
                                            background:
                                                booking.status === "CONFIRMED"
                                                    ? "green"
                                                    : booking.status === "CANCELLED"
                                                        ? "red"
                                                        : "orange",
                                        }}
                                    >
                                        {booking.status}
                                    </span>

                                </td>

                                <td style={tdStyle}>

                                    {booking.status !== "CANCELLED" && (
                                        <>
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
                                                    deleteBooking(booking.id)
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
                                        </>
                                    )}

                                    {booking.status === "CANCELLED" && (
                                        <span
                                            style={{
                                                color: "red",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Booking Cancelled
                                        </span>
                                    )}

                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>

            )
            }

        </div >
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

const cardStyle = {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    textAlign: "center",
};

export default Dashboard;