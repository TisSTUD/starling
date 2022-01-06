import { Badge, Container, Grid, List, makeStyles, Typography } from '@material-ui/core';
import { Bookmark, ExitToApp, Home, Person, Mail, Settings,Notifications, NoEncryption } from '@material-ui/icons';
import React from 'react'
import { NavLink } from 'react-router-dom';






const useStyles = makeStyles((theme)=> ({
Container: {
    position:"sticky",
    top:"0",

    height:"100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: "#19A8D9",
    color:"white",
    [theme.breakpoints.up("sm")]:{
        backgroundColor: "#19A8D9",
    color:"white",
        border: "1px solid #ece7e7"
    }

},
item:{
    display:"flex",
    alignItems: "center",
    marginBottom:theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
        marginBottom:theme.spacing(3),
        cursor:"pointer"
    }
},
icon:{
  
    [theme.breakpoints.up("sm")]:{
        fontsize:"18px",
    }
},

text:{
    marginLeft: theme.spacing(2),
    fontWeight:600,
    [theme.breakpoints.down("sm")]:{
        display:"none",
        
    },
},
link:{
    color:"white",
    textDecoration: "none",
}

}));


 const Leftbar = () => {
    const classes = useStyles();
    return (
        <Grid item sm={2} xs={2}  >
      <Container className={classes.Container}>
            
        <div className={classes.item}>
            <NavLink to="/" exact className={classes.link}>
                <Home className={classes.icon}/>
            </NavLink>
            <NavLink to="/" exact className={classes.link}>
                <Typography className={classes.text}>Homepage</Typography>
            </NavLink>
        </div>

        <div className={classes.item} >
            <NavLink to="/Profil" exact className={classes.link}>
                <Person className={classes.icon}/>
            </NavLink>
            <NavLink to="/Profil" exact className={classes.link}> 
               <Typography className={classes.text}>profil</Typography>
            </NavLink>
                
        </div>
        <div className={classes.item}>
            <NavLink to="/Notifications" exact className={classes.link}>
                 <Badge badgeContent={4} color="secondary" >
                <Notifications className={classes.icon}/>
                </Badge>
            </NavLink>
            <NavLink to="/Notifications" exact className={classes.link}>
                <Typography className={classes.text}>Notifications</Typography>
            </NavLink>
        </div>
            
        <div className={classes.item}>
            <NavLink to="/Messages" exact className={classes.link}>
               <Badge badgeContent={4} color="secondary" >
                <Mail className={classes.icon}/>
                </Badge>
            </NavLink>
            <NavLink to="/Messages" exact className={classes.link}>
                <Typography className={classes.text}>Messages</Typography>
            </NavLink>
        </div>
           
            
        <div className={classes.item}>
                <Bookmark className={classes.icon}/>
                <Typography className={classes.text}>collections</Typography>
        </div>
            
        <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>settings</Typography>
        </div>
        <div className={classes.item}>
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>LogOut</Typography>
        </div>
      </Container>
      </Grid>
        
    );
};
export default Leftbar;
