import React, {useContext, useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {AuthContext} from "../../contexts";
import {useFormWithValidation} from "../../utils";
import MetaTags from 'react-meta-tags'

const defaultFormFields = {
  name: '',
  username: '',
  checkedA: false,
  email: '',
  password: '',
  confirmPassword: '',
}
const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {name, username, checkedA, email, password, confirmPassword} = formFields
  // const { setCurrentUser } = useContext(UserContext)
  const resetFormFields = () => setFormFields(defaultFormFields)

  const handleSubmit =  (event) => {
    event.preventDefault()
    if (password !== confirmPassword){
      alert("Please check that your password and confirm password match")
      return
    }

    try {
      // const {user} = await createAuthUserWithEmailAndPassword(
      //     email,
      //     password
      // )
      // setCurrentUser(user)
      // await createUserDocumentFromAuth(user, {displayName})
      console.log(formFields)
      resetFormFields()
    } catch (error) {
      // if (e.code === "auth/email-already-in-use") {
      //   alert("Cannot create user email already in use")
      // }else{
      //   console.log("user signed up has an error ",e)
      }
      console.log("user signed up has an error ",error)
    }


  const paperStyle = { padding: 20, width: 300, margin: "auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  // const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()
  const authContext = useContext(AuthContext)
  const [error, setError] = useState('')
  // const {register} = useAuth()
  const  navigate = useNavigate()


  const handleChange = (event) => {
    // event.preventDefault()
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  return (
    <Grid>

      <MetaTags>
        <title>Регистрация</title>
        <meta name="description" content="Продуктовый помощник - Регистрация" />
        <meta property="og:title" content="Регистрация" />
      </MetaTags>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
              value={name}
              fullWidth name='name'
              label="Name"
              onChange={handleChange}
              placeholder="Enter your name" />
          <TextField
              value={email}
              fullWidth name='email'
              label="Email"
              onChange={handleChange}
              placeholder="Enter your email" />
          <TextField
              value={username}
              fullWidth name='username'
              label="Login"
              onChange={handleChange}
              placeholder="Enter your Login" />
          <TextField
              value={password}
            fullWidth
            label="Password"
            name='password'
              onChange={handleChange}
            placeholder="Enter your password"
          />
          <TextField
              value={confirmPassword}
            fullWidth
              onChange={handleChange}
            label="Confirm Password"
            name='confirmPassword'
            placeholder="Confirm your password"
          />
          <FormControlLabel
            control={<Checkbox value={checkedA} name="checkedA"  onChange={handleChange}/>}
            label="I accept the terms and conditions."
          />
          <Button
              style={{ marginTop: 5, color:"#FEC56E", backgroundColor:"#0D163B" }}
              type="submit"
              variant="contained"
              color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
