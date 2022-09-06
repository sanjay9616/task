import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Header=()=>{
  // e.preventDefault();
    let pass = localStorage
      .getItem("sanjayPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanjayEmail").replace(/"/g, "");
  return (
    <>
      <h1 style={{display:"flex", justifyContent:'flex-end'}}>Hi, {mail}</h1>
    </>
  )
}



export default Header;