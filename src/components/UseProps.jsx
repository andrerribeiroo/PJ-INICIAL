import React from 'react'
import style from './UseProps.module.css'

const UseProps = () => {

    const imgPadrao = "https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png"

    return (
    <div className={style.card}>
        <img src={imgPadrao} alt="" className={style.img}/>
      <h4>Titulo do Card</h4>
      <p>Descrição do Card</p>
      <button className={style.botao}>Visualizar</button>
    </div>
  )
}

export default UseProps
