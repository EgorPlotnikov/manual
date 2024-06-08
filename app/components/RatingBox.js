'use client'
import { useState } from 'react';
import './ratingbox.css'

function RatingBox({type, rating}) {
    const [styleGood, setStyleGood] = useState(type);
    const [styleBad, setStyleBad] = useState(type);

    const changeStyleGood = () => {
        if (styleBad == 'clicked') setStyleBad('default');

        if (styleGood == 'default') setStyleGood('clicked');
        else setStyleGood('default'); 
    }

    const changeStyleBad = () => {
        if (styleGood == 'clicked') setStyleGood('default');

        if (styleBad == 'default') setStyleBad('clicked');  
        else setStyleBad('default');
    }

  return (
    <div className='rating-box'>
        <div style={{'display': 'flex', 'gap': '32px'}}>
            <div className='rating-box-rating'>
                <h1 style={{'color': `var(${rating[1]})`}}>{rating[0]}%</h1>
                <p style={{'color': 'var(--secondary-text)'}}>Рейтинг</p>
            </div>
            <div className='rating-box-num'>
                <h1 style={{'color': 'var(--secondary-text)'}}>{rating[2]}</h1>
                <p style={{'color': 'var(--secondary-text)'}}>Оценки</p>
            </div>
        </div>

        <div className='rating-box-vote'>
            <div className='rating-box-vote-buttons-box'>
                <div className={`button-rating button-rating-good-${styleGood}`} onClick={changeStyleGood} >
                    <div className='icon-box'>
                        <img src="/good.svg" alt="Icon Good" width={20} height={20} />
                    </div>
                    <p>Полезно</p>
                </div>
                <div className={`button-rating button-rating-bad-${styleBad}`} onClick={changeStyleBad} >
                    <div className='icon-box'>
                        <img src="/bad.svg" alt="Icon Bad" width={20} height={20} />
                    </div>
                    <p>Бесполезно</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RatingBox