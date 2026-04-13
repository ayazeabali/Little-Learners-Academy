import React from 'react';
import styles from './Header.module.css'; 

export const TopBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src="src\assets\icons\Abstract Design.svg" className={styles.leftIcon} alt="" />
      
      <div className={styles.bannerContent}>
        <span>Admission is Open, Grab your seat now</span>
        <span className={styles.arrow}>→</span>
      </div>

      <img src="src\assets\icons\Group (2).svg" className={styles.rightIcon} alt="" />
    </div>
  );
};