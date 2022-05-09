import './Task4.css'

function Task4() {
    return (

        <section className='section-color'>
            <div className='section2'>
                <div>
                    <h1 className='head'>Register</h1>
                    <p className='head'>
                        To Register, please take the time to fill out the
                        information below.
                    </p>
                </div>

                <div style={{display:'flex', justifyContent:'center', alignItem:'center'}}>
                    <div>
                        <div className='div-1'>
                            <div className='d'>
                                <label>First Name</label>
                                <input type='text' style={{padding:'10px'}}/>
                            </div>
                            <div className='d'>
                                <label>Last Name</label>
                                <input type='text' style={{padding:'10px'}} />
                            </div>
                        </div>

                       <div className='div2'>
                            <div>
                                <label>Email</label>
                                <input type='email' style={{width:'88%' , padding:'10px'}}  />
                            </div>
                        </div>

                        <div className='div-1'>
                            <div className='d'>
                                <label className='d-block'>Phone</label>
                                <input type='tel'style={{padding:'10px'}} />
                            </div>
                            <div className='d'>
                                <label>Birthday</label>
                                <input type='date' style={{width:'86%' , padding:'10px'}}  />
                            </div>
                        </div>

                        <div className='div2'>
                            <div>
                                <label>Address</label>
                                <textarea type='address' style={{width:'92%'}}></textarea>
                            </div>
                        </div>

                        <div style={{textAlign:'center', paddingTop:'20px'}}>
                            <button className='btn' style={{padding:'4%'}}>
                            Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Task4