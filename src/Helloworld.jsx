import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import './Style.css'

const Helloworld = () => {
  const [uid, setUid] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const vali = () => {
    console.log(uid.length);
    if (uid == "" || pass == "") {
      alert("Username or Password cannot be empty ");
    } else if (uid.length == 6) {
      console.log("here");
      history.push("/userregistration");
    }
  };

  return (
    <Container component="main" style={{  margin: "50px"}}>
      <Typography component="h1" variant="h5">
        <h5>LOG IN</h5>
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="uid"
        label="Username"
        name="Username"
        autoComplete="Username"
        autoFocus
        value={uid}
        onChange={(e) => setUid(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="pass"
        label="Password"
        name="Password"
        type="password"
        autoComplete="Password"
        autoFocus
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => vali()}
        style = {{margin:"40px"}}
      >
        Submit
      </Button>
    </Container>
  );
};
export default Helloworld;
