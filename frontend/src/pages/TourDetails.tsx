import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TourDetails() {
    const { id } = useParams();

    return (
        <section
            style={{
                padding: "60px",
                minHeight: "100vh",
                background: "#f5f5f5",
            }}
        >
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    background: "white",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                    alt="tour"
                    style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                    }}
                />

                <div style={{ padding: "30px" }}>
                    <h1>{id}</h1>

                    <h2 style={{ color: "#00b4ff" }}>
                        ₹12,999
                    </h2>

                    <p>
                        Duration: 5 Days / 4 Nights
                    </p>

                    <p>
                        Enjoy a memorable trip with sightseeing,
                        hotel stay, transportation, and guided tours.
                    </p>

                    <Link to="/booking">
                        <button
                            style={{
                                background: "#00b4ff",
                                color: "white",
                                border: "none",
                                padding: "12px 25px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                marginTop: "20px",
                            }}
                        >
                            Book This Tour
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default TourDetails;