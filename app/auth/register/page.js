'use client'

import '../auth.scss'
import Button from '../../components/Button'
import { useRouter } from 'next/navigation'

function Register() {
    const router = useRouter();

  return (
    <div className='main-container'>
        <div className='top-box'>
            <div className='button-choose'>
                <div className='button-choose-one' onClick={() => router.push('login')} >
                    <h3>Вход</h3>
                </div>
                <div className='button-choose-two button-choose-click'>
                    <h3>Регистрация</h3>
                </div>
            </div>
            <div className='input-box'>
                <input className='enter-login' placeholder='Логин' type='email' />
                <input className='enter-password' placeholder='Пароль' type='password'/>
            </div>
        </div>
        <Button title='Войти' type={'default'} />
    </div>
  )
}

export default Register