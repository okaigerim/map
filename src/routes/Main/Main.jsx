import React from "react";

import { Footer } from "../../components/Footer";

import {
  uni1,
  uni2,
  settings,
  person,
  paint,
  lang,
  book,
  science,
  studentConsult,
  blueCheck,
} from "../../assets/images/index";

import styles from "./main.module.scss";

export const Main = () => {
  const cardData = [
    {
      imgSrc: settings,
      altText: "settings",
      title: "Institute of digital equipment and technologies",
      subtitle:
        "The leading organization in Kazakhstan in the field of industrial automation, big data and machine intelligence.",
    },
    {
      imgSrc: person,
      altText: "person",
      title: "Science & Technology Solutions JSC",
      subtitle:
        "Scientific-technological and educational center, created in order to provide the economy with popular and competitive innovative scientific developments in priority areas of activity.",
    },
    {
      imgSrc: paint,
      altText: "paint",
      title: "Physics and technology institute",
      subtitle:
        "“Physicotechnical Institute” is one of the leading research institutes of Kazakhstan in the field of materials science, high energy physics and cosmic rays.",
    },
    {
      imgSrc: lang,
      altText: "lang",
      title: "Institute of geological sciences of K.I. Satpayev",
      subtitle:
        "The leading geological research center, allowing a wide range of research in the field of regional geology, stratigraphy, mineralogy, geochemistry of solid, liquid and gaseous systems, the study of mineral deposits and oil geology.",
    },
    {
      imgSrc: book,
      altText: "book",
      title: "Institute of Metallurgy and Ore Beneficiation",
      subtitle:
        "A large world-class research institute carrying out fundamental and applied research and the development of new technologies in the field of mineral processing, metallurgy and materials science.",
    },
    {
      imgSrc: science,
      altText: "science",
      title: "Institute of Hydrogeology and Geoecology",
      subtitle:
        "The only scientific organization of the Republic of Kazakhstan in the development of fundamental and applied problems of hydrogeology, geo-ecology and rational integrated use of water resources of the subsoil.",
    },
  ];

  const cardData2 = [
    { title: "7", subtitle: "institutions" },
    { title: "31", subtitle: "departments" },
    { title: "660", subtitle: "teachers" },
    { title: "114", subtitle: "teaching and research laboratories" },
    { title: "11", subtitle: "scientific laboratories" },
    { title: "3", subtitle: "research and educational centers" },
    { title: "2000", subtitle: "grants annually" },
    { title: "14", subtitle: "student organizations" },
  ];

  const mainTextData = [
    { text: "Complete everything as ordered" },
    { text: "Provide your last exam result" },
    { text: "Choose your desired program " },
    { text: "Get contact with the instructor" },
    { text: "Finally get started your program" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.contents}>
          <h2>Learning through research</h2>
          <p>
            The oldest and one of the most prestigious technical universities in
            Kazakhstan, known for the developments in the fields of mining and
            oil business
          </p>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.mainContent}>
          <div className={styles.topText}>
            <h2>Satbayev's Commitment to Academic Excellence</h2>
            <p>
              For more than 80 years, the university has been synonymous with
              technological progress and leadership in Kazakhstan.
            </p>
          </div>
          <div className={styles.secondaryContent}>
            <div className={styles.img1Container}>
              <img src={uni1} alt="uni1" className={styles.img1} />
            </div>
            <div className={styles.img2Container}>
              <img src={uni2} alt="uni2" className={styles.img2} />
              <p>
                As part of transforming related to higher education in
                Kazakhstan K.I. Satbayev University was assigned “National
                Research University” category in 2014 that resulted in
                collaboration with outstanding scientists of the world. Satbayev
                University comprises National Technology Center “Parassat” and 8
                research institutes as well.
              </p>
              <button type="button" className={styles.btn1}>
                Read more
              </button>
            </div>
            <div className={styles.cardContainer}>
              {cardData2.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.mainContent}>
          <div className={styles.topText}>
            <h2>Explore Our Academic Offerings Chart Your Path to Success</h2>
            <p>
              The university curriculum introduces the teaching of modern
              specialties, in which currently there are no specialists in
              Kazakhstan.
            </p>
          </div>
          <div className={styles.cardContainer}>
            {cardData.map((item, index) => (
              <div className={styles.cardItem} key={index}>
                <img
                  src={item.imgSrc}
                  alt={item.altText}
                  className={styles.cardItemImg}
                />
                <div className={styles.cardItemText}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.mainContent}>
          <div className={styles.topText}>
            <h2>Student Admission Process and Assistance from us</h2>
            <p>
              Get higher education in the technical university №1 of Kazakhstan
            </p>
          </div>
          <div className={styles.secondaryContent}>
            <img src={studentConsult} alt="students" className={styles.img1} />
            <div className={styles.textContent}>
              {mainTextData.map((item, index) => (
                <div className={styles.mainText} key={index}>
                  <img
                    src={blueCheck}
                    alt="blueCheck"
                    className={styles.checkImg}
                  />
                  <p className={styles.subtext}>{item.text}</p>
                </div>
              ))}
              <button type="button" className={styles.btn}>
                See all our admission
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
