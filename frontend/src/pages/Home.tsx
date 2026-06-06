import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="hero">
        <h1>Explore The World</h1>
        <p>Discover Amazing Destinations with WonderLust</p>
        <Link to="/tours">
          <button>Explore Tours</button>
        </Link>
      </section>

      <section className="destinations">
        <h2>Featured Destinations</h2>

        <div className="destination-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Goa"
            />
            <h3>Goa</h3>
            <p>Starting from ₹9,999</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              alt="Manali"
            />
            <h3>Manali</h3>
            <p>Starting from ₹12,999</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Kashmir"
            />
            <h3>Kashmir</h3>
            <p>Starting from ₹14,999</p>
          </div>
        </div>
      </section>
      <section
        style={{
          padding: "80px 50px",
          textAlign: "center",
        }}
      >
        <h2>Why Choose WonderLust?</h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "40px",
            justifyContent: "center",
          }}
        >
          <div>
            <h3>💰 Best Prices</h3>
            <p>Affordable travel packages.</p>
          </div>

          <div>
            <h3>🔒 Secure Booking</h3>
            <p>Safe and trusted booking process.</p>
          </div>

          <div>
            <h3>📞 24/7 Support</h3>
            <p>Always available for assistance.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;