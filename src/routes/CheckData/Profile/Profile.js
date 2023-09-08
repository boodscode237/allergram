import React from "react";
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const Profile = () => {
    const paperStyle = { padding: 20, width: 300, margin: "auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <CreateOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Change My data</h2>
                    <Typography variant="caption" gutterBottom>
                        Change the data you want to change
                    </Typography>
                </Grid>
                <form>
                    <TextField fullWidth label="Name" placeholder="Enter your name" />
                    <TextField fullWidth label="Email" placeholder="Enter your email" />
                    <TextField fullWidth label="Login" placeholder="Enter your Login" />
                    <TextField
                        fullWidth
                        label="Password"
                        placeholder="Enter your password"
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        placeholder="Confirm your password"
                    />
                    <Button variant="contained"
                            color="primary"
                            style={{ marginTop: 5, color:"#FEC56E", backgroundColor:"#0D163B" }}>
                        Update
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}


export default Profile