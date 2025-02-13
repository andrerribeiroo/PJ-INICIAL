import React from "react";
import UseProps from "./UseProps";
import styles from "./AulaQuatro.module.css";

const AulaQuatro = () => {
<<<<<<< Updated upstream
=======
  return (
    <div>
      <h1>Cards incriveis</h1>
      <UseProps/>
    </div>
  )
}
>>>>>>> Stashed changes

   const imgPadrao = "https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png";

   const imgPadrao2 = "https://www.imagensempng.com.br/wp-content/uploads/2023/12/Logo-GTA-6-PNG-Simbolo-Grand-theft-Auto-Vice-City.png";


  return (
    <div className={styles.container}> 
      <h1>Cards Incríveis</h1>
      <div className={styles.cardArea}>
        <UseProps id="1" imagem={imgPadrao} titulo="Titulo new" descricao="Em breve..."/>
        <UseProps id="2" imagem={imgPadrao2} titulo="GTA VI" descricao="GAME EM LANÇAMENTO!!"/>
        <UseProps id="3" imagem={imgPadrao} titulo="Titulo new" descricao="Em breve..."/>
        <UseProps id="4" imagem={imgPadrao2} titulo="GTA VI" descricao="GAME EM LANÇAMENTO!!"/>
        <UseProps id="5" imagem={imgPadrao} titulo="Titulo new" descricao="Em breve..."/>
        <UseProps id="6" imagem={imgPadrao2} titulo="GTA VI" descricao="GAME EM LANÇAMENTO!!"/>
      </div>
    </div>
  );
};

export default AulaQuatro;
