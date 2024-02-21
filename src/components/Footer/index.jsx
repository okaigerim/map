import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.col1}>
          <p className={styles.title}>Satbayev University</p>
          <p className={styles.subtitle}>Learning through research</p>
        </div>
        <div className={styles.col2}>
          <p className={styles.title}>Quick Links</p>
          <Link className={styles.subtitle}>Home</Link>
          <Link className={styles.subtitle}>Admissions</Link>
          <Link className={styles.subtitle}>Academics</Link>
          <Link className={styles.subtitle}>Contact Us</Link>
        </div>
        <div className={styles.col2}>
          <p className={styles.title}>Pages</p>
          <Link className={styles.subtitle}>Our Blog</Link>
          <Link className={styles.subtitle}>Our Team</Link>
          <Link className={styles.subtitle}>Testimonial</Link>
          <Link className={styles.subtitle}>CTA</Link>
        </div>
        <div className={styles.col2}>
          <p className={styles.title}>Follow Us</p>
          <Link to='https://www.facebook.com/satbayevuniversity/' target='_blank' className={styles.subtitle}>Facebook</Link>
          <Link to='https://www.instagram.com/satbayev_university/' target='_blank' className={styles.subtitle}>Instagram</Link>
          <Link to='https://t.me/s/Satbayev_University_Official?before=191' target='_blank' className={styles.subtitle}>Telegram</Link>
          <Link to='https://www.youtube.com/user/TheKazntu/featured' target='_blank' className={styles.subtitle}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};
