'use client'
import '../create.css'
import TextArea from "@/app/components/TextArea";
import Button from "@/app/components/Button";
import Tiptap from "@/app/components/Tiptap";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { AddData } from "@/app/functions/AddTutorial"


function Create() {
  const router = useRouter();

  const [heading, setHeading] = useState('');
  const [author, setAuthor] = useState("");
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit() {
    let response = await AddData(heading, author, text);
    if (response == 'ok') {
      router.push('/tutorial');
    } else {setError(response)}
  }

  return (
    <div className="main-container">
      <div className="slim-container">
        <h1>Создать статью</h1>
        {error ? <p className="alert-error">{error}</p> : null}
        <div className="create-tutorial-box">
            <TextArea title={'Заголовок статьи'} inputData={setHeading} />
            <TextArea title={'Автор'} inputData={setAuthor}/>
            <Tiptap inputData={setText} />
            <Button title={'Опубликовать'} type={'default'} onClick={() => {handleSubmit()}} />
        </div>
      </div>
    </div>
  )
}

export default Create