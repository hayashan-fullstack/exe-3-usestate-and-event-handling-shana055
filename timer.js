import React, { useState, useRef } from 'react';

export const  Timer =() => {
    const [scounter, setCounter1] = useState(0)
    const [mcounter, setCounter2] = useState(0)
    const timeout=useRef(null)
    console.log(timeout)
    
    timeout.current = setTimeout(() => {
        if(scounter==59){
            setCounter1(0)
            setCounter2(mcounter+1)
        }
        else setCounter1(scounter + 1) //counter++
    }, 1000)
    
    const restart= () => {
        console.log(timeout)
        clearTimeout(timeout.current)
        setCounter1(0)
        setCounter2(0)
    }
    // const restart = () => {
    //     console.log(timeout)
    //     clearTimeout(timeout)
    // setCounter(0)
    // }
    // for(let i=0; i<10; i++) {
    //     console.log(props.counter)
    // }
    return (
        <div style={{ margin: '10%' }}>
            <h1> timer:</h1>
            <h2> {mcounter}:{scounter}</h2>
            <br />
            {<button onClick={restart}>restart</button>}
        </div>
    )
}