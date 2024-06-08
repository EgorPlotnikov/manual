'use client'

import { useRouter } from 'next/navigation';
import { GetDate } from '../functions/GetDate'
import { GetRating } from '../functions/GetRating'
import './linkbox.css'
import React from 'react'

function LinkBox( { data, type } ) {

  const router = new useRouter();

  function Router(nav) {
    router.push(nav);
  }

  let showContent = [];

  if (type == 'instruction') {
    let rating = GetRating(data.votefor, data.voteagainst);
    showContent.push(<p style={{'color': 'var(--text-blue)'}}>Инструкция от пользователя</p>)
    showContent.push(
      <div className="link-box-info-rating">
        <p style={{color: "var(--secondary-text)"}} >Рейтинг</p>
        <h3 style={{color: `var(${rating[1]})`}} >{rating[0]}%</h3>
      </div>
    )
  }
  if (type == 'failure') {
    showContent.push(<p style={{'color': 'var(--text-blue)'}}>{data.make + ' ' + data.model}</p>)
    showContent.push(null)
  }

  return (
    <div className="link-box">
        {showContent[0]}
        <h2 onClick={() => {Router(`/${type}/${data._id}`)}} style={{'cursor': 'pointer'}} >{data.heading}</h2>
        <div className="link-box-info">
            <h3>{data.author}</h3>
            <p style={{'color': 'var(--secondary-text)'}}>{GetDate(data.date)}</p>
            {showContent[1]}
        </div>
    </div>
  )
}

export default LinkBox