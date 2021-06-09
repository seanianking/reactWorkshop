import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bulma-components';
import API from './utils/API';

const JokesForm = () => {
    const [search, setSearch] = useState("Wikipedia");
    const [error, setError] = useState('');
    const [results, setResults] = useState('');

    useEffect(() => {
        if (!search) {
            return;
        }

        API.searchTerms(search)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
            })
            .catch(err => setError(err));
    }, []);

    const handleSearchTerm = event => {
        setSearch(event.target.value);
        
    };
    return (
        <form>
            <Form.Field>
                <Form.Label>
                    Search for a Joke here!
                </Form.Label>
                <Form.Control>
                    <Form.Input onChange={handleSearchTerm} placeholder="Pick a joke subject" />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Control>
                    <Button type='submit' color="link">Submit</Button>
                </Form.Control>
            </Form.Field>
        </form>
    )
}

export default JokesForm;
