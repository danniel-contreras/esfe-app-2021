import { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import TableContent from "../components/users/Table";
import Layout from "../layout/Layout";
import ModalContent from "../components/global/Modal";
import FormContent from "../components/users/Form";
import { getAllUsers } from "../api/users.api";
import MyPagination from "../components/global/Pagination";

const Users = () => {
  const [show, setShow] = useState(false);
  const [reload, setReload] = useState(false);
  const [search, setSearch] = useState({ name: "", last: "" });
  const [pagination, setPagination] = useState();
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState();
  useEffect(() => {
    const getUsers = () => {
      getAllUsers(page, search.name, search.last).then((res) => {
        setUsers(res.users);
        setPagination(res.pagination);
      });
    };
    setReload(false);
    return getUsers();
  }, [reload, page, search]);
  return (
    <Layout>
      <div className="my-4">
        <p className="title">Listado de usuarios</p>
        <div className="my-4">
          <Row className="w-75">
            <Col>
              <label className="text-sm">Buscar por nombre</label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Escribe para buscar por nombre"
                onChange={(e) =>
                  setSearch({ ...search, name: e.currentTarget.value })
                }
              />
            </Col>
            <Col>
              <label className="text-sm">Buscar por apellido</label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Escribe para buscar por apellido"
                onChange={(e) =>
                  setSearch({ ...search, last: e.currentTarget.value })
                }
              />
            </Col>
          </Row>

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
          <MyPagination
            totPages={pagination?.totalPages}
            currentPage={pagination?.currentPage}
            pageClicked={setPage}
          >
            <TableContent users={users} />
          </MyPagination>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
