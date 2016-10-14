import React from 'react';
import {Link} from 'react-router';

let Contact;

export default Contact = (props) => {
  return (
      <div>
          <strong>
              <Link to={'/contacts/' + props.id}>
                  {props.name}
              </Link>
          </strong>
          <span>
            &nbsp; {props.phoneNumber}
          </span>
      </div>
  );
}
