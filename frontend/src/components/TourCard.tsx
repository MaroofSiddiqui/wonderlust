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
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow:
          "0px 10px 30px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <Link to={`/tour-details/${id}`}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "280px",
            objectFit: "cover",
          }}
        />
      </Link>

      <div
        style={{
          padding: "24px",
        }}
      >
        <p
          style={{
            color: "#f59e0b",
            fontSize: "14px",
            marginBottom: "10px",
          }}
        >
          ★★★★★ 4.9
        </p>

        <h3
          style={{
            fontSize: "24px",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "20px",
          }}
        >
          📍 {duration}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#2563eb",
              fontSize: "24px",
            }}
          >
            {price}
          </h2>

          <button
            onClick={() =>
              navigate(
                `/tour-details/${id}`
              )
            }
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourCard;