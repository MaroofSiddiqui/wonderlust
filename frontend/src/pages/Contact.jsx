function Contact() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "80px 50px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              color: "#0ea5e9",
              fontWeight: "600",
              letterSpacing: "2px",
              marginBottom: "20px",
            }}
          >
            CONTACT
          </p>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "20px",
            }}
          >
            Let's plan something good.
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "20px",
              marginBottom: "40px",
            }}
          >
            Custom trips, group inquiries, or just saying hi —
            we read every message.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              color: "#0f172a",
              fontSize: "20px",
            }}
          >
            <p>✉️ support@wonderlust.com</p>
            <p>📞 +91 9999999999</p>
            <p>📍 CDAC, Kharghar</p>
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "35px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <label>Name</label>

              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  marginTop: "8px",
                }}
              />
            </div>

            <div>
              <label>Email</label>

              <input
                type="email"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  marginTop: "8px",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Subject</label>

            <input
              type="text"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                marginTop: "8px",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label>Message</label>

            <textarea
              rows={7}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                marginTop: "8px",
                resize: "none",
              }}
            />
          </div>

          <button
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "12px",
              background: "#ff4d5a",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Send message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;