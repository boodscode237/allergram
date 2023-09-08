import React from "react";
import {Card, CardContent, Typography, Container, ListItem, ListItemText, List, Grid} from "@material-ui/core";
import AddAllergies from "./AddAllergies";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
  );
}

const Allergies = ({ allergy, allergyNo }) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <AddAllergies/>
        <Card
          className="root"
          variant="outlined"
          style={{ marginTop: 35, background: "lightgray" }}
        >

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs>
                <div className={classes.demo}>
                  <List>
                    {generate(
                        <ListItem>
                          <ListItemText
                              primary="Single-line item"
                          />
                        </ListItem>,
                    )}
                  </List>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Allergies;
