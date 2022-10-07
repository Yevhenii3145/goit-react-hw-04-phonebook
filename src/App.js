import React from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Container } from './components/Container/Container.styled';
import { TitlePage } from './components/Title/Title';
import { Heading } from './components/Heading/Heading';
import { useState, useEffect } from 'react';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'));
    return value ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('contacts');
    };
  }, []);

  const addContact = data => {
    if (isDublicate(data)) {
      return alert(`${data.name} is already in contacts`);
    }
    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return [...prev, newContact];
    });
  };

  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    if (filter.length === 0) {
      return contacts;
    }
    const normalisedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      const result = normalizedName.includes(normalisedFilter);
      return result;
    });
    return filteredContacts;
  };

  const isDublicate = ({ name }) => {
    const result = contacts.find(contact => contact.name === name);
    return result;
  };

  const removeContact = id => {
    setContacts(prev => {
      const newListContacts = prev.filter(item => item.id !== id);
      return newListContacts;
    });
  };

  const filterId = nanoid();
  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <TitlePage text={'Phonebook'}></TitlePage>
      <Form addContact={addContact} />

      <Heading text={'Contacts'}></Heading>
      <Filter filterId={filterId} filter={filter} handleChange={handleChange} />
      <ContactList items={filteredContacts} removeContact={removeContact} />
    </Container>
  );
}
