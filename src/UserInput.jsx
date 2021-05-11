import React, { Component, useState } from "react";
import { isPhoneNum } from "./common";
import CTable from "./CTable";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

class UserInput extends Component {
  state = {
    first: "",
    last: "",
    email: "",
    pno: "",
    desc: "",
    flag1: false,
    flag2: false,
    arr1: [],
    index: null,
  };

  vali = () => {
    if (
      this.state.first == "" ||
      this.state.last == "" ||
      this.state.email == "" ||
      this.state.pno == ""
    ) {
      alert(
        "First name, Last name, Email ID and Phone number number cannot be empty"
      );
    } else if (this.state.first.length > 10 || this.state.last.length > 10) {
      alert("First name or Last name cannot be more that 10");
    } else if (!isPhoneNum(this.state.pno)) {
      alert("Phone number should be of length 10");
    } else if (true) {
      var Request = {
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        pno: this.state.pno,
        desc: this.state.desc,
      };
      if (this.state.flag2 == false) {
        this.state.arr1.push(Request);
        this.setState({
          arr1: this.state.arr1,
          flag1: true,
          first: "",
          last: "",
          email: "",
          pno: "",
        });
      } else {
        this.state.arr1.splice(this.state.index, 1, Request);
        this.setState({
          arr1: this.state.arr1,
          first: "",
          last: "",
          email: "",
          pno: "",
          flag2: false,
        });
      }
    }
  };

  editParent = (index) => {
    this.setState({
      index: index,
      first: this.state.arr1[index].first,
      last: this.state.arr1[index].last,
      email: this.state.arr1[index].email,
      pno: this.state.arr1[index].pno,
      desc: this.state.arr1[index].desc,
      flag2: true,
    });
  };

  render() {
    return (
      <>
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
            value={this.state.first}
            onChange={(e) => this.setState({ first: e.target.value })}
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
            value={this.state.last}
            onChange={(e) => this.setState({ last: e.target.value })}
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
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
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
            value={this.state.pno}
            onChange={(e) => this.setState({ pno: e.target.value })}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Description</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="desc"
              onChange={(e) => this.setState({ desc: e.target.value })}
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
            onClick={() => this.vali()}
            style={{ marginTop: "30px" }}
          >
            Submit
          </Button>
          {this.state.flag1 ? <CTable data={this.state.arr1} editfunc={this.editParent}/> : ""}
        </Container>
      </>
    );
  }
}

export default UserInput;
