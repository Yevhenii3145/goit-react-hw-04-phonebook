import React from 'react';
import { nanoid } from 'nanoid';
import { FormMarcup, FormLabel, FirstInput, SecondInput, FormButton } from './Form.styled';
import { useState } from "react";

const initialState = {
    name: '',
    number: '',
}

export default function Form({addContact}) {
    const [state, setState] = useState(initialState);
    
    const inputNameId = nanoid();
    const inputPhoneId = nanoid();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setState((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name,number } = state;
        addContact({ name, number });
        setState(initialState);
    }

    return (
        <FormMarcup onSubmit={handleSubmit}>
            <FormLabel htmlFor={inputNameId}>Name</FormLabel>
            <FirstInput
            id={inputNameId}
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            
            <FormLabel htmlFor={inputPhoneId}>Phone</FormLabel>
            <SecondInput
            id={inputPhoneId}
            type="tel"
            name="number"
            value={state.number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
            <FormButton type='submit'>Add contact</FormButton>
        </FormMarcup>
    )
}
