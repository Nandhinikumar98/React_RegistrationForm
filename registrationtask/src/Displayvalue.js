import React from "react";
const Displayvalue = ({ details, data }) => {
  //const onEdit = (index) => {};

  function onDelete(index) {
    let del = [...details];
    //console.log(index + 1);
    del.splice(index, 1);
    data(del);
  }
  return (
    <center>
      <h2>Details :</h2>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>UserName </th>
            <th> Address </th>
            <th> Email </th>
            <th> Gender </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {details.map((val, index) => (
            <tr key={index}>
              <td>{val.username}</td>
              <td>{val.address}</td>
              <td>{val.email}</td>
              <td>{val.gender}</td>
              <td>
                {/*<button onClick={() => onEdit(index)}>Edit</button> */}
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

export default Displayvalue;
