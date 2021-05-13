import React, { useState, useEffect } from "react";
import { isPhoneNum, isNullEmpty } from "./common";
import Tablee from "./Tablee";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const UserRegistration = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pno, setNum] = useState("");
  const [desc, setDesc] = useState("");
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [arr1, setArr1] = useState([]);
  const [index, setIndex] = useState();

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const vali = () => {
    if (
      isNullEmpty(first) ||
      isNullEmpty(last) ||
      isNullEmpty(email) ||
      isNullEmpty(pno)
    ) {
      alert(
        "First name, Last name, Email ID and Phone number number cannot be empty"
      );
    } else if (first.length > 10 || last.length > 10) {
      alert("First name or Last name cannot be more that 10");
    } else if (!isPhoneNum(pno)) {
      alert("Phone number should have numbers only");
    } else if (pno.length != 10) {
      alert("Phone number should be of length 10");
    } else if (document.getElementById("desc").value != "") {
      var Request = {
        first: first,
        last: last,
        email: email,
        pno: pno,
        desc: desc,
      };
      if (flag2 == false) {
        arr1.push(Request);
        setArr1(arr1);
        setFlag1(true);
        setFirst("");
        setLast("");
        setEmail("");
        setNum("");
      } else {
        arr1.splice(index, 1, Request);
        setArr1(arr1);
        setFirst("");
        setLast("");
        setEmail("");
        setNum("");
        setFlag2(false);
      }
    }
  };

  const pnoVali = (e) => {
    if (isPhoneNum(e.target.value)) {
      setNum(e.target.value);
    } else {
      e.preventDefault();
    }
  };

  const editParent = (index) => {
    setIndex(index);
    setFirst(arr1[index].first);
    setLast(arr1[index].last);
    setNum(arr1[index].pno);
    setEmail(arr1[index].email);
    setDesc(arr1[index].desc);
    setFlag2(true);
  };

  const delParent = (arr) => {
    setArr1(arr);
  };

  return (
    <Container component="main">
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="first"
        label="First Name"
        name="First Name"
        autoComplete="First Name"
        autoFocus
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="last"
        label="Last Name"
        name="Last Name"
        autoComplete="Last Name"
        autoFocus
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email ID"
        name="Email ID"
        autoComplete="Email ID"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="pno"
        label="Phone number"
        name="Phone number"
        autoComplete="Phone number"
        autoFocus
        value={pno}
        onChange={(e) => pnoVali(e)}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Description</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="desc"
          onChange={(e) => setDesc(e.target.value)}
        >
          <MenuItem value="General User">General user</MenuItem>
          <MenuItem value="Moderator">Moderator</MenuItem>
          <MenuItem value="Administrator">Administrator</MenuItem>
        </Select>
      </FormControl>
      <br />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => vali()}
        style={{ marginTop: "30px" }}
      >
        Submit
      </Button>
      {flag1 ? (
        <Tablee data={arr1} editfunc={editParent} delfunc={delParent} />
      ) : (
        ""
      )}
    </Container>
  );
};

export default UserRegistration;
