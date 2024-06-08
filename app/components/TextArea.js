'use client'

import './textarea.css'
import { useEffect, useRef, useState } from 'react'

function TextArea({title, inputData, disabled}) {
    const [value, setVal] = useState("");
    const textAreaRef = useRef(null);

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    function passHeading() {
        inputData(value);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [value])

    return (
        <div className='textarea-box'>
            <textarea id='1' wrap='soft' rows='1' placeholder={title} value={value} onChange={handleChange} onBlur={passHeading} ref={textAreaRef} disabled={disabled} />
        </div>
    )
}

export default TextArea