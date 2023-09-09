import React, {useState} from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Avatar,
  Grid,
  Box,
  Drawer,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import icon from "../../assets/logo192.png";
import HistoryIcon from "@material-ui/icons/History";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
  background: '#f4f4f4'
},
}));

const RootLayout = () => {
  const menus = [
    { name: "Home", link: "/", icon: HomeIcon },
    { name: "Profile", link: "/profile", icon: AccountBoxIcon },
    {
      name: "History",
      link: "/history",
      icon: HistoryIcon,
      margin: true,
    },
  ];
  const classes = useStyles();
  // added code
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };



  // finish added
  return (
    <div className={`${classes.root} root-layout`} style={{background: "#FEFEFE", height:"100vh" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
        <AppBar position="static"  style={{background: "#0D163B" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="#0D163B"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <Avatar
                alt="Allergram"
                src={icon}
                style={{ width: 300, height: 100 }}
              />
            </IconButton>
            {menus?.map((menu, i) => (
              <Grid
                key={i}
                container
                item
                xs
                // xs={8}
                // md={6}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <NavLink to={menu?.link}>
                    <Button color="inherit" variant="outlined" className={classes.title}>
                      <Typography
                        variant="p"
                        component="h3"
                        color="text-secondary"
                        align="center"
                        gutterBottom
                        style={{ marginTop: 'auto', color: "#FEC56E" }}
                      >
                        {menu.name}
                      </Typography>
                    </Button>
                </NavLink>
              </Grid>
            ))}
            <NavLink to="auth">
              <Button
                variant="outlined"
                style={{color: "#D3FFC2"}}
                className={classes.title}
              >
                <Typography
                  variant="p"
                  component="h3"
                  color="inherit"
                  align="center"
                  gutterBottom
                  style={{color: "#D3FFC2"}}
                >
                  Auth
                </Typography>
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>
        {/*<Drawer className={classes.drawer}  classes={{ paper: classes.drawerPaper }} variant='permanent' anchor='left'>*/}
        {/*  <div>*/}
        {/*    <Typography variant='h5'>SideBar</Typography>*/}
        {/*  </div>*/}
        {/*</Drawer>*/}
        <nav>
          <Hidden smUp implementation="css">
            <Drawer
                variant="temporary"
                anchor="left"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
            >
              {menus?.map((menu, i) => (
                  <Grid
                      key={i}
                      container
                      item
                      xs={8}
                      md={6}
                      direction="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                  >
                    <NavLink to={menu?.link}>
                      <Box
                          margin="auto"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          bgcolor="#0D163B"
                          borderRadius="12px"
                          boxShadow="12"
                          sx={{
                            // maxWidth: "22vw",
                            // maxHeight: "20vh",
                            backgroundColor: "#0D163B",
                          }}
                      >
                        <Button color="inherit" className={classes.title}>
                          <Typography
                              variant="p"
                              component="h3"
                              color="text-secondary"
                              align="center"
                              gutterBottom
                              style={{ marginTop: 'auto', color: "#FEC56E" }}
                          >
                            {menu.name}
                          </Typography>
                        </Button>
                      </Box>
                    </NavLink>
                  </Grid>
              ))}
              <NavLink to="auth">
                <Button
                    variant="outlined"
                    style={{color: "#D3FFC2"}}
                    className={classes.title}
                >
                  <Typography
                      variant="p"
                      component="h3"
                      color="inherit"
                      align="center"
                      gutterBottom
                      style={{color: "#D3FFC2"}}
                  >
                    Auth
                  </Typography>
                </Button>
              </NavLink>
            </Drawer>
          </Hidden>
        </nav>
        <main >
          <Outlet />
        </main>
      </Grid>

    </div>
  );
};

export default RootLayout;
