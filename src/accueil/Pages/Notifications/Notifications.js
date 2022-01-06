import {Container, makeStyles } from '@material-ui/core';
import React from 'react'
import Post from './Post';






const useStyles = makeStyles((theme)=> ({
    Container: {
        paddingTop: theme.spacing(10),
    }
}));

const Notifications = () => {

    const classes = useStyles();
    return (
        <Container className={classes.Container}><Post/></Container>
          
    )
};
export default Notifications;
