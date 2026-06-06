import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TourDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [tour, setTour] = useState<any>(null);

    useEffect(() => {

        fetchTour();

    }, []);

    const fetchTour = async () => {

        try {

            const response =
                await axios.get(
                    `http://localhost:8080/api/tours/${id}`
                );

            setTour(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    if (!tour) {

        return <h2>Loading...</h2>;
    }

    return (
        <div
            style={{
                padding: "50px",
                minHeight: "100vh",
                background: "#f5f5f5",
            }}
        >
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "auto",
                    background: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow:
                        "0px 4px 15px rgba(0,0,0,0.15)",
                }}
            >
                <img
                    src={tour.image}
                    alt={tour.title}
                    style={{
                        width: "100%",
                        height: "450px",
                        objectFit: "cover",
                    }}
                />

                <div
                    style={{
                        padding: "30px",
                    }}
                >
                    <h1>{tour.title}</h1>

                    <h3>
                        📍 {tour.location}
                    </h3>

                    <h2>
                        ₹{tour.price}
                    </h2>

                    <h3>Description</h3>

                    <p
                        style={{
                            marginTop: "20px",
                            lineHeight: "1.8",
                            fontSize: "18px",
                        }}
                    >
                        {tour.description}
                    </p>

                    <button
                        onClick={() =>
                            navigate("/booking")
                        }
                        style={{
                            marginTop: "20px",
                            padding: "12px 25px",
                            background: "#00b4ff",
                            border: "none",
                            color: "white",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TourDetails;