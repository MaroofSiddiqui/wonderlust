import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#f8fafc",
        padding: "70px 50px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            maxWidth: "280px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "12px",
              color: "#0f172a",
            }}
          >
            ✈️ WonderLust
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Curated tours to the world's most remarkable places.
          </p>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "20px",
              color: "#0f172a",
            }}
          >
            Explore
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link
              to="/tours"
              style={{
                textDecoration: "none",
                color: "#64748b",
              }}
            >
              Tours
            </Link>

            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#64748b",
              }}
            >
              About
            </Link>

            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#64748b",
              }}
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "20px",
              color: "#0f172a",
            }}
          >
            Account
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#64748b",
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#64748b",
              }}
            >
              Register
            </Link>

            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "#64748b",
              }}
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div>
          <h3
            style={{
              marginBottom: "20px",
              color: "#0f172a",
            }}
          >
            Contact
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              color: "#64748b",
              lineHeight: "1.8",
            }}
          >
            <a
              href="mailto:support@wonderlust.com"
              style={{
                textDecoration: "none",
                color: "#64748b",
              }}
            >
              support@wonderlust.com
            </a>

            <a
              href="tel:+919999999999"
              style={{
                textDecoration: "none",
                color: "#64748b",
              }}
            >
              +91 9999999999
            </a>
          </div>
        </div>
      </div>

      <hr
        style={{
          margin: "50px 0 35px",
          border: "none",
          borderTop: "1px solid #e2e8f0",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          fontSize: "16px",
        }}
      >
        © 2026 WonderLust. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;