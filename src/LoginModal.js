import React,{useState} from "react";
import { Button } from "@material-ui/core";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";



const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "45ch",
      },
    },
  }));


const LoginModal=()=>{
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [idd,setIdd]=useState("");
    const [email,setEmail]=useState("");
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [url, setUrl]=useState("");
    console.log('idd',idd);



    const onClickOpenMpdal = () => {
        setOpen(true)
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      let serverData = {
        id:idd,
        email,
        first_name:firstname,
        last_name:lastname,
        avatat:url 
      }

      const onsubmitApiData = () => {
        axios.post("https://reqres.in/api/users",serverData)
        .then((resp) => {
          console.log("POstAPI",resp.status)
          if(resp?.status === 201){
            alert("User is added successfully");
          }
        })
        .catch((err) => {
          console.log('err',err?.result);
        })
      }
    
      
    return (
        <div>
        <Button onClick={onClickOpenMpdal} style={{border:"1px solid red"}}>LoginModal</Button>
        <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={{height:"200"}}
        contentLabel="Example Modal"
      >
        <div style={{marginTop:"100px"}}>
        {<p style={{ color: "red" }}></p>}
        <form
        className={classes.root}
        noValidate
        autoComplete="off"
        // onSubmit={}
        >

        <TextField
            id="idd"
            label="Id"
            type="text"
            value={idd}
            onChange={(e)=>setIdd(e.target.value)}
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
            id="url"
            label="Avatar url"
            type="url"
            value={url}
            onChange={(e)=>setUrl(e.target.value)}
        />
        <br />

        <Button onClick={onsubmitApiData} style={{border:"1px solid red"}}>
            SubmitData
        </Button>
        </form>
        {/* <Button onClick={onSubmitForm} title="Submit Button"/> */}
        </div>

      </Modal>
        </div>
    )
}
export default LoginModal

