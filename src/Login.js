import { useRef } from 'react'
import './Login.css'

function Login() {

    let email = useRef()
    let password = useRef()


    function onClickSubmit(e){
        let emailVal = email.current.value
        let passVla  = password.current.value
        
        // console.log(email.current.val,password)
        // console.log(emailVal,passVla)
    }

    return (

        <section className='section-color '>

            <div className='section2 f' style={{ padding: '30px' }}>
                <div>
                    <h1 className='h'>Login Form</h1>
                </div>

                <div>
                    <div>
                        <input type='text' ref={email} placeholder='Email Address' className='d-block i c' style={{ width: '90%', padding: '8px' }} />
                        <label className='i font'>Email can't be blank</label>
                    </div>

                    <div className='text'>
                        <input type='text' ref={password} placeholder='Password' className='d-block i c' style={{ width: '90%', padding: '8px' }} />
                        <label className='i font'>password can't be blank</label>
                    </div>
                </div>

                <div className='text'>
                    <label className='i' style={{ color: '#2a9df4' }}>Forgot password?</label>
                </div>

                <div>
                    <button type='button' onClick={onClickSubmit} className='i btn' style={{ width: '92%', padding: '8px', margin: '15px' }}>
                        Login
                    </button>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <label className='i'>Not Yet member? <a href='#'>Signup now</a></label>
                </div>

            </div>
        </section>
    )
}

export default Login