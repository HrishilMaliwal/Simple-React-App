import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const Tablee = (props) => {
  const [arr, setArr] = useState(props.data);
  const [arr2, setArr2] = useState([]);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [searchItem, setSearch] = useState("");

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  const del = (key) => {
    const d = [...arr];
    d.splice(key, 1);
    setArr(d);
    props.delfunc(d)
  };

  const edit = (key) => {
    props.editfunc(key);
  };

  const search = (val) => {
    setSearch(val);
    console.log(val);
    const x = arr.filter((i) => {
      return i.first == val;
    });
    setArr2(x);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search"
        style={{ marginTop: "100px", left: "-84px" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer
        component={Paper}
        style={{ marginTop: "30px", width: "max", backgroundColor: "#e6f9ff" }}
      >
        <Table className={classes.table} aria-label="simple table">
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
            <>
              <TableBody>
                {arr.map((item, key) => {
                 if ((searchItem !== "" ) && (item.first.toLowerCase().indexOf(searchItem.toLowerCase()) ) === -1) { return null }
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
                          onClick={() => edit(key)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="secondary"
                          type="submit"
                          onClick={() => del(key)}
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
        </Table>
      </TableContainer>
    </>
  );
};

export default Tablee;
