import React, {useState} from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const defaultFormFields = {
  email: '',
  password: '',
}
const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password} = formFields
  // const {setCurrentUser} = useContext(UserContext)
  const resetFormFields = () => setFormFields(defaultFormFields)

  // async the code under
  const handleSubmit =  (event) => {
    event.preventDefault()
    try {
      console.log(formFields)
      // const {user} = await signInAuthUserWithEmailAndPassword(email, password)
      // setCurrentUser(user)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert("Incorrect password for email")
          break
        case 'auth/user-not-found':
          alert("User not found for this email")
          break
        default:
          console.log(error)
      }
    }

  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
              label="Email"
              placeholder="Enter Email"
              fullWidth
              onChange={handleChange}
              name='email'
              value={email}
              required
          />
          <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              onChange={handleChange}
              name='password'
              value={password}
              required
          />
          <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 5, color:"#FEC56E", backgroundColor:"#0D163B" }}
          >
            Sign in
          </Button>
        </form>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
