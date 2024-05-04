import React from "react";

import useIsMobile from "../../utils/useIsMobile";

import styles from "./campusnavigation.module.scss";

export const CampusNavigation = () => {
  const isMobile = useIsMobile();

  return(
    <div className={isMobile ? styles.mobileContainer : styles.container}>
      <div className={styles.main}>
        <h2>Карта кампуса</h2>
        <iframe style={{width: '95%', padding: isMobile ? '10px' : '10vh', height: '80vh'}} frameBorder={0} href="https://www.mappedin.com/" title="Mappedin Map" name="Mappedin Map" src="https://app.mappedin.com/map/662640c03d4f85efee0e4886?embedded=true"></iframe>
      </div>
    </div>
  )
}