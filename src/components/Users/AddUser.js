import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css';


const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler} className={styles.form}>
                    <TextField id="username" label="username" variant="outlined" onChange={usernameChangeHandler} value={enteredUsername} />
                    <TextField id="age" label="age" variant="outlined" onChange={ageChangeHandler} value={enteredAge} className={styles.margin} />
                    <Button type='submit' className={styles.btn}>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;