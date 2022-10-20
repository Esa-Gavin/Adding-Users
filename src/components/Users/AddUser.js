import React, { useState } from 'react';


import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
// the property htmlFor helps readers to know which input, //
// belongs to which label //
const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    // the reason for line 18 and 19 is so as to, //
    // change the updated state back to an empty string //
    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        // 👇 the unary operator is to help us change the enteredAge to a number, //
        // if it isn't ready //
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    // basically the reason we put a value attribute in the input tag, //
    // is to change the value back to an empty string because that is, //
    // what our initial state was useState('') //
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>

    )
};

export default AddUser;