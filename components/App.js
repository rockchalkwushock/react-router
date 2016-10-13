import React from 'react';

let App;

export default App = (props) => {
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
