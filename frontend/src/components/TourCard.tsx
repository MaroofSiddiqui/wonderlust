import { Link } from "react-router-dom";
type TourCardProps = {
    image: string;
    title: string;
    duration: string;
    price: string;
};

function TourCard({
    image,
    title,
    duration,
    price,
}: TourCardProps) {
    return (
        <div
            style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
                transition: "0.3s",
            }}
        >
            <Link to="/tour-details">
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                    }}
                />
            </Link>

            <div style={{ padding: "20px" }}>
                <h3>{title}</h3>
                <p>{duration}</p>
                <h2>{price}</h2>

                <Link to={`/tours/${title}`}>
                    <button
                        style={{
                            background: "#00b4ff",
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        Book Now
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default TourCard;