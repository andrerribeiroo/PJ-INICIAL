import React from "react";
import UseProps from "./UseProps";
import style from "./AulaQuatro.module.css";

const AulaQuatro = () => {
  return (
    <div className={style.container}>
      <h1>Cards Incríveis</h1>
      <div className={style.cardArea}>
        <UseProps />
        <UseProps />
        <UseProps />
        <UseProps />
      </div>
    </div>
  );
};

export default AulaQuatro;
