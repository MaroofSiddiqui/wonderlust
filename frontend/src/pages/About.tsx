function About() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "80px 18px 60px",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "620px",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              color: "#0ea5e9",
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "18px",
              textTransform: "uppercase",
            }}
          >
            Our Story
          </p>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              lineHeight: "1.05",
              letterSpacing: "-2px",
              color: "#0f172a",
              marginBottom: "24px",
              maxWidth: "580px",
            }}
          >
            Travel, with the boring parts removed.
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#64748b",
              lineHeight: "1.8",
              maxWidth: "650px",
            }}
          >
            WonderLust started with a simple idea: travel should be
            exciting, not stressful. We plan every trip end-to-end so
            you can focus on creating memories that last forever.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "28px",
              minHeight: "180px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                marginBottom: "18px",
              }}
            >
              💙
            </div>

            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              Run by travelers
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.7",
                fontSize: "15px",
              }}
            >
              Every itinerary is scouted by real travelers who have
              experienced the destination themselves.
            </p>
          </div>

          <div
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "28px",
              minHeight: "180px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                marginBottom: "18px",
              }}
            >
              🍃
            </div>

            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              Lighter footprints
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.7",
                fontSize: "15px",
              }}
            >
              We work with trusted local operators, support
              responsible tourism, and create meaningful travel
              experiences.
            </p>
          </div>

          <div
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "20px",
              padding: "28px",
              minHeight: "180px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                marginBottom: "18px",
              }}
            >
              🏅
            </div>

            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                marginBottom: "12px",
                color: "#0f172a",
              }}
            >
              Loved by 40k+
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.7",
                fontSize: "15px",
              }}
            >
              Average rating 4.9/5 from travelers across India and
              beyond, with thousands of memorable journeys completed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;