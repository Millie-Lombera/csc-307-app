import React from "react";

//Table is a custom made HTML table, that we created as a React Componenet
//React Components names: Ensure to capatalize to differenciate them between regular HTML elements.
function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

function TableBody() {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  );
}

function Table() {
  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
}
export default Table;