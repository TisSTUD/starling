import { AppBar,Toolbar, makeStyles, Typography, InputBase, alpha, Avatar, Chip } from '@material-ui/core';
import { Cancel, Search } from '@material-ui/icons';
import React, { useState } from 'react'






const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent:"space-between",
    },


    logoLg: {
        display: "none",
        width:'4%',
        [theme.breakpoints.up("sm")]: {
            display : "block",
        },
    },

    logoSm: {
        width:"12%",
    
      display: "block",
      [theme.breakpoints.up("sm")]:{
      display : "none",
        },

    },

    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.black,0.15),
        '&:hover':{
            backgroundColor: alpha(theme.palette.common.black,0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display : (props)=> props.open ? "flex" :"none" ,
            width:"70%",
            
        },
    },

    input:{
        
        color:"black",
        marginLeft: theme.spacing(0),
    },

    cancel:{
     [theme.breakpoints.up("sm")]: {
         display:"none",
     },
    },
    searchButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display : "none" ,
            
        },

    },
    icons:{
        
        alignItems:"center",
        display : (props)=> props.open ? "none" :"flex" ,
    },
    badge:{
        marginRight: theme.spacing(2),
    },
    a:{
        backgroundColor:"white",
       
        color:"#555",
    }

}));


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles({ open });
    return (
        <AppBar position='fixed' className={classes.a}>
            <Toolbar className={classes.toolbar} >
                
                
                <img src='/ss.png' className={classes.logoLg}/>
                
                <img src='/ss.png' className={classes.logoSm}/>
                
                
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder='search...' className={classes.input} />
                    <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
                </div>
                <div className={classes.icons}>
                <Search className={classes.searchButton} 
                onClick={() => setOpen(true)} />
                <Chip
                   avatar={<Avatar alt="Natacha" src="/profile.png" />}
                   label="amel_ouachour"
                   variant="outlined"
               />
               
                
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
