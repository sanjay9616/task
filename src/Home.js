import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import { Button,  } from "@material-ui/core";


const Home=()=>{
  const [value,setValue]=useState("")

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2")
    .then(resp => {
      // console.log('----',resp)
        let data = resp.data.data;
        console.log("APIDATA",data);
        setValue(data)
    })
    .catch(error => {
        // console.log("SanjayKumar2",error);
    });

  }, [])
  

  function HandleEdit(){

      }
    let serverData = {
      id:13,  
      email:"ashish@reqres.in",
      first_name:"ashish",
      last_name:"Prajapati",
      avatar:"https://reqres.in/img/faces/11-image.jpg"
    }

    const onsubmitApiData = () => {
      axios.post("https://reqres.in/api/users",serverData)
      .then((resp) => {
        console.log("POstAPI",resp.status)
        if(resp?.status === 201){
          alert("e User is added successfully")
        }
      })
      .catch((err) => {
        console.log('err',err?.result);
      })
    }

  return (
    <>
    {/* <Button onClick={onsubmitApiDat}>
      SubmitData
    </Button> */}
    <LoginModal/>
      <table border="1" cellspacing="0" cellpadding="5"  className="table table-bordered">
            <thead>
               <tr>
                <th>Id</th>
                <th>
                 Email  
                </th>
                <th>
                    First Name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Avatar
                </th>
               </tr>
               
            </thead>
            <tbody> 
                   {
                    value && value.length > 0
                    ?
                    value.map((item) => {
                        return(
                            <tr>
                               <td>
                                {item.id}
                                </td>
                                <td>
                                   {item.email} 
                                </td> 
                                <td>
                                    {item.first_name}
                                </td>
                                <td>
                                    {item.last_name}
                                </td>
                                <td>
                                    {/* {item.avatar} */}
                                    <img src={item.avatar} alt={item.first_name}/>
                                </td>
                                
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={()=> HandleEdit(item.id)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                    :
                    "No Data Available"
                   }
            </tbody>

      </table>
      <Link to="/login"><button style={{border:"1px solid red"}}>Logout</button></Link>

    </>
  )
}





export default Home;