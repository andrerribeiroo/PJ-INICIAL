import React from "react";
import UseProps from "./UseProps";

import { useState } from "react";

import styles from "./AulaQuatro.module.css";

const AulaQuatro = () => {
  const imgPadrao =
    "https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png";
  const imgPadrao2 =
    "https://www.imagensempng.com.br/wp-content/uploads/2023/12/Logo-GTA-6-PNG-Simbolo-Grand-theft-Auto-Vice-City.png";

  //criando os objetos do props
  const [card] = useState([
    { imagem: imgPadrao, titulo: "Titulo 1", descricao: "Descrição 1" },
    { imagem: imgPadrao2, titulo: "Titulo 2", descricao: "Descrição 2" },
    { imagem: imgPadrao, titulo: "Titulo 3", descricao: "Descrição 3" },
    { imagem: imgPadrao2, titulo: "Titulo 4", descricao: "Descrição 4" },
    { imagem: imgPadrao, titulo: "Titulo 5", descricao: "Descrição 5" },
    { imagem: imgPadrao2, titulo: "Titulo 6", descricao: "Descrição 6" },
  ]);

  return (
    <div className={styles.container}>
      <h1>Cards Incríveis</h1>
      {/* passando os objetos para o componente UseProps */}
      <div className={styles.cards}>
        {card.map((item, index) => (
          <UseProps
            key={index}
            imagem={item.imagem}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>
    </div>
  );
};

export default AulaQuatro;
