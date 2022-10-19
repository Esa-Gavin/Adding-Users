import React from 'react';


// the property htmlFor helps readers to know which input, //
// belongs to which label //
const AddUser = props => {

    const addUserHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' />
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number' />
            <button type='submit'>Add User</button>
        </form>
    )
};

export default AddUser;