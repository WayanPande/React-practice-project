import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import Card from "../UI/Card";
import styles from './UsersList.module.css';

const UserList = props => {
    return (
        <div>
            {props.users.map(user => (
                <Card className={styles.users} key={user.id}>
                    <List>
                        <ListItem button>
                            <ListItemText primary={`${user.name} (${user.age} Years Old)`} />
                        </ListItem>
                    </List>
                </Card>
            ))}
        </div>
    );
};

export default UserList;