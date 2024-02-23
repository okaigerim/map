import React from "react";

import { Footer } from "../../components/Footer";

import styles from "./style.module.scss";

export const Academics = () => {
  const section1data = [
    { title: "Mineral Processing" },
    { title: "Geospatial Digital Engineering" },
    { title: "Mining Engineering" },
    {
      title: "Engineering Physics and Materials Science",
    },
    {
      title: "Metallurgy and mineral processing",
    },
    {
      title: "Metallurgy Recycling",
    },
  ];

  const section2data = [
    { title: "Drilling engineering " },
    { title: "Petroleum engineering" },
    { title: "Biotechnology" },
    {
      title: "Water resources and water management",
    },
    {
      title: "Geology and mineral exploration",
    },
    {
      title: "Hydrogeology and geoecology",
    },
    {
      title: "Hydrogeology and geotechnical engineering",
    },
    {
      title: "Trunk networks and infrastructure",
    },
    {
      title: "Petroleum and Ore Geophysics",
    },
    {
      title: "Applied geology",
    },
    {
      title: "Technology of foundry engineering",
    },
    {
      title: "Technology of core fabrications and new materials",
    },
    {
      title: "Technology of rare and radioactive elements",
    },
    {
      title: "Technology of pharmaceutical production",
    },
    {
      title: "Chemical Technology of Petrochemical and Gas Chemical Products",
    },
    {
      title: "Chemical technology of organic substances",
    },
    {
      title: "Chemical technology for production and processing of polymers",
    },
  ];

  const section3data = [
    { title: "Automation and robotics" },
    { title: "Biomedical engineering" },
    { title: "Information security" },
    {
      title: "Information systems",
    },
    {
      title: "Computer Sciences",
    },
    {
      title: "Space Engineering and Technology",
    },
    {
      title: "Robotics and Mechatronics",
    },
    {
      title: "Telecommunications",
    },
    {
      title: "Electronics and Electrical Engineering",
    },
  ];

  const section4data = [
    { title: "Industrial Engineering" },
    { title: "Engineering mechanics" },
    { title: "Mathematical and computer modeling" },
    {
      title: "Heat Power Engineering",
    },
    {
      title: "Technological machines and equipment",
    },
    {
      title: "Production technology, repair and operation of cars",
    },
    {
      title: "Production technology, locomotive repair and operation",
    },
    {
      title: "Transport Engineering",
    },
    {
      title: "Operational and service engineering",
    },
    {
      title: "Power Engineering",
    },
  ];

  const section5data = [
    { title: "Architecture" },
    { title: "Design" },
    { title: "Occupational Health and Safety" },
    {
      title: "Engineering Systems and Networks",
    },
    {
      title: "Civil Engineering",
    },
    {
      title: "Wood structures design and calculation technology",
    },
    {
      title: "Transportation Engineering",
    },
    {
      title: "Transport Engineering",
    },
    {
      title: "Operational and service engineering",
    },
    {
      title: "Transportation Facilities",
    },
  ];

  const section6data = [
    { title: "Startup Bachelor's Degree" },
    { title: "Business Engineering" },
    { title: "Mathematical Economics and Data Analysis" },
    {
      title: "Transportation Services",
    },
    {
      title: "Digital Logistics",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          {/* display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px; */}
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>O.A. Baikonurov Mining and Metallurgical Institute</h2>
              <p>
                Institute Directorate: Mining and Metallurgy Building (MMB),
                Auditorium 232, 8 (727) 320 40 45.
              </p>
            </div>
            <h2 className={styles.cardTitle}>Educational programs:</h2>
            <div className={styles.cardContainer}>
              {section1data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={{ marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>
                K. Turysoff Institute of Geology and Petroleum Engineering
              </h2>
              <p>
                Institute Directorate: Main academic building, Auditorium 325, 8
                (727) 320 40 41.
              </p>
            </div>
            <h2 className={styles.cardTitle}>Educational programs:</h2>
            <div className={styles.cardContainer}>
              {section2data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={{ marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>Institute of Automatics and Information Technologies</h2>
              <p>
                Institute Directorate: Korean Center, Auditorium 302, 8 (727)
                320 40 44, +7 (727) 320 41 34.
              </p>
            </div>
            <h2 className={styles.cardTitle}>Educational programs:</h2>
            <div className={styles.cardContainer}>
              {section3data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={{ marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>Institute of Power Engineering and Mechanical Engineering</h2>
              <p>
                Institute Directorate: Mechanical Engineering Building (MBC),
                auditorium 27, 8 (727) 320 40 36.
              </p>
            </div>
            <h2 className={styles.cardTitle}>Educational programs:</h2>
            <div className={styles.cardContainer}>
              {section4data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={{ marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>Institute of Architecture and Civil Engineering</h2>
              <p>
                Directorate of the Institute: Small academic building (MUK),
                auditorium 202, 8 (727) 320 41-37.
              </p>
            </div>
            <h2 className={styles.cardTitle}>Educational programs:</h2>
            <div className={styles.cardContainer}>
              {section5data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={{ marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>Project Management Institute</h2>
              <p>
                Institute Directorate: Main academic building, Auditorium 415, 8
                (727) 320 40 91.
              </p>
            </div>
            <h2 className={styles.cardTitle}>Educational programs:</h2>
            <div className={styles.cardContainer}>
              {section6data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
            <div style={{ height: "55px" }}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
