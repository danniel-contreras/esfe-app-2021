import React from "react";
import { Table } from "react-bootstrap";

const TableContent = ({ users }) => {
  console.log(users);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>APELLIDO</th>
          <th>EMAIL</th>
        </tr>
      </thead>
      <tbody>
        {typeof users === "undefined" ? (
          <tr>
            <p>Cargando resultados</p>
          </tr>
        ) : (
          users.map((us) => (
            <tr key={us.Id}>
              <td>{us.Id}</td>
              <td>{us.Nombre}</td>
              <td>{us.Apellido}</td>
              <td>{us.Email}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default TableContent;
