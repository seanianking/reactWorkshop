import React from 'react'
import { Form } from 'react-bulma-components'

const JokesForm = () => {
    return (
        <div>

            <Form.Field>
                <Form.Label>
                    I'm the label of this field
                </Form.Label>
                <Form.Control>
                    <Form.Input placeholder="Inside a field set" />
                </Form.Control>
            </Form.Field>
        </div>
    )
}

export default JokesForm;
