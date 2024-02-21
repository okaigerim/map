import React from "react";

import { Footer } from "../../components/Footer/index";

import { calendar } from "../../assets/images/index";
import styles from "./admission.module.scss";

export const Admission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.section1}>
          <div className={styles.topText}>
            <h2>Student Admission Process and Assistance from us</h2>
            <p>
              Get higher education in the technical university №1 of Kazakhstan
            </p>
          </div>

          <div className={styles.stepperCard}>
            <div className={styles.titles}>
              <p className={styles.title}>
                UNT submission and receiving a grant
              </p>
              <div className={styles.subCard}>
                <img src={calendar} alt="calendar" className={styles.img}/>
                <p className={styles.subtitle}>4 times a year</p>
              </div>
            </div>
            <div className={styles.stepperAnchor}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
