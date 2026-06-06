import axios from "axios";
import { useEffect, useState } from "react";
import TourCard from "../components/TourCard";

function Tours() {
    const [search, setSearch] = useState("");
    const [tours, setTours] = useState<any[]>([]);

    useEffect(() => {
        fetchTours();
    }, []);

    const fetchTours = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/tours"
            );

            setTours(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filteredTours = tours.filter((tour) =>
        tour.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );



    return (
        <section
            style={{
                padding: "80px 50px",
                minHeight: "100vh",
                background: "#f5f5f5",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "40px",
                    fontSize: "3rem",
                }}
            >
                Explore Our Tours
            </h1>

            <input
                type="text"
                placeholder="Search Tour..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                style={{
                    width: "300px",
                    padding: "12px",
                    marginBottom: "30px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                }}
            />

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
                    filteredTours.map((tour) => (
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
        </section>
    );
}

export default Tours;