
import { useState } from 'react'

function Test1() {

    let [incrementVal, setIncrementVal] = useState(0)
    function onclickaddition() {
        setIncrementVal(++incrementVal)

    }

    function onClickdecrement() {
        if (incrementVal <= 0) {
            alert("can not be less than 0")
        } else {
            setIncrementVal(--incrementVal)
        }

    }

    return (

        <div>
            <h1>{incrmentVal}</h1>
            <button type="button" onClick={onclickaddition}>+</button>
            <button type='buttin' onClick={onClickdecrement}>-</button>

        </div>
    )



}

export default Test1