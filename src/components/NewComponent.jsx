import React from 'react';
import "./NewComponent.css";

const NewComponent = () => {
  const isGerente = false;

  return (
    <div>
      <h1 
        style={ isGerente 
          ? { color: "aquamarine", backgroundColor: "Pink" } 
          : { color: "white", backgroundColor: "lightblue" } }
      >
        Aqui vem uma estilização
      </h1>
      <h3 id='cr7' style={{ fontSize: "90px", margin: "0px" }}>Neymar</h3>
      <img style={{height:"700px", width:"auto"}} id='fotoneymar' src="neymar.webp" alt="Neymar" />
    </div>
  );
};

export default NewComponent;



/*

style={ isGerente 
? {color:"aquamarine, backgroundcolor:"Pink"}} 
: {color: "red", backgroundcolor: "lightblue"} 

*/