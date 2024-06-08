import React from 'react'
import './tutorial.css'
import RatingBox from '@/app/components/RatingBox'
import TextArea from '@/app/components/TextArea'
import Comment from '@/app/components/Comment'
import Button from '@/app/components/Button'
import { FetchData } from "@/app/functions/FetchData"
import { GetDate } from "@/app/functions/GetDate"
import { GetRating } from '@/app/functions/GetRating'


async function Tutorial({params}) {
  let data = await FetchData('getPost', params.id);
  let rating = GetRating(data.votefor, data.voteagainst);

  return (
    <div className='main-container'>
      <div className='slim-container'>
        <div className='heading-box'>
          <p style={{'color': 'var(--text-blue)', 'cursor': 'pointer'}}>Учебник</p>
          <h2>{data.heading}</h2>
          <div className="info">
              <h3>{data.author}</h3>
              <p style={{'color': 'var(--secondary-text)'}}>{GetDate(data.date)}</p>
              <div className="info-rating">
                  <p style={{color: "var(--secondary-text)"}} >Рейтинг</p>
                  <h3 style={{color: `var(${rating[1]})`}} >{rating[0]}%</h3>
              </div>
          </div>
        </div>

        <div className='content-box' dangerouslySetInnerHTML={{__html: data.text}}></div>

        <RatingBox type={'default'} rating={rating} data={data} />

        <div className='comment-box'>
          <h1>Комментарии</h1>
          <div className='comment-box-leave'>
            <TextArea title={'Написать комментарий...'} disabled={false}/>
            <Button title={'Отправить'} type={'inactive'}/>
          </div>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  )
}

export default Tutorial