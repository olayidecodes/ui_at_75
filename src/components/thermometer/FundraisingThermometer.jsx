import React from "react";
import styles from "./page.module.css";

const FundraisingThermometer = ({current, goal}) => {

  const url = `http://www.silentpartnersoftware.com/fundraising-thermometer?currency=dollar&current=${current}&goal=${goal}&color=5da0df&size=medium`

  return (
    <a
      href="https://www.silentpartnersoftware.com/free-tools/fundraising-thermometer/"
      title="Fundraising Thermometer"
    >
      <img
        decoding="async"
        border="0"
        src={url}
        alt="Fundraising Thermometer"
        className={styles.thermometer}
      />
    </a>
  );

};

export default FundraisingThermometer;
