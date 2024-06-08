'use client'

import React, { useState } from 'react'
import Button from '@/app/components/Button'
import AddLink from '../functions/AddLink';

function AddLinkBox( {failureId} ) {

  const [instructionId, setInstructionId] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    setMessage(AddLink(instructionId, failureId));
  }

  return (
    <div className="links-block-add">
        <input id="2" value={instructionId} onChange={e => setInstructionId(e.target.value)} placeholder="Введите ID, чтобы добавить ссылку на инструкцию" />
        {message ? <p>{message}</p> : null}
        <Button title={'Добавить инструкцию'} type={'default'} onClick={() => {handleSubmit()}} />
    </div>
  )
}

export default AddLinkBox