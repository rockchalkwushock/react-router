import React from 'react';
import Link from 'react-router';

let Contact;

export default Contact = (props) => (
    <div>
        <strong>
            <Link to={'/contacts/' + props.id}>
                {props.name}
            </Link>
        </strong>
        &nbsp; {props.phoneNumber}
    </div>
);
