import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import TableContent from "../components/users/Table";
import Layout from "../layout/Layout";
import ModalContent from "../components/global/Modal";
import FormContent from "../components/users/Form";
import { getAllUsers } from "../api/users.api";

const Users = () => {
  const [show, setShow] = useState(false);
  const [reload, setReload] = useState(false);
  const [users, setUsers] = useState();
  useEffect(() => {
    const getUsers = () => {
      getAllUsers().then((res) => {
        setUsers(res);
      });
    };
    setReload(false)
    return getUsers();
  }, [reload]);
  return (
    <Layout>
      <div className="my-4">
        <p className="title">Listado de usuarios</p>
        <div className="my-4">
          <Button
            onClick={() => setShow(true)}
            size="sm"
            className="my-3 float-end "
            variant="primary"
          >
            Agregar
          </Button>
          <ModalContent title="Agregar Usuario" show={show} setShow={setShow}>
            <FormContent setReload={setReload} setShow={setShow} />
          </ModalContent>
          <TableContent users={users} />
        </div>
      </div>
    </Layout>
  );
};

export default Users;
