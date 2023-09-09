import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HomeEnglish() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
        <div>
          <Typography
            variant="h6"
            component="h2"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            How to use our service:
          </Typography>
        </div>

        <div>
          <Typography
            variant="body1"
            color="inherit"
            align="center"
            gutterBottom
          >
            Tell us about your allergies/intolerances: First, tell us what foods
            you are allergic/intolerant to. This is important so we can help
            you.{" "}
            <b>
              Preferably show an allergen list form with a completed sample.{" "}
            </b>
          </Typography>
        </div>
        <div>
          <Typography
            variant="body1"
            color="inherit"
            align="center"
            gutterBottom
          >
            Take a picture of the product: When you go to the store or sit in a
            restaurant and you have a suspicion about a product, simply take a
            picture of the ingredients list on its packaging or on the menu.{" "}
            <b>
              also show an example with a photo of the composition from our
              form.
            </b>
          </Typography>
        </div>
        <div>
          <Typography
            variant="body1"
            color="inherit"
            align="center"
            gutterBottom
          >
            Get a recommendation: We will quickly analyze the photo and tell you
            if there is a risk of allergic reaction/intolerance. If the product
            is unsafe, we'll notify you!{" "}
            <b>there's an example of the result we will give you.</b>{" "}
          </Typography>
        </div>
        <div>
          <Typography
            variant="body1"
            // color="primary"
            align="center"
            gutterBottom
          >
            Make the right decision: Finally, based on our recommendation, it is
            up to you to decide whether or not to eat this product. We're here
            to help you make more informed choices. It's easy!!! Sign up and
            make your life safer now:
          </Typography>
          <NavLink to="auth">
          <Typography style={{ marginTop: 5, color:"#c25364" }} variant="button" display="block">
            link to registration form
          </Typography>
          </NavLink>
        </div>
      </Grid>
    </div>
  );
}

export default HomeEnglish;
