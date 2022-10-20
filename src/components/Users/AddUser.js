import React from 'react';


import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
// the property htmlFor helps readers to know which input, //
// belongs to which label //
const AddUser = props => {

    const addUserHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' />
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>

    )
};

export default AddUser;