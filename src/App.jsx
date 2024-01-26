import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@material-ui/core"; // Typography to have better text Appbar to have navigation bar
import  { PhotoCamera }  from "@material-ui/icons";
import useStyles from "./styles";

const cards = [1,2,3,4,5,6,7,8,9]
 const App = () =>{
    const classes = useStyles();
    return(
        <>
        <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon} />
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
          </AppBar>
        
          <main>
            <div className={classes.container}>
            <Container maxWidth="sm"style={{marginTop:'10px'}}>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom style={{fontFamily:'initial', fontWeight:'lighter'}}>
                    Photo Album
                </Typography>

                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Hello everyone this is a Photo Album where you can discover any collection of photos anytime,
                    Simply reload the page
                </Typography>
                <div>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item className={classes.button}>
                            <Button variant="contained" color="primary">
                                See my Photos
                            </Button>
                        </Grid>
                        <Grid item className={classes.button}>
                            <Button variant="outlined" color="primary">
                                Secondary Action
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            </div> 
            {/* Another container */}
            <Container className={classes.cardGrid} maxWidth='md'> {/* md stands for medium */}
            <Grid container spacing={4}>
                {cards.map(()=>(
                            <Grid item>
                            <Card className={classes.card}> {/* CardMedia is used for the image */}
                                <CardMedia
                                className={classes.CardMedia}
                                image="https://source.unsplash.com/random"
                                title="image title"
                                /> 
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        card content as what you want
                                    </Typography>
                                </CardContent>
        
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="secondary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                ))}
            </Grid>
            </Container>
          </main>

<footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary">I am waiting to provide your signature</Typography>
</footer>
        </>
    );
}
export default App;