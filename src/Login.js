import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import axiox from "axios";
import { Link } from "react-router-dom";
import Home from "./Home";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useNavigate();

  const login=(e)=>{
    e.preventDefault();
    let pass = localStorage
      .getItem("sanjayPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanjayEmail").replace(/"/g, "");
    if(!email || !password){
      alert("Please enter email and password");
    }
    else if(password!==pass || email!==mail){
      alert("email and password is incorrect");
    }
    else{
      alert("Successfully login");
      history("/");

    }
  }

  
  return (
    <div style={{marginTop:"100px"}}>
      <h2>Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={login}
      >
        <TextField
          id="email"
          label="Email"
          type="text"
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
        <br/>
        
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <p>
        Don't have an account then please do{" "}
        <Link to="/register">Register</Link>
      </p>
      
    </div>
  );
}

export default Login;