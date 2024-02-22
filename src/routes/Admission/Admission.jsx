import React from "react";

import  StepperAnchor  from "../../components/StepperAnchor";
import { Footer } from "../../components/Footer/index";

import { calendar } from "../../assets/images/index";
import styles from "./admission.module.scss";

export const Admission = () => {
  const steps = [
    {
      id: 1,
      title: 'May 16 – July 5',
      isDone: false,
      subtitle2:
        'Apply for UNT testing at app.testcenter.kz and take the UNT',
    },
    {
      id: 2,
      title: 'June 20 – July 7',
      isDone: false,
      subtitle2:
        'Take creative exams if you have chosen a creative education program',
    },
    {
      id:3,
      title: 'July 13 – July 20',
      isDone: false,
      subtitle2:
        'Apply for a state educational grant at app.testcenter.kz',
    },
    {
      id:4,
      title: 'Get a grant',
      isDone: false,
      subtitle1: '04.04.2023, 12:51',
      subtitle2:
        'Grant competition results are published in early August',
    },
  ];

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
                <img src={calendar} alt="calendar" className={styles.img} />
                <p className={styles.subtitle}>4 times a year</p>
              </div>
            </div>
            <div className={styles.stepperAnchor}>
              <StepperAnchor steps={steps} mode="blue" />
            </div>
          </div>
          <div style={{height: '30px', backgroundColor: '#f5f5f5'}}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
