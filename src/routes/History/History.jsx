import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HistoryTable from "./HistoryTable";
import {Grid} from "@material-ui/core";
import Profile from "../CheckData/Profile/Profile";
import TakePhoto from "./TakePhoto";

function History() {
  return (
      <React.Fragment>
        <CssBaseline />
          <Grid container spacing={6}>
              <Grid item xs>
                  <Container maxWidth="sm" align='center'>
                    <TakePhoto />
                  </Container>
              </Grid>
              <Grid item xs>
                  <HistoryTable maxWidth="sm"/>
              </Grid>
          </Grid>
      </React.Fragment>
  );
}

export default History;
