import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';






const useStyles = makeStyles((theme)=> ({
    card:{
        marginBottom:theme.spacing(5),
    },
   media:{
       height:"250px"
   }
   
}));

const Post = () => {

    const classes = useStyles();
    return (
       
        <Card className={classes.card}>
             
            <CardActionArea>
                
                <CardContent>
                <Avatar alt="Remy Sharp" src="/profile.png" />
                    <Typography gutterBottom variant="h6">amel_ouachour</Typography>
                    <Typography variant="body1"> a mentionné votre nom dans un commentaire </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="smal" color="primary">see more</Button>
            </CardActions>
        </Card>
       
       
    );
};
export default Post;