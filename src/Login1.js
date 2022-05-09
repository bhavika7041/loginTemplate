import { useRef } from 'react'
import './Login1.css'

function Login1() {

    let username = useRef()
    let password = useRef()

    function onClickSubmit() {
        console.log(username.current.value, password.current.value)
    }

    return (
        <section className='section-color'>
            <div className='div1'>
                <div className='head'>
                    <h1 className='u'>Login</h1>
                </div>
                <div className='head b'>
                    <label className='u'>Sorry,That login is incorrect</label>
                </div>
                <div className='head'>
                    <div>
                        <label className='d-block u'>Username:</label>
                        <input type='text' ref={username} className='i top' />
                    </div>
                    <div>
                        <label className='d-block u'>Password:</label>
                        <input type='password' ref={password} className='i top' />
                    </div>
                </div>
                <div className='t'>
                    <button type='button' onClick={onClickSubmit} style={{ width: '91%', padding: '14px' }} className='btn'>Login</button>
                </div>
            </div>
        </section>
    )
}
export default Login1