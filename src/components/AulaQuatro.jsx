import React from "react";
import UseProps from "./UseProps";
import style from "./AulaQuatro.module.css";

const AulaQuatro = () => {
  return (
    <div>
      <div className={style.cardArea}>
        <h1>Cards Incríveis</h1>
        <UseProps />
        <UseProps />
        <UseProps />
      </div>
    </div>
  );
};

export default AulaQuatro;
