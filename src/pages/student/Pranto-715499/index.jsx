import React from "react";
import { useNavigate } from "react-router";

const PrantoPortfolio = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Back Button */}
      <button style={styles.backButton} onClick={() => navigate("/students")}>
        ← Back to Students
      </button>

      {/* Main Profile Card */}
      <div style={styles.mainCard}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.profileImageContainer}>
            <img
              src="https://i.ibb.co.com/W4FrTTdP/profilepic.png"
              alt="SKMPranto"
              style={styles.profileImage}
            />
          </div>
          <h1 style={styles.name}>Shovan Kumar Mandol Pranto</h1>
          <p style={styles.rollNumber}>
            Roll: 715499 | Computer Science & Technology (CST)
          </p>
          <div style={styles.tags}>
            <span style={styles.tag}>Bogura Polytechnic Institute</span>
            <span style={styles.tag}>Session 2223</span>
            <span style={styles.tag}>Bogura, Bangladesh</span>
          </div>
        </div>

        {/* Bio Section */}
        <div style={styles.bioSection}>
          <p style={styles.bio}>
            Hi, I'm Shovan Kumar Mandol Pranto — motivated Computer Science
            student with a deep interest in web development, software
            engineering, and cutting-edge technologies. Committed to expanding
            technical skills, building meaningful digital solutions, and
            contributing to innovative projects that create real value. Driven
            by curiosity, continuous learning, and the desire to make a positive
            impact through technology.
          </p>

          {/* Contact Links */}
          <div style={styles.contactLinks}>
            <a
              href="mailto:prantokumar3463@gmail.com"
              style={styles.contactButton}
            >
              📧 Email
            </a>
            <a
              href="https://github.com/SKMPranto"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactButton}
            >
              💻 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pranto-kumar-/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactButton}
            >
              💼 LinkedIn
            </a>
            <a
              href="https://pranto-kumar.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactButton}
            >
              🌐 Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div style={styles.contentGrid}>
        {/* Skills Section */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionIcon}>💻</span>
            <h2 style={styles.sectionTitle}>Technical Skills</h2>
          </div>

          <div style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>Programming Languages</h3>
            <div style={styles.skillBar}>
              <div style={styles.skillName}>JavaScript</div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: "80%" }}></div>
              </div>
              <div style={styles.skillPercentage}>80%</div>
            </div>
            <div style={styles.skillBar}>
              <div style={styles.skillName}>Python</div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: "40%" }}></div>
              </div>
              <div style={styles.skillPercentage}>40%</div>
            </div>
            <div style={styles.skillBar}>
              <div style={styles.skillName}>Java</div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: "40%" }}></div>
              </div>
              <div style={styles.skillPercentage}>40%</div>
            </div>
            <div style={styles.skillBar}>
              <div style={styles.skillName}>PHP</div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: "20%" }}></div>
              </div>
              <div style={styles.skillPercentage}>20%</div>
            </div>
          </div>

          <div style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>Web Development</h3>
            <div style={styles.skillBar}>
              <div style={styles.skillName}>React</div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: "85%" }}></div>
              </div>
              <div style={styles.skillPercentage}>85%</div>
            </div>
            <div style={styles.skillBar}>
              <div style={styles.skillName}>Node.js</div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: "80%" }}></div>
              </div>
              <div style={styles.skillPercentage}>80%</div>
            </div>
            <div style={styles.skillBar}>
              <div style={styles.skillName}>HTML5 & CSS3</div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: "95%" }}></div>
              </div>
              <div style={styles.skillPercentage}>95%</div>
            </div>
          </div>

          <div style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>Database</h3>
            <div style={styles.skillBar}>
              <div style={styles.skillName}>MongoDB</div>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: "55%" }}></div>
              </div>
              <div style={styles.skillPercentage}>55%</div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionIcon}>📊</span>
            <h2 style={styles.sectionTitle}>Statistics</h2>
          </div>

          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>3+</div>
              <div style={styles.statLabel}>Projects Completed</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>8,000+</div>
              <div style={styles.statLabel}>Lines of Code</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>20+</div>
              <div style={styles.statLabel}>GitHub Repos</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>10+</div>
              <div style={styles.statLabel}>Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionIcon}>🚀</span>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
        </div>

        <div style={styles.projectsGrid}>
          <div style={styles.projectCard}>
            <div>
              <img
                className="rounded-lg h-[182px]"
                src="https://i.ibb.co/0p5S0kTP/Screenshot-2025-10-15-221609.jpg"
                alt="Tap&Earn"
              />
            </div>
            <div style={styles.projectHeader}>
              <div>
                <h3 style={styles.projectTitle}>Tap&Earn</h3>
                <span style={styles.projectStatus}>Completed</span>
              </div>
            </div>
            <p style={styles.projectDescription}>
              Tap&Earn is a multitasking web application, where user can earn
              money by completing task
            </p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>React</span>
              <span style={styles.techTag}>Node.js</span>
              <span style={styles.techTag}>MongoDB</span>
              <span style={styles.techTag}>Stripe API</span>
            </div>
            <div style={styles.projectLinks}>
              <a
                href="https://github.com/SKMPranto/assignment-12-client"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                💻 Code
              </a>
              <a
                href="https://tap-and-earn-258dd.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                🌐 Live Demo
              </a>
            </div>
          </div>

          <div style={styles.projectCard}>
            <div>
              <img
                className="rounded-lg"
                src="https://i.ibb.co/KzL9JSHz/Screenshot-2025-10-17-181528.jpg"
                alt="Artifacts Gallery"
              />
            </div>
            <div style={styles.projectHeader}>
              <div>
                <h3 style={styles.projectTitle}>Artifacts Gallery</h3>
                <span style={styles.projectStatus}>Completed</span>
              </div>
            </div>
            <p style={styles.projectDescription}>
              Artifacts Gallery is a web application where user can find
              Artifacts and explore them.Also a user can add artifacts there
            </p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>React</span>
              <span style={styles.techTag}>Node.js</span>
              <span style={styles.techTag}>MongoDB</span>
            </div>
            <div style={styles.projectLinks}>
              <a
                href="https://github.com/SKMPranto/artifacts-gallery-client"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                💻 Code
              </a>
              <a
                href="https://artifacts-gallery.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                🌐 Live Demo
              </a>
            </div>
          </div>

          <div style={styles.projectCard}>
            <img
              className="rounded-lg"
              src="https://i.ibb.co.com/6c2ZBFH7/Screenshot-2025-10-17-181839.jpg"
              alt="Plant Care"
            />
            <div style={styles.projectHeader}>
              <div>
                <h3 style={styles.projectTitle}>Plant Care</h3>
                <span style={styles.projectStatus}>Completed</span>
              </div>
            </div>
            <p style={styles.projectDescription}>
              Plant Care is a Web application based on Plant. User Can add plant
              here and maintain the plants
            </p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>React</span>
              <span style={styles.techTag}>Node.js</span>
              <span style={styles.techTag}>MongoDB</span>
            </div>
            <div style={styles.projectLinks}>
              <a
                href="https://github.com/SKMPranto/plant-care-client"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                💻 Code
              </a>
              <a
                href="https://plant-care-web.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                🌐 Live Demo
              </a>
            </div>
          </div>

          <div style={styles.projectCard}>
            <img
              className="rounded-lg h-48"
              src="https://i.ibb.co.com/KjTC46Kw/parcelboy.jpg"
              alt="ProFast"
            />
            <div style={styles.projectHeader}>
              <div>
                <h3 style={styles.projectTitle}>ProFast</h3>
                <span style={styles.projectStatusPlanning}>Planning</span>
              </div>
            </div>
            <p style={styles.projectDescription}>
              ProFast is a fast and reliable parcel delivery platform built for
              simple booking and smooth tracking.
            </p>
            <div style={styles.projectTech}>
              <span style={styles.techTag}>React</span>
              <span style={styles.techTag}>Node.js</span>
              <span style={styles.techTag}>MongoDB</span>
              <span style={styles.techTag}>Stripe API</span>
            </div>
            <div style={styles.projectLinks}>
              <a
                href="https://github.com/SKMPranto"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                💻 Code
              </a>
              <a
                href="https://github.com/SKMPranto"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectLink}
              >
                🌐 Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: "40px 0" }} />

      {/* Achievements Section */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionIcon}>🏆</span>
          <h2 style={styles.sectionTitle}>Achievements & Awards</h2>
        </div>

        <div style={styles.achievementsGrid}>
          <div style={styles.achievementCard}>
            <span style={styles.achievementIcon}>⭐</span>
            <div>
              <h3 style={styles.achievementTitle}>Academic Excellence</h3>
              <p style={styles.achievementDescription}>
                Maintained GPA 3.8+ for 3 consecutive semesters
              </p>
              <span style={styles.achievementDate}>2023</span>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: "40px 0" }} />
      {/* Certifications Section */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionIcon}>📜</span>
          <h2 style={styles.sectionTitle}>Certifications</h2>
        </div>

        <div style={styles.certificationsList}>
          <div style={styles.certificationCard}>
            <div>
              <h3 style={styles.certificationTitle}>
                AWS Certified Cloud Practitioner
              </h3>
              <p style={styles.certificationIssuer}>Amazon Web Services</p>
            </div>
            <div style={styles.certificationMeta}>
              <span style={styles.certificationDate}>January 2024</span>
              <span style={styles.certificationCredential}>AWS-CCP-715534</span>
            </div>
          </div>

          <div style={styles.certificationCard}>
            <div>
              <h3 style={styles.certificationTitle}>
                React Developer Certification
              </h3>
              <p style={styles.certificationIssuer}>Meta</p>
            </div>
            <div style={styles.certificationMeta}>
              <span style={styles.certificationDate}>December 2023</span>
              <span style={styles.certificationCredential}>
                META-REACT-715534
              </span>
            </div>
          </div>

          <div style={styles.certificationCard}>
            <div>
              <h3 style={styles.certificationTitle}>
                Python Programming Certificate
              </h3>
              <p style={styles.certificationIssuer}>Python Institute</p>
            </div>
            <div style={styles.certificationMeta}>
              <span style={styles.certificationDate}>November 2023</span>
              <span style={styles.certificationCredential}>
                PYTHON-PC-715534
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },

  backButton: {
    background: "rgba(255,255,255,0.2)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "white",
    padding: "12px 24px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "30px",
    transition: "all 0.3s ease",
  },

  mainCard: {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    backdropFilter: "blur(20px)",
    marginBottom: "30px",
    overflow: "hidden",
  },

  header: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "40px",
    textAlign: "center",
    color: "white",
  },

  profileImageContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "6px solid rgba(255,255,255,0.3)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    objectFit: "cover",
  },

  name: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: "0 0 8px 0",
  },

  rollNumber: {
    fontSize: "18px",
    margin: "0 0 20px 0",
    opacity: 0.9,
  },

  tags: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  tag: {
    background: "rgba(255,255,255,0.2)",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
  },

  bioSection: {
    padding: "40px",
    textAlign: "center",
  },

  bio: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto 40px auto",
  },

  contactLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  contactButton: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    padding: "12px 24px",
    borderRadius: "25px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    display: "inline-block",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "30px",
    marginBottom: "30px",
  },

  section: {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
  },

  sectionIcon: {
    fontSize: "24px",
  },

  sectionTitle: {
    fontSize: "24px",
    fontWeight: "600",
    margin: 0,
    color: "#333",
  },

  skillCategory: {
    marginBottom: "24px",
  },

  categoryTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    margin: "0 0 16px 0",
  },

  skillBar: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },

  skillName: {
    minWidth: "120px",
    fontSize: "14px",
    fontWeight: "500",
  },

  progressContainer: {
    flex: 1,
    height: "8px",
    background: "#f0f0f0",
    borderRadius: "4px",
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },

  skillPercentage: {
    minWidth: "40px",
    fontSize: "12px",
    color: "#666",
    textAlign: "right",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
  },

  statCard: {
    background: "#f8f9ff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid #e8ecff",
  },

  statNumber: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#667eea",
    margin: "0 0 8px 0",
  },

  statLabel: {
    fontSize: "14px",
    color: "#666",
  },

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },

  projectCard: {
    background: "#f8f9ff",
    border: "1px solid #e8ecff",
    borderRadius: "12px",
    padding: "24px",
    transition: "all 0.3s ease",
  },

  projectHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },

  projectIcon: {
    fontSize: "24px",
  },

  projectTitle: {
    fontSize: "18px",
    fontWeight: "600",
    margin: "0 0 4px 0",
    color: "#333",
  },

  projectStatus: {
    background: "#10b981",
    color: "white",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
  },

  projectStatusInProgress: {
    background: "#3b82f6",
    color: "white",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
  },

  projectStatusPlanning: {
    background: "#f59e0b",
    color: "white",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
  },

  projectDescription: {
    color: "#666",
    lineHeight: "1.6",
    margin: "0 0 16px 0",
  },

  projectTech: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "16px",
  },

  techTag: {
    background: "#667eea",
    color: "white",
    padding: "4px 12px",
    borderRadius: "16px",
    fontSize: "12px",
    fontWeight: "500",
  },

  projectLinks: {
    display: "flex",
    gap: "12px",
  },

  projectLink: {
    background: "#f0f0f0",
    color: "#333",
    padding: "8px 16px",
    borderRadius: "20px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },

  achievementsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },

  achievementCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "#f8f9ff",
    border: "1px solid #e8ecff",
    borderRadius: "12px",
    padding: "20px",
  },

  achievementIcon: {
    fontSize: "32px",
  },

  achievementTitle: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 4px 0",
    color: "#333",
  },

  achievementDescription: {
    color: "#666",
    margin: "0 0 4px 0",
    fontSize: "14px",
  },

  achievementDate: {
    color: "#999",
    fontSize: "12px",
  },

  certificationsList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  certificationCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f8f9ff",
    border: "1px solid #e8ecff",
    borderRadius: "12px",
    padding: "20px",
  },

  certificationTitle: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 4px 0",
    color: "#333",
  },

  certificationIssuer: {
    color: "#666",
    margin: 0,
    fontSize: "14px",
  },

  certificationMeta: {
    textAlign: "right",
  },

  certificationDate: {
    display: "block",
    color: "#999",
    fontSize: "12px",
    marginBottom: "4px",
  },

  certificationCredential: {
    color: "#667eea",
    fontSize: "12px",
    fontWeight: "500",
  },
};

export default PrantoPortfolio;
