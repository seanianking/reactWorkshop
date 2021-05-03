import React, { useState } from 'react'
import { Card } from 'react-bulma-components';
import { Button } from "react-bulma-components";


const Counter = () => {

    const [counterState, setCounterState] = useState(0);

     const handleIncrement = (e) => {
         e.preventDefault();
        setCounterState(counterState + 1);
    }
     const handleDecrement = (e) => { 
        e.preventDefault();
        setCounterState(counterState - 1);
    }
    return (
        <div>
            <Card>
                <h6>Count: {counterState}</h6>
            </Card>
            <Button onClick={handleIncrement} color="successx" size="large" rounded outlined>Increment Me!</Button>
            <Button onClick={handleDecrement} color="danger" size="large" rounded outlined>Decrement Me!</Button>

        </div>
    )
}

export default Counter
