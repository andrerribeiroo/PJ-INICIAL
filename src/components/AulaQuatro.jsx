import React from "react";
import UseProps from "./UseProps";
import styles from "./AulaQuatro.module.css";

const AulaQuatro = () => {
  return (
    <div className={styles.container}> 
      <h1>Cards Incríveis</h1>
      <div className={styles.cardArea}>
        <UseProps />
        <UseProps />
        <UseProps />
        <UseProps />
        <UseProps />
        <UseProps />
      </div>
    </div>
  );
};

export default AulaQuatro;
