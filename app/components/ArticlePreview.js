'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import "./articlepreview.css"
import Button from "./Button";
import { GetRating } from "../functions/GetRating";
import { GetDate } from '../functions/GetDate';

function ArticlePreview( {data, type} ) {
  const router = useRouter();

  let toPage = ``;

  function Router(nav) {
    router.push(nav);
  }

  let text
  try {
    text = data.text.match(/<p>(.*?)<\/p>/)[1].replace(/&nbsp;/g, '\u00A0')
  } catch (e) {
    console.log(e);
  }

  let images = Array.from(data.text.matchAll(/<img src="(.*?)">/g))
  if (images.length > 4) {
    images = images.slice(0,4);
  }

  let showImages = [];
  images.forEach(element => {
    showImages.push(<img src={element[1]} alt='Article Image'
                      width={244} height={164} key={element[1]}/>);
  });

  let showContent = [];
  if (type == 'tutorial') {
    toPage = `/tutorial/${data._id}`;
    let rating = GetRating(data.votefor, data.voteagainst);
    showContent.push(null);
    showContent.push(<div className="article-preview-info-rating"><p style={{"color": "var(--secondary-text)"}} >Рейтинг</p><h3 style={{"color": `var(${rating[1]})`}}>{rating[0]}%</h3></div>);
    showContent.push(null);
  }
  if (type == 'failure') {
    toPage = `/failure/${data._id}`;
    showContent.push(<p style={{"color": `var(--text-blue)`}} >{data.make + ' ' + data.model}</p>);
    showContent.push(<p style={{"color": "var(--secondary-text)"}}>{GetDate(data.date)}</p>);
    showContent.push(null);
  }
  if (type == 'instruction') {
    let rating = GetRating(data.votefor, data.voteagainst);
    toPage = `/instruction/${data._id}`;
    showContent.push(<p style={{"color": `var(--text-blue)`}} >{data.make + ' ' + data.model}</p>);
    showContent.push(<p style={{"color": "var(--secondary-text)"}}>{GetDate(data.date)}</p>);
    showContent.push(<div className="article-preview-info-rating"><p style={{"color": "var(--secondary-text)"}} >Рейтинг</p><h3 style={{"color": `var(${rating[1]})`}}>{rating[0]}%</h3></div>);
  }


  return (
    <div className="article-preview" key={data._id}>
        {showContent[0]}
        <h2 onClick={() => {Router(toPage)}}>{data.heading}</h2>
        <div className="article-preview-info">
            <h3>{data.author}</h3>
            {showContent[1]}
            {showContent[2]}
        </div>
        <div className="article-preview-pics">
          {showImages}
        </div>
        <p className="text-preview" style={{"margin": "16px 0px 16px 0px"}} dangerouslySetInnerHTML={{__html: text}} ></p>
        <Button title={'Читать'} type={'default'} onClick={() => {Router(toPage)}} />
    </div>
  )
}

export default ArticlePreview