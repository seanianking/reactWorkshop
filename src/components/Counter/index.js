import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bulma-components';


const Counter = () => {

    const [counterState, setCounterState] = useState(0);
    const [optionState, setOptionState] = useState(0);

    const handleIncrement = (e) => {
        e.preventDefault();
        setCounterState(counterState + optionState);
    }
    const handleDecrement = (e) => {
        e.preventDefault();
        setCounterState(counterState - optionState);
    }
    const handleInputChange = (e) =>{
        setOptionState(parseInt(e.target.value))

    }
    return (
        <div>
            <Card>
                <br />
                <Form.Label>Put a number here to change the increment/decrement amount:</Form.Label>
                <br />
                <Form.Input onChange={handleInputChange} />
                <h6>Count: {counterState}</h6>
                <Button onClick={handleIncrement} color="success" size="large" rounded outlined>Increment Me!</Button>
                <Button onClick={handleDecrement} color="danger" size="large" rounded outlined>Decrement Me!</Button>
                <br/>
            </Card>
        </div>
    )
}

export default Counter
