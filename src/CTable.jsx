import React, { Component, useState } from "react";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import { history } from 'react-router'
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

class CTable extends Component {
  state = {
    arr: this.props.data,
    arr2: [],
    searchItem: "",
    flag1:false
  };

  del = (key) => {
    const d = [...this.state.arr];
    d.splice(key, 1);
    this.setState({ arr: d });
  };

  edit = (key) => {
    this.props.editfunc(key);
  };

  search = (val) => {
    this.setState({ searchItem: val });
    console.log(val);
    const x = this.state.arr.filter((i) => {
      return i.first == val;
    });
    this.setState({ arr2: x });
  };

  redirect = () => {
    this.props.history.push({pathname: '/',state: {tskId: taskId,}});
  }

  render() {
    return (
      <>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search"
          style={{ marginTop: "100px", left: "-84px" }}
          onChange={(e) => this.search(e.target.value)}
        />
        <TableContainer
          component={Paper}
          style={{
            marginTop: "30px",
            width: "max",
            backgroundColor: "#e6f9ff",
          }}
        >
          <Table aria-label="simple table">
            {this.state.arr.length == 0 ? (
              ""
            ) : (
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Email ID</TableCell>
                  <TableCell align="right">Phone Number</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
            )}
            {this.state.searchItem == "" ? (
              <>
                <TableBody>
                  {this.state.arr.map((item, key) => {
                    return (
                      <TableRow key={key}>
                        <TableCell component="th" scope="row">
                          {key + 1}
                        </TableCell>
                        <TableCell align="right">{item.first}</TableCell>
                        <TableCell align="right">{item.last}</TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.pno}</TableCell>
                        <TableCell align="right">{item.desc}</TableCell>
                        <TableCell>
                          <Button
                            style={{ marginLeft: "20px" }}
                            color="primary"
                            type="submit"
                            onClick={() => this.edit(key)}
                          >
                            Edit
                          </Button>
                          <Button
                            color="secondary"
                            type="submit"
                            onClick={() => this.del(key)}
                            style={{ marginLeft: "20px" }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </>
            ) : (
              <>
                <TableBody>
                  {this.state.arr2.map((item, key) => {
                    return (
                      <TableRow key={key}>
                        <TableCell component="th" scope="row">
                          {key + 1}
                        </TableCell>
                        <TableCell align="right">{item.first}</TableCell>
                        <TableCell align="right">{item.last}</TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.pno}</TableCell>
                        <TableCell align="right">{item.desc}</TableCell>
                        <TableCell>
                          <Button
                            color="secondary"
                            type="submit"
                            onClick={() => this.del(key)}
                            style={{ marginLeft: "20px" }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>
        <button onClick={()=>this.redirect()}>Redirect</button>
      </>
    );
  }
}

export default CTable;
