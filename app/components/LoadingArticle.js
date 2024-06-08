import React from 'react'
import './articlepreview.css'

function LoadingArticle() {

  return (
    <div className="article-preview">
        <h2 className="skeleton">Общее устройство автомобиля: изучаем строение машины</h2>
        <div className="article-preview-info">
            <div className="article-preview-info-rating">
                <p className="skeleton">auto.ru ЖурналMMauto.ru ЖурналMMauto.ru Журнал</p>
            </div>
        </div>
        <div className="article-preview-pics">
            <div className="img-div skeleton"/>
            <div className="img-div skeleton"/>
            <div className="img-div skeleton"/>
            <div className="img-div skeleton"/>
        </div>
        <p className="text-preview skeleton" style={{"margin": "16px 0px 16px 0px"}}>Общее устройство автомобиля раньше преподавали в автошколе. Но сегодня многие, даже некоторые опытные водители не представляют, из чего состоит машина. Мы решили восполнить эти пробелы и подготовили небольшой ликбез (стараясь обойтись без сложных терминов) о том, из каких основных частей состоит автомобиль.</p>
    </div>
  )
}

export default LoadingArticle