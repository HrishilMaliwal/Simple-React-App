import React, { useState } from "react";
import readXlsxFile from "read-excel-file";

const Xccl = () => {
  const [arr, setArr] = useState([])
  
  const check = (f) => {
    readXlsxFile(f).then((rows) => {
      for (let i = 1; i < rows.length; i++) {
        const e = rows[i];
        var r = {
          ID: e[0],
          name: e[1],
          a:e[2],
          b:e[3]
        }
        arr.push(r)
      }
    });
  };

  const abc = () => {
    console.log(arr)
  }
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          check(e.target.files[0]);
        }}
      />
      <button onClick={()=>abc()}>check</button>
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((i, k) => (
            <tr>
              <td>{i.ID}</td>
              <td>{i.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Xccl;

// readXlsxFile(input.files[0]).then((rows, files) => {for (let index = 0; index < rows.length; index++) {const element = rows[index];exits.push(element[0])}

// const Xccl = () => {
//   const [items, setItems] = useState([]);

//   const readExcel = (file) => {
//     const promise = new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsArrayBuffer(file);

//       fileReader.onload = (e) => {
//         const bufferArray = e.target.result;

//         const wb = XLSX.read(bufferArray, { type: "buffer" });

//         const wsname = wb.SheetNames[0];

//         const ws = wb.Sheets[wsname];

//         const data = XLSX.utils.sheet_to_json(ws);

//         resolve(data);
//       };

//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });

//     promise.then((d) => {
//       setItems(d);
//       console.log(d);
//     });
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         onChange={(e) => {
//           readExcel(e.target.files[0]);
//         }}
//       />
      // <table class="table container">
      //   <thead>
      //     <tr>
      //       <th scope="col">ID</th>
      //       <th scope="col">Name</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {items.map((d) => (
      //       <tr key={d.ID}>
      //         <th>{d.ID}</th>
      //         <td>{d.name}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
//     </div>
//   );
// };
// export default Xccl;
