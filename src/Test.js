import { useState } from "react"

function Test() {
    // counterVal ;; its like noramal varaible 
    // setCounterVal :: yeh ek function ha jo coutnerval ki value to update krta ha
    // let counterVal = 0
    let [counterVal, setCounterVal] = useState(0)
    function onClickCounter() {
        setCounterVal(++counterVal) // sate ko update krana
        // yeh couerval ki value ko update krta ha
    }


    // Task :: increment or decrement ka componet bnna ha usma ek +,-  ka symbole hoga ek heading hogi (h1)
    // agr + vala clck krunga to value plus hogi agr decrement vala click krunga to value substract hogi
    // but condition yeh ha ki substract ma 0 sa niche nhi jana cheya

    return (

        <div>
            <h1>{counterVal}</h1>

            <button onClick={onClickCounter}>Counter</button>

        </div>

    )
}

export default Test