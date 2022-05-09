import { useRef,useState } from 'react'
import './Login2.css'

function Login2() {

    let username = useRef()
    let password = useRef()

    function onClickSubmit(){
        console.log(username.current.value, password.current.value)
    }

    return (

        <section className='section-color'>

            <div>
                <div className='div1'>

                    <div className='l' style={{ marginTop: '20px', fontSize: '30px', fontWeight: 'bolder' }}>
                        <label >Login Form</label>
                    </div>

                    <div style={{ marginTop: '20px' }} >
                        <div className='left'>
                            <input type='text' ref={username} placeholder='User Name' style={{ width: '88%', padding: '15px', fontSize: '20px' }} />
                        </div>
                        <div className='left' style={{ marginTop: '20px' }}>
                            <input type='password' ref={password} placeholder='Password' style={{ width: '88%', padding: '15px', fontSize: '20px' }} />
                        </div>
                    </div>
                    <div className='l' style={{ marginTop: '28px' }}>
                        <button type='button' onClick={onClickSubmit} className='p'>Sign In</button>
                    </div>
                </div>

                <label> Forgot your password? Click Here!</label>
            </div>

        </section>
    )
}

export default Login2