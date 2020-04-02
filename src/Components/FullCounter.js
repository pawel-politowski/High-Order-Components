import React from 'react';
import { withCounter } from '../hoc/withCounter'


function FullCounter(props) {
    return(
        <div>
            Counter: {props.counterValue}
            <button onClick={props.incrementCounter}>+</button>
            <button onClick={props.decrementCounter}>-</button>
            <button onClick={props.reset}>RESET</button>
        </div>
    )
}

export default withCounter(FullCounter, 'fullCounter');