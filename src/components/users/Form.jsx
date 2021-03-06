import { useFormik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";
import * as yup from "yup";
import { saveUser, updateUser } from "../../api/users.api";

const FormContent = ({ setReload, setShow, user }) => {
  const formik = useFormik({
    initialValues: values(user),
    validationSchema: yup.object({
      Nombre: yup.string().required("El nombre del usuario es requerido"),
      Apellido: yup.string().required("El apellido del usuario es requerido"),
      Email: yup
        .string()
        .required("El correo del usuario es requerido")
        .email("Correo invalido"),
      Clave: yup.string().required("La clave del usuario es requerido"),
    }),
    onSubmit: (values) => {
      if (user) {
        updateUser(values, user?.Id).then((res) => {
          if (res.ok) {
            setReload(true);
            setShow(false);
          }
        });
        return;
      }
      saveUser(values).then((res) => {
        if (res.ok) {
          setReload(true);
          setShow(false);
        }
      });
    },
  });
  return (
    <Form className="mx-4" onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className="text-sm">Nombre</Form.Label>
        <Form.Control
          name="Nombre"
          type="text"
          size="sm"
          onChange={formik.handleChange}
          defaultValue={user && user.Nombre}
          placeholder="Ingresa el nombre"
          className={
            (formik.errors.Nombre && formik.touched.Nombre && "input-error ") +
            " text-sm"
          }
        />
        {formik.errors.Nombre && formik.touched.Nombre && (
          <span className="my-1 text-error">{formik.errors.Nombre}</span>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-sm">Apellido</Form.Label>
        <Form.Control
          name="Apellido"
          type="text"
          size="sm"
          onChange={formik.handleChange}
          placeholder="Ingresa el apellido"
          defaultValue={user && user.Apellido}
          className={
            (formik.errors.Apellido &&
              formik.touched.Apellido &&
              "input-error ") + " text-sm"
          }
        />
        {formik.errors.Apellido && formik.touched.Apellido && (
          <span className="my-1 text-error">{formik.errors.Apellido}</span>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-sm">Email</Form.Label>
        <Form.Control
          size="sm"
          name="Email"
          type="email"
          onChange={formik.handleChange}
          placeholder="Ingresa el email"
          defaultValue={user && user.Email}
          className={
            (formik.errors.Email && formik.touched.Email && "input-error ") +
            " text-sm"
          }
        />
        {formik.errors.Email && formik.touched.Email && (
          <span className="my-1 text-error">{formik.errors.Email}</span>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-sm">Clave</Form.Label>
        <Form.Control
          size="sm"
          name="Clave"
          type="password"
          onChange={formik.handleChange}
          placeholder="Ingresa la clave"
          className={
            (formik.errors.Clave && formik.touched.Clave && "input-error ") +
            " text-sm"
          }
        />
        {formik.errors.Clave && formik.touched.Clave && (
          <span className="my-1 text-error">{formik.errors.Clave}</span>
        )}
      </Form.Group>

      <Button variant="primary" size="sm" className="px-4" type="submit">
        {user ? "Actualizar" : "Guardar"}
      </Button>
    </Form>
  );
};

export default FormContent;

function values(user) {
  return {
    Nombre: "" || user?.Nombre,
    Apellido: "" || user?.Apellido,
    Email: "" || user?.Email,
    Clave: "" || user?.Clave,
  };
}
