import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "6rem",
                    color: "#001f54",
                    marginBottom: "10px",
                }}
            >
                404
            </h1>

            <h2>Page Not Found</h2>

            <p
                style={{
                    margin: "20px 0",
                    color: "#666",
                }}
            >
                The page you are looking for does not exist.
            </p>

            <Link to="/">
                <button
                    style={{
                        background: "#00b4ff",
                        color: "white",
                        border: "none",
                        padding: "12px 25px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Back to Home
                </button>
            </Link>
        </div>
    );
}

export default NotFound;