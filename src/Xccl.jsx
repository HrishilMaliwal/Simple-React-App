import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import readXlsxFile from "read-excel-file";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import ReactExport from "react-data-export";
import reactDom from "react-dom";

const Xccl = () => {
  // const [arr, setArr] = useState([])

  // const check = (f) => {
  //   readXlsxFile(f).then((rows) => {
  //     for (let i = 1; i < rows.length; i++) {
  //       const e = rows[i];
  //       var r = {
  //         ID: e[0],
  //         name: e[1],
  //         a: e[2],
  //         b: e[3],
  //       };
  //       arr.push(r);
  //     }
  //   });
  // };

  // const abc = () => {
  //   console.log(arr);
  // };

  // const down = () => {
  //   const fileType =
  //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  //   const fileExtension = ".xlsx";

  //   const fileName = "abc";
  //   const csvData = [
  //     { id: 1, name: "ads" },
  //     { id: 2, type: "fva" },
  //   ];

  //   const ws = XLSX.utils.json_to_sheet(csvData);

  //   const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

  //   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  //   const data = new Blob([excelBuffer], { type: fileType });

  //   FileSaver.saveAs(data, fileName + fileExtension);
  // };

  // return (
  //   <div>
  //     <button onClick={() => down()}>download</button>
  //   </div>
  // );

  const [img, setImg] = useState()

  const readFile = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.files)
    console.log(e.target.files[0])
    // setImg(URL.createObjectURL(file))
  }
  return (
    <>
      <label>Add user excel file</label>
        <br />
        <input
          type="file"
          onChange={(e) => {
            readFile(e);
          }}
          style={{ display: "none" }}
          id="contained-button-file"
        />
        <label htmlFor="contained-button-file">
          <Button
            style={{ margin: "15px 15px 0px 0px" }}
            variant="contained"
            color="primary"
            component="span"
          >
            Upload
          </Button>
        </label>
        <img src={img}/>
    </>
  );
};

export default Xccl;
