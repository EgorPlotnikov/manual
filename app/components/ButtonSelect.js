'use client'
import { useRouter } from 'next/navigation'
import './buttonselect.css'

function ButtonSelect({ type }) {
    const router = useRouter();

    let first = 'default'
    let second = 'active'

    if (type == 'failure') {
      first = 'active'
      second = 'default'
    }

  return (
    <div className='button-select'>
        <div className={`button-select-${first}`} onClick={() => {router.push('/failure')}} >
            <h2>Неисправности</h2>
        </div>
        <div className={`button-select-${second}`} onClick={() => {router.push('/instruction')}} >
            <h2>Инструкции</h2>
        </div>
    </div>
  )
}

export default ButtonSelect