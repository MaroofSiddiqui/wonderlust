import { NavLink, useLocation } from "react-router-dom";

function Navbar() {

  useLocation();

  const user =
    JSON.parse(
      localStorage.getItem("user") || "null"
    );

  const handleLogout = () => {

    localStorage.removeItem("user");

    window.location.href = "/";
  };

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