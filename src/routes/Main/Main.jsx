import React from "react";

import { uni1 } from '../../assets/images/index'
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

              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
