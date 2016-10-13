import React from 'react';
import CONTACTS from '../index.js';
import ContactList from './ContactList';

let ContactListContainer;

export default ContactListContainer = () => {
    return <ContactList contacts={CONTACTS} />;
}
