import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import App from './components/App';
import ContactListContainer from './components/ContactListContainer';
import ContactContainer from './components/ContactContainer';

let CONTACTS;

export default CONTACTS = {
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

let routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer}/>
            <Route path=":contactId" component={ContactContainer}/>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(routes, document.getElementById('app'));
});
