'use client'

import { useState } from 'react'
import './comment.css'

function Comment() {
  const [goodClick, setGoodClick] = useState('');
  const [badClick, setBadClick] = useState('');

  const changeGood = () => {
    if (badClick == 'button-comment-bad-click') setBadClick('');

    if (goodClick == '') setGoodClick('button-comment-good-click');
    else setGoodClick(''); 
  }

  const changeBad = () => {
    if (goodClick == 'button-comment-good-click') setGoodClick('');

    if (badClick == '') setBadClick('button-comment-bad-click');
    else setBadClick(''); 
  }

  return (
    <div className='comment'>
        <div className='comment-info'>
            <h3>automan</h3>
            <p>23 февраля 2024</p>
        </div>
        <p>Кузов нужен не только для размещения внутри агрегатов автомобиля и пассажиров с грузом. Это ещё и самый важный элемент пассивной безопасности. Современные кузова рассчитаны так, чтобы при аварии гасить энергию удара за счёт деформации «технических зон»</p>
        <div className='comment-vote'>
          <div className={`button-comment button-comment-good ${goodClick}`} onClick={changeGood}>
            <img src="/good.svg" alt="Icon Good" width={20} height={20} />
            <h4>12</h4>
          </div>
          <div className={`button-comment button-comment-bad ${badClick}`} onClick={changeBad}>
            <img src="/bad.svg" alt="Icon Good" width={20} height={20} />
            <h4>3</h4>
          </div>
        </div>
    </div>
  )
}

export default Comment