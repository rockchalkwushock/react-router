import React from 'react';
import Contact from './Contact';

let ContactList;

export default ContactList = (props) => {
    let contacts = Object.keys(props.contacts).map((contactId, index) => {
        let contact = props.contacts[contactId];
        return (
            <li key={index}>
                <Contact id={contact.id} name={contact.name} phoneNumber={contact.phoneNumber}/>
            </li>
        );
    });
    return (
        <ul>
            {contacts}
        </ul>
    );
}
