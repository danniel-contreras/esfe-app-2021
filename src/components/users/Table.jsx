import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import ModalContent from "../global/Modal";
import FormContent from "./Form";

const TableContent = ({ users,setReload }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [user, setUser] = useState();
  const handleedit = (user) => {
    setUser(user);
    setShowEdit(true);
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-sm">ID</th>
            <th className="text-sm">NOMBRE</th>
            <th className="text-sm">APELLIDO</th>
            <th className="text-sm">EMAIL</th>
            <th className="text-sm">ACCIONES</th>
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
                <td className="text-sm">{us.Id}</td>
                <td className="text-sm">{us.Nombre}</td>
                <td className="text-sm">{us.Apellido}</td>
                <td className="text-sm">{us.Email}</td>
                <td className="text-sm">
                  <div className="d-flex">
                    <Button
                      onClick={() => handleedit(us)}
                      size="sm"
                      variant="success"
                    >
                      Editar
                    </Button>
                    <Button size="sm" variant="danger" className="mx-3">
                      Eliminar
                    </Button>
                    <Button size="sm" variant="primary" className="px-3">
                      Ver
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <ModalContent
        title="Actualizar usuario"
        show={showEdit}
        setShow={setShowEdit}
      >
        <FormContent setShow={setShowEdit} setReload={setReload} user={user} />
      </ModalContent>
    </>
  );
};

export default TableContent;
