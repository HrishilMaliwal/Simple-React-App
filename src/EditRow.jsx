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
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField';

const Tablee = (props) => {
  const [arr, setArr] = useState(props.data);
  const [arr2, setArr2] = useState([])
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [searchItem, setSearch] = useState('')

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();


  const setChange = (change, key, field) => {
    const arr1 = [...arr];

    // arr1[key].field = change;

    if (field == "first") {
      arr1[key].first = change;
    } else if (field == "last") {
      arr1[key].last = change;
    } else if (field == "email") {
      arr1[key].email = change;
    } else if (field == "pno") {
      arr1[key].pno = change;
    } else if (field == "desc") {
      arr1[key].desc = change;
    }

    setArr(arr1);
  };

  const del = (key) => {
    const d = [...arr];
    d.splice(key, 1);
    setArr(d);
    console.log(arr);
  };

  const edit = (key) => {
    setFlag1(true);
    setFlag2(true);
  };

  const doneEdit = () => {
    setFlag1(false);
    setFlag2(false);
  };

  const search = () => {
    console.log(searchItem)
    const x = arr.filter((i)=>{return i.first==searchItem})
    setArr2(x)
  }

  return (
    <>
      <TextField id="outlined-basic" variant="outlined" label="Search" style={{ marginLeft:"50px", marginTop:"12px"}} onChange={(e) => setSearch(e.target.value)}/>
      <Button variant="outlined" style={{marginTop:"30px", marginLeft:"10px"}} onClick={()=>search()}>Search</Button>
      {searchItem==''?
      <>
      <TableContainer
        component={Paper}
        style={{ marginTop: "30px", width: "max" }}
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
          <TableBody>
            {arr.map((item, key) => {
              return (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key + 1}
                  </TableCell>
                  {flag1 ? (
                    <>
                      <TableCell align="right">
                        <input
                          type="text"
                          value={item.first}
                          onChange={(e) =>
                            setChange(e.target.value, key, "first")
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <input
                          type="text"
                          value={item.last}
                          onChange={(e) =>
                            setChange(e.target.value, key, "last")
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <input
                          type="text"
                          value={item.email}
                          onChange={(e) =>
                            setChange(e.target.value, key, "email")
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <input
                          type="text"
                          value={item.pno}
                          onChange={(e) =>
                            setChange(e.target.value, key, "pno")
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Description
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="desc"
                            onChange={(e) =>
                              setChange(e.target.value, key, "desc")
                            }
                          >
                            <MenuItem value="General User">
                              General user
                            </MenuItem>
                            <MenuItem value="Moderator">Moderator</MenuItem>
                            <MenuItem value="Administrator">
                              Administrator
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell align="right">{item.first}</TableCell>
                      <TableCell align="right">{item.last}</TableCell>
                      <TableCell align="right">{item.email}</TableCell>
                      <TableCell align="right">{item.pno}</TableCell>
                      <TableCell align="right">{item.desc}</TableCell>
                    </>
                  )}
                  <TableCell>
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
        </Table>
      </TableContainer> 
      <Button
        style={{ marginTop: "20px", marginRight: "30px" }}
        variant="outlined"
        color="primary"
        type="submit"
        onClick={() => edit()}
      >
        Edit
      </Button> 
      {flag2 ? (
        <Button
          style={{ marginTop: "20px" }}
          variant="outlined"
          color="secondary"
          type="submit"
          onClick={() => doneEdit()}
        >
          Save
        </Button>
      ) : (
        ""
      )} </> : 
      <> 
      <TableContainer
        component={Paper}
        style={{ marginTop: "30px", width: "max" }}
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
          <TableBody>
            {arr2.map((item, key) => {
              return (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key + 1}
                  </TableCell>
                  {flag1 ? (
                    <>
                      <TableCell align="right">
                        <input
                          type="text"
                          value={item.first}
                          onChange={(e) =>
                            setChange(e.target.value, key, "first")
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <input
                          type="text"
                          value={item.last}
                          onChange={(e) =>
                            setChange(e.target.value, key, "last")
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <input
                          type="text"
                          value={item.email}
                          onChange={(e) =>
                            setChange(e.target.value, key, "email")
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <input
                          type="text"
                          value={item.pno}
                          onChange={(e) =>
                            setChange(e.target.value, key, "pno")
                          }
                        />
                      </TableCell>
                      <TableCell align="right">
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Description
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="desc"
                            onChange={(e) =>
                              setChange(e.target.value, key, "desc")
                            }
                          >
                            <MenuItem value="General User">
                              General user
                            </MenuItem>
                            <MenuItem value="Moderator">Moderator</MenuItem>
                            <MenuItem value="Administrator">
                              Administrator
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell align="right">{item.first}</TableCell>
                      <TableCell align="right">{item.last}</TableCell>
                      <TableCell align="right">{item.email}</TableCell>
                      <TableCell align="right">{item.pno}</TableCell>
                      <TableCell align="right">{item.desc}</TableCell>
                    </>
                  )}
                  <TableCell>
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
        </Table>
      </TableContainer> 
      <Button
        style={{ marginTop: "20px", marginRight: "30px" }}
        variant="outlined"
        color="primary"
        type="submit"
        onClick={() => edit()}
      >
        Edit
      </Button> 
      {flag2 ? (
        <Button
          style={{ marginTop: "20px" }}
          variant="outlined"
          color="secondary"
          type="submit"
          onClick={() => doneEdit()}
        >
          Save
        </Button>
      ) : (
        ""
      )}
      </>
       }
    </>
  );
};

export default Tablee;
