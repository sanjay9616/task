import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import axiox from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const Register = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [error, setError] = useState("");
  let history = useNavigate();


  const register=(e)=>{
    e.preventDefault();
    if(!firstname || !lastname || !username || !email || !password || !confirmpassword){
      alert("Please fill all details");
    }
    else if(password!==confirmpassword){
      alert("password and confirm password not matched");
    }
    else{
      localStorage.setItem("sanjayEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanjayPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");
      history("/login");

    }

  }



  return (
    <div style={{marginTop:"100px"}}>
      <h2>Register Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={register}
      >

        <TextField
          id="firstname"
          label="First Name"
          type="text"
          value={firstname}
          onChange={(e)=>setFirstname(e.target.value)}
        />
        <br />

        <TextField
          id="lastname"
          label="Last Name"
          type="text"
          value={lastname}
          onChange={(e)=>setLastname(e.target.value)}
        />
        <br />

        <TextField
          id="username"
          label="User Name"
          type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <br />

        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br />

        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br />

        <TextField
          id="confirmpassword"
          label="Confirm Password"
          type="password"
          value={confirmpassword}
          onChange={(e)=>setConfirmpassword(e.target.value)}
        />
        <br />


        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Register
        </Button>
      </form>
      <p>
        Already have an account then please {" "}
        <Link to="/login">Login</Link> yourself
      </p>
    </div>
  );
}

export default Register;