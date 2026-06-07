import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TourDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [tour, setTour] = useState<any>(null);

    const [selectedImage, setSelectedImage] = useState("");

    const [relatedTours, setRelatedTours] =
        useState<any[]>([]);

    useEffect(() => {

        fetchTour();

    }, []);

    const fetchRelatedTours = async () => {

        try {

            const response =
                await axios.get(
                    "http://localhost:8080/api/tours"
                );

            setRelatedTours(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {

        if (
            tour &&
            tour.images &&
            tour.images.length > 0
        ) {

            setSelectedImage(
                tour.images[0]
            );

        }

    }, [tour]);

    const fetchTour = async () => {

        try {

            const response =
                await axios.get(
                    `http://localhost:8080/api/tours/${id}`
                );

            setTour(response.data);

            fetchRelatedTours();

        } catch (error) {

            console.log(error);
        }
    };

    if (!tour) {

        return <h2>Loading...</h2>;
    }

    console.log("Current Tour:", tour);
    console.log("Related Tours:", relatedTours);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f8fafc",
                padding: "40px",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                <img
                    src={
                        selectedImage ||
                        tour.image
                    }
                    alt={tour.title}
                    style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        borderRadius: "20px",
                        marginBottom: "15px",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "25px",
                        overflowX: "auto",
                    }}
                >
                    {tour.images?.map(
                        (image: string, index: number) => (

                            <img
                                key={index}
                                src={image}
                                alt=""
                                onClick={() =>
                                    setSelectedImage(image)
                                }
                                style={{
                                    width: "140px",
                                    height: "90px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    border:
                                        selectedImage === image
                                            ? "3px solid #ff4d5a"
                                            : "2px solid #ddd",
                                }}
                            />
                        )
                    )}
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr",
                        gap: "30px",
                    }}
                >
                    <div
                        style={{
                            background: "white",
                            padding: "30px",
                            borderRadius: "15px",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "3rem",
                                marginBottom: "10px",
                            }}
                        >
                            {tour.title}
                        </h1>

                        <p
                            style={{
                                fontSize: "18px",
                                color: "#666",
                                marginBottom: "25px",
                            }}
                        >
                            📍 {tour.location}
                        </p>

                        <h2>About This Tour</h2>

                        <p
                            style={{
                                lineHeight: "1.8",
                                color: "#555",
                            }}
                        >
                            {tour.description}
                        </p>

                        <div
                            style={{
                                marginTop: "40px",
                            }}
                        >
                            <h2>Tour Highlights</h2>

                            <ul
                                style={{
                                    lineHeight: "2",
                                    fontSize: "17px",
                                }}
                            >
                                <li>✓ Scenic Sightseeing</li>
                                <li>✓ Premium Accommodation</li>
                                <li>✓ Guided Tours</li>
                                <li>✓ Airport Pickup</li>
                                <li>✓ Breakfast Included</li>
                            </ul>
                        </div>

                        <div
                            style={{
                                marginTop: "40px",
                            }}
                        >
                            <h2>Package Includes</h2>

                            <ul
                                style={{
                                    lineHeight: "2",
                                    fontSize: "17px",
                                }}
                            >
                                <li>✓ Hotel Stay</li>
                                <li>✓ Daily Breakfast</li>
                                <li>✓ Local Transport</li>
                                <li>✓ Tour Guide</li>
                                <li>✓ Airport Transfers</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                background: "white",
                                padding: "30px",
                                borderRadius: "15px",
                                position: "sticky",
                                top: "100px",
                            }}
                        >
                            <h3
                                style={{
                                    color: "#666",
                                }}
                            >
                                Starting From
                            </h3>

                            <h1
                                style={{
                                    color: "#ff4d5a",
                                    marginBottom: "20px",
                                }}
                            >
                                ₹{tour.price}
                            </h1>

                            <p
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                📍 {tour.location}
                            </p>

                            <p
                                style={{
                                    marginBottom: "25px",
                                }}
                            >
                                ⭐ Top Rated Package
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/booking")
                                }
                                style={{
                                    width: "100%",
                                    padding: "15px",
                                    background: "#ff4d5a",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "10px",
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                }}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    marginTop: "60px",
                }}
            >
                <h2
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    You May Also Like
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(3, 1fr)",
                        gap: "20px",
                    }}
                >

                    {relatedTours
                        .filter(
                            (t) => t.id !== tour.id
                        )
                        .slice(0, 3)
                        .map((item) => (

                            <div
                                key={item.id}
                                onClick={() =>
                                    navigate(
                                        `/tour-details/${item.id}`
                                    )
                                }
                                style={{
                                    background: "white",
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    boxShadow:
                                        "0 4px 12px rgba(0,0,0,0.08)",
                                }}
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
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
                                    <h3>{item.title}</h3>

                                    <p>
                                        📍 {item.location}
                                    </p>

                                    <h3>
                                        ₹{item.price}
                                    </h3>
                                </div>

                            </div>

                        ))}
                </div>
            </div>
        </div>
    );
}

export default TourDetails;