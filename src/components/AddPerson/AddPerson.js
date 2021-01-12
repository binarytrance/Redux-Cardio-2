import React from 'react';

import './AddPerson.css';

const addPerson = (props) => {
    return (
        <div className="AddPerson">
            <button onClick={props.personAdded}>Add Personseeessss, my precious!</button>
        </div>
    )
};

export default addPerson;