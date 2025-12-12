import React from "react";

const TawhidPortfolio = () => {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "helvetica, Helvetica",
        background: "linear-gradient(135deg, rgba(1, 10, 34, 0.733), #021531)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "100px",
          padding: "20px",
          marginTop: "80px",
          width: "800%",
          maxWidth: "10000px",
          textAlign: "center",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src="tattohid.jpg"
          alt="Tawhid Hosen"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #fff",
            marginBottom: "40px",
            alignItems: "first baseline",
          }}
        />

        <h1
          style={{
            fontSize: "24px",
            margin: 0,
            fontWeight: 700,
          }}
        >
          Tawhid Hosen
        </h1>

        <h3
          style={{
            fontSize: "14px",
            fontWeight: 300,
            marginTop: "5px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          Student of CST
        </h3>

        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Although I’m a Computer Science student, coding has never really been
          my thing. I’m more passionate about graphic design. But above
          everything else,
          <br />I love playing cricket. I’m a player at heart — you could say
          I’m a true sports person.".
        </p>
      </div>

      <div
        style={{
          marginTop: "60px",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(0, 24, 77, 0.199), #023564)",
          padding: "40px 0",
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          My Activities
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {["Graphics design", "Web Development", "Photography", "sports"].map(
            (item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontSize: "14px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                }
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TawhidPortfolio;
