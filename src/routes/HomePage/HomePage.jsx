import React, { useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import HomeEnglish from "./languages/HomeEnglish";
import HomeRussian from "./languages/HomeRussian";
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
function HomePage() {
  const languages = ["RU", "EN"];
  const [page, setPage] = useState(0);
  const pageLength = languages.length;

  const handlePreview = () => {
    setPage(page === 0 ? pageLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === 1 ? pageLength + 1 : page + 1);
  };
  console.log(page);

  const pageDisplay = () => {
    switch (page) {
      case 0: {
        return <HomeEnglish />;
      }
      case 1: {
        return <HomeRussian />
      }
      default:
        return null;
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{pageDisplay()}</div>
      <div>
        {page === 0 ? (
          <div>
            <Button variant="contained"
                    color="primary"
                    style={{ marginTop: 5, color:"#FEC56E", backgroundColor:"#0D163B" }} onClick={handleNext}>RU</Button>
          </div>
        ) : (
          <Button variant="contained"
                  color="primary"
                  style={{ marginTop: 5, color:"#FEC56E", backgroundColor:"#0D163B" }} onClick={handlePreview}>EN</Button>
        )}
      </div>
    </div>
  );
}

export default HomePage;
