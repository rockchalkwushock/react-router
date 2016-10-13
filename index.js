import React from 'react';
import ReactDOM from 'react-dom';
import router from 'react-router';
let Router = router.Router;
let Route = router.Route;
let hashHistory = router.hashHistory;
let IndexRoute = router.IndexRoute; // use for any route that does not change the parent route.

let routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer}/>
            <Route path=":contactId" component={ContactContainer}/>
        </Route>
    </Router>
);
let Link = router.Link;
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
            <Link to={'/contacts/' + props.id}>
                {props.name}
            </Link>
        </strong>
        &nbsp; {props.phoneNumber}
    </div>
);

let ContactList = (props) => {
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

let ContactListContainer = () => {
    let contact = CONTACTS[props.params.contactId];
    return <Contact id={contact.id} name={contact.name} phoneNumber={contact.phoneNumber}/>;
};

let App = (props) => {
    return (
        <div>
            <h1>
                Contacts App
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(routes, document.getElementById('app'));
});
