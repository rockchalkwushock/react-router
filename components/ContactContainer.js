import React from 'react';
import CONTACTS from '../index.js';
import Contact from './Contact';

let ContactContainer;

export default ContactContainer = (props) => {
  let contact = CONTACTS[props.params.contactId];
  return <Contact id={contact.id} name={contact.name} phoneNumber={contact.phoneNumber} />;
}
