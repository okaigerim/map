import React from "react";

import { uni1 } from "../../assets/images/index";
import { uni2 } from "../../assets/images/index";
import styles from "./main.module.scss";

export const Main = () => {
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
              <div className={styles.card}>
                <p className={styles.title}>7</p>
                <p className={styles.subtitle}>institutions</p>
              </div>
              <div className={styles.card}>
                <p className={styles.title}>31</p>
                <p className={styles.subtitle}>departments</p>
              </div>
              <div className={styles.card}>
                <p className={styles.title}>660</p>
                <p className={styles.subtitle}>teachers</p>
              </div>
              <div className={styles.card}>
                <p className={styles.title}>114</p>
                <p className={styles.subtitle}>
                  teaching and research laboratories
                </p>
              </div>
              <div className={styles.card}>
                <p className={styles.title}>11</p>
                <p className={styles.subtitle}>scientific laboratories</p>
              </div>
              <div className={styles.card}>
                <p className={styles.title}>3</p>
                <p className={styles.subtitle}>
                  research and educational centers
                </p>
              </div>
              <div className={styles.card}>
                <p className={styles.title}>2000</p>
                <p className={styles.subtitle}>grants annually</p>
              </div>
              <div className={styles.card}>
                <p className={styles.title}>14</p>
                <p className={styles.subtitle}>student organizations</p>
              </div>
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
        </div>
      </div>
    </div>
  );
};
