import { useState } from 'react';
import React from 'react'
import Generator from './Generator.jsx'

export default function EmailInputField() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter your domain without the @:
                        <input
                            type="text"
                            name="domain"
                            value={inputs.domain || ""}
                            onChange={handleChange}
                        />
                    </label></div>
                <div>
                    <label>Enter the number of emails:
                        <input
                            type="number"
                            name="numberOfEmails"
                            value={inputs.numberOfEmails || ""}
                            onChange={handleChange}
                        />
                    </label></div>
                <input type="submit" />
            </form>
            <Generator numberOfEmails={inputs.numberOfEmails} domain={inputs.domain} /></div>
    )
}