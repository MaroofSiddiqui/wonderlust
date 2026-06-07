import { useState } from "react";

function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    return (

        <div
            style={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                background: "#f8fafc",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 999,
            }}
        >
            <div
                style={{
                    flex: 1,
                    background: "#071a44",
                    color: "white",
                    padding: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                }}
            >
                <div>
                    <h2
                        style={{
                            fontSize: "1.8rem",
                            marginBottom: "30px",
                        }}
                    >
                        ✈ WonderLust
                    </h2>

                    <h1
                        style={{
                            fontSize: "1.8rem",
                            lineHeight: "1.3",
                            fontWeight: "400",
                            maxWidth: "500px",
                            marginBottom: "20px",
                        }}
                    >
                        "WonderLust made our honeymoon feel effortless —
                        every detail just worked."
                    </h1>

                </div>
            </div>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "30px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "450px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "2.6rem",
                            color: "#0f172a",
                            marginBottom: "8px",
                        }}
                    >
                        Welcome
                    </h1>

                    <p
                        style={{
                            color: "#64748b",
                            marginBottom: "25px",
                            fontSize: "16px",
                        }}
                    >
                        Sign in or create an account to book your next trip.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            background: "#e2e8f0",
                            borderRadius: "12px",
                            padding: "4px",
                            marginBottom: "25px",
                        }}
                    >
                        <button
                            onClick={() => setIsLogin(true)}
                            style={{
                                flex: 1,
                                padding: "10px",
                                border: "none",
                                borderRadius: "10px",
                                background: isLogin ? "white" : "transparent",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            Sign In
                        </button>

                        <button
                            onClick={() => setIsLogin(false)}
                            style={{
                                flex: 1,
                                padding: "10px",
                                border: "none",
                                borderRadius: "10px",
                                background: !isLogin ? "white" : "transparent",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            Sign Up
                        </button>
                    </div>

                    {!isLogin && (
                        <div style={{ marginBottom: "15px" }}>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "6px",
                                    fontWeight: "500",
                                }}
                            >
                                Full Name
                            </label>

                            <input
                                type="text"
                                style={{
                                    width: "100%",
                                    padding: "12px 14px",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: "12px",
                                    fontSize: "15px",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                    )}

                    <div style={{ marginBottom: "15px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "6px",
                                fontWeight: "500",
                            }}
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            style={{
                                width: "100%",
                                padding: "12px 14px",
                                border: "1px solid #e2e8f0",
                                borderRadius: "12px",
                                fontSize: "15px",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "6px",
                                fontWeight: "500",
                            }}
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            style={{
                                width: "100%",
                                padding: "12px 14px",
                                border: "1px solid #e2e8f0",
                                borderRadius: "12px",
                                fontSize: "15px",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    <button
                        style={{
                            width: "100%",
                            padding: "13px",
                            background: "#ff4d5a",
                            color: "white",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "15px",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        {isLogin ? "Sign In" : "Create Account"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Auth;