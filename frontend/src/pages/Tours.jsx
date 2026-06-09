import API from "../api";
import { useEffect, useState } from "react";
import TourCard from "../components/TourCard";

function Tours() {
    const [search, setSearch] = useState("");
    const [tours, setTours] = useState([]);
    const [visibleTours, setVisibleTours] = useState(6);
    const [filter, setFilter] = useState("ALL");

    useEffect(() => {
        fetchTours();
    }, []);

    const fetchTours = async () => {
        try {
            const response = await API.get(
                "/api/tours"
            );

            setTours(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filteredTours = tours.filter((tour) => {

        const matchesSearch =
            tour.title
                .toLowerCase()
                .includes(search.toLowerCase());

        if (filter === "BUDGET") {

            return matchesSearch &&
                tour.price < 20000;
        }

        if (filter === "PREMIUM") {

            return matchesSearch &&
                tour.price >= 20000 &&
                tour.price <= 50000;
        }

        if (filter === "LUXURY") {

            return matchesSearch &&
                tour.price > 50000;
        }

        return matchesSearch;
    });

    return (
        <>
            <section
                style={{
                    padding: "100px 50px 80px",
                    textAlign: "center",
                    background: "#f8fafc",
                }}
            >
                <h1
                    style={{
                        fontSize: "4rem",
                        marginBottom: "20px",
                        fontWeight: "800",
                    }}
                >
                    Find Your Next Adventure
                </h1>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#666",
                        marginBottom: "40px",
                    }}
                >
                    Explore breathtaking destinations and
                    unforgettable experiences.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px",
                        flexWrap: "wrap",
                    }}
                >
                    <input
                        type="text"
                        placeholder="Search destinations..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        style={{
                            width: "350px",
                            padding: "15px",
                            borderRadius: "12px",
                            border: "1px solid #ddd",
                            fontSize: "16px",
                        }}
                    />

                    <button
                        style={filterBtn}
                        onClick={() => setFilter("ALL")}
                    >
                        All
                    </button>

                    <button
                        style={filterBtn}
                        onClick={() => setFilter("BUDGET")}
                    >
                        Budget
                    </button>

                    <button
                        style={filterBtn}
                        onClick={() => setFilter("PREMIUM")}
                    >
                        Premium
                    </button>

                    <button
                        style={filterBtn}
                        onClick={() => setFilter("LUXURY")}
                    >
                        Luxury
                    </button>
                </div>
            </section>

            <section
                style={{
                    padding: "80px 50px",
                    background: "#f5f5f5",
                }}
            >
                <div
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(3, 1fr)",
                            gap: "30px",
                        }}
                    >
                        {filteredTours.length === 0 ? (
                            <h3>No tours found</h3>
                        ) : (
                            filteredTours
                                .slice(0, visibleTours)
                                .map((tour) => (
                                    <TourCard
                                        key={tour.id}
                                        id={tour.id}
                                        image={tour.image}
                                        title={tour.title}
                                        duration={tour.location}
                                        price={`₹${tour.price}`}
                                    />
                                ))
                        )}
                    </div>

                    {visibleTours < filteredTours.length && (
                        <div
                            style={{
                                textAlign: "center",
                                marginTop: "50px",
                            }}
                        >
                            <button
                                onClick={() =>
                                    setVisibleTours(
                                        visibleTours + 6
                                    )
                                }
                                style={{
                                    background: "#ff5a5f",
                                    color: "white",
                                    border: "none",
                                    padding: "14px 32px",
                                    borderRadius: "12px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                }}
                            >
                                View More Tours
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

const filterBtn = {
    padding: "12px 20px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    background: "white",
    cursor: "pointer",
    fontWeight: "600",
};

export default Tours;