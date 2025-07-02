import React from "react";
import styles from "../styles/index.module.css";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function Car({ imgSrc, model, testDrive }) {
  return (
    <>
      <div className={styles.car}>
        <div className={styles.carImg}>
          <img src={imgSrc} alt={model} />
        </div>
        <h2 className={styles.carModel}>{model}</h2>
        <div className={styles.carActions}>
          <PrimaryButton name="order" />
          {testDrive && <SecondaryButton name="test drive" />}
        </div>
        <div className={styles.carInfo}>
          <span>Request a Call</span> to speak with a product specialist, value
          your trade-in or apply for leasing
        </div>
      </div>
    </>
  );
}

export default Car;
