import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bulma-components';


const Counter = () => {

    const [counterState, setCounterState] = useState(0);
    const [optionState, setOptionState] = useState(1);

    let counterStyle;
    if (counterState === 0) {

        counterStyle = {
            color: 'black',
            fontSize: '18px',
        }
    }
    else if (counterState < 0) {
        counterStyle = {
            color: 'red',
            fontSize: '18px',
        }
    }
    else if (counterState > 0) {
        counterStyle = {
            color: 'green',
            fontSize: '18px',
        }
    }

    const handleIncrement = (e) => {
        e.preventDefault();
        setCounterState(counterState + optionState);
    }
    const handleDecrement = (e) => {
        e.preventDefault();
        setCounterState(counterState - optionState);
    }
    const handleInputChange = (e) => {
        setOptionState(parseInt(e.target.value))

    }
    return (
        <div>
            <Card>
                <br />
                <Form.Label>Put a number here to change the increment/decrement amount:</Form.Label>
                <br />
                <Form.Input onChange={handleInputChange} />
                <h6 style={counterStyle}>Count: {counterState}</h6>
                <Button onClick={handleIncrement} color="success" size="large" rounded outlined>Increment Me!</Button>
                <Button onClick={handleDecrement} color="danger" size="large" rounded outlined>Decrement Me!</Button>
                <br />
            </Card>
        </div>
    )
}

export default Counter
