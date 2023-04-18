import React from 'react';
import { Container, Typography, AppBar, Grow, Grid } from "@mui/material"

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import panda from './images/panda.png'
import useStyles from './Styles'


const App = () => {
    const classes = useStyles();

    return (
        <Container sx={{ bgcolor: 'secondary.main', maxWidth:"lg"}}>
            <AppBar className={classes.appBar} position='static' color="inherit">
                <Typography variant="h1"
                sx={{ my: 4, textAlign: "center", color: "primary.main"}}
                >
                    Hungry Panda
                </Typography>
                <img className={classes.image}src ={panda} alt="a hungry panda" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;