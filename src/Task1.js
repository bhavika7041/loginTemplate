
import './Task.css';

function Task1() {


    return (

        <section className='section-color'>
            <div className='section-div'>
                <form>
                    <h1 className='title'>Contact Us</h1>
                    <p className='description'>
                        Feel free to contact us if you need any assistance, any help or another question.
                    </p>
                    <div>
                        <input type='text' className='input' placeholder='Name'></input>
                    </div>
                    <div>
                        <input type='email' className='input' placeholder='Email'></input>
                    </div>
                    <div>
                        <textarea className='textarea' placeholder='Address' ></textarea>
                    </div>
                    <div className='btn-container'>
                        <input type='submit' value='send' className='btn' />
                    </div>
                </form>
            </div>
        </section>

    )

};

export default Task1