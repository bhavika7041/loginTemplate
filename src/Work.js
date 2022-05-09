import './Work.css'

function Work() {
    return (
        <section> 
            <div style={{width : "50%", borderBottom:'5px solid #029779',borderRadius : '10px',boxShadow : '1px 1px 10px #c5c5c5'}}>

                <div className='section b'>
                    <div>Rank</div>
                    <div>Name</div>
                    <div>Points</div>
                    <div>Team</div>
                </div>
                <div className='section'>
                    <div>1</div>
                    <div>Domenic</div>
                    <div>88,110</div>
                    <div>dcode</div>
                </div>
                <div className='section b1'>
                    <div>2</div>
                    <div>Sally</div>
                    <div>72,400</div>
                    <div>Students</div>
                </div>
                <div className='section'>
                    <div>3</div>
                    <div>Nick</div>
                    <div>52,300</div>
                    <div>dcode</div>
                </div>
            </div>
        </section>
    )
}
export default Work