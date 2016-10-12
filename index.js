import React from 'react';
import ReactDOM from 'react-dom';

let CONTACTS = {
    0: {
        id: 0,
        name: 'Sarah Hughes',
        phoneNumber: '01234 567890'
    },
    1: {
        id: 1,
        name: 'Tim Taylor',
        phoneNumber: '02345 678901'
    },
    2: {
        id: 2,
        name: 'Sam Smith',
        phoneNumber: '03456 789012'
    }
};

let Contact = (props) => (
    <div>
        <strong>
            {props.name}
        </strong>
        &nbsp; {props.phoneNumber}
    </div>
);

let ContactList = (props) => {
    let contacts = Object.keys(props.contacts).map(function(contactId, index) {
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

let ContactListContainer = () => {
    return <ContactList contacts={CONTACTS}/>;
};
