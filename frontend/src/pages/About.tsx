function About() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 50px",
        background: "#f5f5f5",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "30px",
        }}
      >
        About WonderLust
      </h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          fontSize: "20px",
          lineHeight: "1.8",
          textAlign: "center",
        }}
      >
        <p>
          WonderLust is a modern tour booking platform designed to help
          travelers discover amazing destinations, compare packages,
          and book unforgettable experiences.
        </p>

        <p>
          We offer curated travel packages across India with affordable
          pricing, comfortable stays, guided tours and seamless booking.
        </p>

        <p>
          Our mission is to make travel simple, accessible and memorable
          for everyone.
        </p>
      </div>
    </section>
  );
}

export default About;