import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";


function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem("user") || "null"
    );

  const handleLogout = () => {

    localStorage.removeItem("user");

    window.location.href = "/";
  };

  useEffect(() => {

    let timer: any;

    const resetTimer = () => {

      clearTimeout(timer);

      timer = setTimeout(() => {

        localStorage.removeItem("user");

        alert("Session expired. Please login again.");

        window.location.href = "/login";

      }, 10 * 60 * 1000);

    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);
    window.addEventListener("click", resetTimer);

    resetTimer();

    return () => {

      clearTimeout(timer);

      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      window.removeEventListener("click", resetTimer);
    };

  }, []);


  return (
    <nav className="navbar">

      <div className="logo">
        WonderLust
      </div>

      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/tours">
          Tours
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        {user?.role === "ADMIN" && (
          <NavLink to="/admin">
            Admin
          </NavLink>
        )}

        {user ? (
          <>

            <span
              style={{
                color: "white",
                marginRight: "15px",
                fontWeight: "bold",
              }}
            >
              Welcome, {user.fullName}
            </span>

            <NavLink to="/dashboard">
              Dashboard
            </NavLink>

            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Logout
            </button>

          </>
        ) : (
          <>

            <NavLink to="/login">
              Login
            </NavLink>

            <NavLink to="/register">
              Register
            </NavLink>

          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;