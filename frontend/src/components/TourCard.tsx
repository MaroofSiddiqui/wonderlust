import { Link, useNavigate } from "react-router-dom";

type TourCardProps = {
  id: number;
  image: string;
  title: string;
  duration: string;
  price: string;
};

function TourCard({
  id,
  image,
  title,
  duration,
  price,
}: TourCardProps) {

  const navigate = useNavigate();

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
      <Link to={`/tour-details/${id}`}>
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

      <div
        style={{
          padding: "20px",
        }}
      >
        <h3>{title}</h3>

        <p
          style={{
            color: "#666",
          }}
        >
          {duration}
        </p>

        <h2
          style={{
            color: "#00b4ff",
          }}
        >
          {price}
        </h2>

        <button
          onClick={() =>
            navigate(`/tour-details/${id}`)
          }
          style={{
            background: "#00b4ff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default TourCard;