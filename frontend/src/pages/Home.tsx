import axios from "axios";
import { useEffect, useState } from "react";
import TourCard from "../components/TourCard";
import { Link } from "react-router-dom";

function Home() {

  const [tours, setTours] = useState([]);

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
  return (
    <>
      <section
        style={{
          height: "75vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.2))",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "500px",
            color: "white",
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "10px 20px",
              borderRadius: "30px",
              fontSize: "14px",
            }}
          >
            ✈ Discover Your Next Adventure
          </span>

          <h1
            style={{
              fontSize: "4rem",
              marginTop: "25px",
              lineHeight: "1.1",
              fontWeight: "bold",
            }}
          >
            Where Would You Like To
            <br />
            <span style={{ color: "#00b4ff" }}>
              Go Next?
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              marginTop: "20px",
              marginBottom: "30px",
              maxWidth: "650px",
            }}
          >
            Hand-picked tour packages from Kashmir
            to Manali and beyond. Create memories
            that last forever.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <Link to="/tours">
              <button
                style={{
                  padding: "15px 30px",
                  background: "#ff5a5f",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Browse Tours
              </button>
            </Link>

            <Link
              to="/about"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  padding: "16px 32px",
                  borderRadius: "12px",
                  border: "1px solid white",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                How It Works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* <section
        style={{
          marginTop: "-60px",
          padding: "0 50px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            display: "flex",
            justifyContent: "space-between",
            boxShadow:
              "0px 5px 25px rgba(0,0,0,0.15)",
          }}
        >
          <div>
            <h4>Destination</h4>
            <p>Kashmir</p>
          </div>

          <div>
            <h4>Date</h4>
            <p>June 2026</p>
          </div>

          <div>
            <h4>Travelers</h4>
            <p>2 People</p>
          </div>

          <Link to="/tours">
            <button
              style={{
                background: "#00b4ff",
                color: "white",
                border: "none",
                padding: "15px 25px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Search Tours
            </button>
          </Link>
        </div>
      </section> */}

      <section
        style={{
          marginTop: "-25px",
          position: "relative",
          zIndex: 10,
          padding: "0 50px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "35px 20px",
            display: "flex",
            justifyContent: "space-around",
            boxShadow:
              "0px 5px 25px rgba(0,0,0,0.15)",
            flexWrap: "wrap",
            gap: "10px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div>
            <h3>🌍 120+ Destinations</h3>
            <p>Explore beautiful places worldwide</p>
          </div>

          <div>
            <h3>🔒 Secure Booking</h3>
            <p>100% safe payment process</p>
          </div>

          <div>
            <h3>✨ Crafted Tours</h3>
            <p>Carefully planned experiences</p>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "70px 20px",
          background: "#ffffff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "4rem",
            marginBottom: "50px",
          }}
        >
          Popular This Season
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {tours.slice(0, 4).map((tour: any) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              image={tour.image}
              title={tour.title}
              duration={tour.location}
              price={`₹${tour.price}`}
            />
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "60px 70px",
          background:
            "linear-gradient(90deg,#1e1b4b,#001f54)",
          color: "white",
          margin: "60px 20px",
          borderRadius: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "3.5rem",
            marginBottom: "15px",
          }}
        >
          Plan your next escape today
        </h2>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "30px",
            maxWidth: "700px",
          }}
        >
          Create an account to save trips,
          get exclusive offers and book in
          one tap.
        </p>

        <Link to="/register">
          <button
            style={{
              background: "#ff5a5f",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Create Free Account
          </button>
        </Link>
      </section>
    </>
  );
}

const testimonialStyle = {
  background: "white",
  width: "300px",
  padding: "25px",
  borderRadius: "15px",
  boxShadow:
    "0px 4px 15px rgba(0,0,0,0.15)",
};

export default Home;