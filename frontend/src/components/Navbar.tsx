import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const handleLogout = () => {

    localStorage.removeItem("user");

    window.location.href = "/auth";
  };

  useEffect(() => {

    let timer: any;

    const resetTimer = () => {

      clearTimeout(timer);

      timer = setTimeout(() => {

        localStorage.removeItem("user");

        alert(
          "Session expired. Please login again."
        );

        window.location.href = "/auth";

      }, 10 * 60 * 1000);

    };

    window.addEventListener(
      "mousemove",
      resetTimer
    );

    window.addEventListener(
      "keypress",
      resetTimer
    );

    window.addEventListener(
      "click",
      resetTimer
    );

    resetTimer();

    return () => {

      clearTimeout(timer);

      window.removeEventListener(
        "mousemove",
        resetTimer
      );

      window.removeEventListener(
        "keypress",
        resetTimer
      );

      window.removeEventListener(
        "click",
        resetTimer
      );
    };

  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 50px",
        zIndex: 1000,
        boxSizing: "border-box",

        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",

        boxShadow:
          "0 2px 20px rgba(0,0,0,0.08)",
      }}
    >

      <div>
        <h2
          style={{
            margin: 0,
            fontWeight: "700",
            fontSize: "32px",
            color: "#111827",
          }}
        >
          ✈ WonderLust
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >

        <NavLink
          to="/"
          style={navLinkStyle}
        >
          Home
        </NavLink>

        <NavLink
          to="/tours"
          style={navLinkStyle}
        >
          Tours
        </NavLink>

        <NavLink
          to="/about"
          style={navLinkStyle}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={navLinkStyle}
        >
          Contact
        </NavLink>

        {(user?.role === "ADMIN" ||
          user?.role === "MANAGER") && (
            <NavLink
              to="/admin"
              style={navLinkStyle}
            >
              Admin
            </NavLink>
          )}

      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >

        {user ? (
          <>
            <span
              style={{
                fontWeight: "600",
                color: "#333",
              }}
            >
              {user.fullName}
            </span>

            <NavLink
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Dashboard
            </NavLink>

            <button
              onClick={handleLogout}
              style={{
                background: "#ff5a5f",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/auth"
              style={{
                textDecoration: "none",
                color: "#111827",
                fontWeight: "600",
              }}
            >
              Sign In
            </NavLink>

            <NavLink
              to="/auth"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  background: "#ff5a5f",
                  color: "white",
                  border: "none",
                  padding: "12px 22px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Get Started
              </button>
            </NavLink>
          </>
        )}

      </div>

    </nav>
  );
}

const navLinkStyle = {
  textDecoration: "none",
  color: "#374151",
  fontWeight: "600",
  fontSize: "16px",
};

export default Navbar;