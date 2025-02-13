import React from 'react'
import style from './UseProps.module.css'

const UseProps = (props) => {

    console.log(props);

    return (
    <div className={style.card}>
        <img src={props.imagem} alt="" />
      <h4>{props.titulo}</h4>
      <p>{props.descricao}</p>
      <button className={style.btn}>Visualizar</button>
    </div>
  )
}

export default UseProps
