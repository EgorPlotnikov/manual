import { GetDate } from "@/app/functions/GetDate"
import TextArea from '@/app/components/TextArea'
import Comment from '@/app/components/Comment'
import Button from '@/app/components/Button'
import '@/app/instruction/instruction.css'
import LinkBox from "@/app/components/LinkBox"
import { GetRating } from '@/app/functions/GetRating'
import RatingBox from '@/app/components/RatingBox'
import { FetchData } from "@/app/functions/FetchData"

export default async function InstructionId({params}) {
    let req = 'instruction.' + params.instructionId;
    const data = await FetchData('getPostAndLinks', req)

    let showLinks = [];
    for (let i = 1; i < data.length; i++) {
      if (data[i] != null) showLinks.push(<LinkBox data={data[i]} type={'failure'} key={data[i]._id} />)
    }

    let rating = GetRating(data[0].votefor, data[0].voteagainst);


    return (
        <div className='main-container'>
        <div className='slim-container'>
          <div className='heading-box'>
            <p style={{'color': 'var(--text-blue)', 'cursor': 'pointer'}}>{data[0].make + ' ' + data[0].model}</p>
            <h2>{data[0].heading}</h2>
            <div className="info">
                <h3>{data[0].author}</h3>
                <p style={{'color': 'var(--secondary-text)'}}>{GetDate(data[0].date)}</p>
                <div className="info-rating">
                  <p style={{color: "var(--secondary-text)"}} >Рейтинг</p>
                  <h3 style={{color: `var(${rating[1]})`}} >{rating[0]}%</h3>
                </div>
            </div>
          </div>
  
          <div className='content-box' dangerouslySetInnerHTML={{__html: data[0].text}}></div>

          <RatingBox type={'default'} rating={GetRating(data[0].votefor, data[0].voteagainst)} data={data[0]} />
  
            <div className="links-block">
                <div className="links-block-head">
                    <h1>Неисправности</h1>
                </div>

                {showLinks}

            </div>
  
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