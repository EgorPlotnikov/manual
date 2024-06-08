import { GetDate } from "@/app/functions/GetDate"
import TextArea from '@/app/components/TextArea'
import Comment from '@/app/components/Comment'
import Button from '@/app/components/Button'
import '@/app/failure/failure.css'
import LinkBox from "@/app/components/LinkBox"
import { FetchData } from "@/app/functions/FetchData"
import AddLinkBox from "@/app/components/AddLinkBox"

export default async function FailureId({params}) {
    let req = 'failure.' + params.failureId;
    const data = await FetchData('getPostAndLinks', req)

    let showLinks = [];
    for (let i = 1; i < data.length; i++) {
      if (data[i] != null) showLinks.push(<LinkBox data={data[i]} type={'instruction'} key={data[i]._id} />)
    }


    return (
        <div className='main-container'>
        <div className='slim-container'>
          <div className='heading-box'>
            <p style={{'color': 'var(--text-blue)', 'cursor': 'pointer'}}>{data[0].make + ' ' + data[0].model}</p>
            <h2>{data[0].heading}</h2>
            <div className="info">
                <h3>{data[0].author}</h3>
                <p style={{'color': 'var(--secondary-text)'}}>{GetDate(data[0].date)}</p>
            </div>
          </div>
  
          <div className='content-box' dangerouslySetInnerHTML={{__html: data[0].text}}></div>
  
            <div className="links-block">
                <div className="links-block-head">
                    <p style={{'color': 'var(--text-blue)', 'cursor': 'pointer'}}>{data[0].make + ' ' + data[0].model}</p>
                    <h1>Инструкции</h1>
                </div>

                {showLinks}

                <AddLinkBox failureId={params.failureId} />
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