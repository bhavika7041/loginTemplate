import './Task2.css'

function Task2(){

    return(

            <section className='section-color'>
                <div className='section-code'>
                    <form>
                        <div className='mb'>
                            <label>Email</label>
                            <input type='email' placeholder='example@example.com' className='input'/>
                        </div> 

                        <div className='mb'> 
                            <label>Password</label>
                            <input type='password' placeholder='*****'  className='input'/>
                        </div>

                        <div className='mb'>
                            <input type='checkbox'/> <span>Remember Me</span>
                         </div>

                         <div className='text-right'>
                             <a>Forget Your Password?</a>
                             <button className='btn'>SIGN IN</button>
                         </div>



                    </form>

                </div>

            </section>








    )
}

export default Task2