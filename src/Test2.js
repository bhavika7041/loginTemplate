import { useState } from 'react'

function Test2() {

    let [decrementVal, setDecrementVal] = useState(5)
    function onClickdecrement() {
        if (decrementVal <= 0) {
            alert("can not be less than 0")
        } else {
            setDecrementVal(--decrementVal)
        }
    }
    return (

        <div>
            <h1>{decrementVal}</h1>

            <button type="button" onClick={onClickdecrement}> substract</button>
        </div>
    )
}

export default Test2