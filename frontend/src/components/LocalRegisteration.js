import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import "./localStyles.js";
import useStyles from "./localStyles";
import local_business from "./assets/images/local_business.jpg"

const LocalRegisteration = () => {
  const { classes } = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Register your business with us
        </Typography>
        <img className={classes.image} src={local_business} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
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
  );
};

export default LocalRegisteration;
