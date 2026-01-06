import React, { useEffect, useState } from "react";
import {
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const usuarios = await axios.get("http://localhost:8080/api/v1/usuarios");
    console.log(usuarios.data);
    setUsers(usuarios.data);
  };
  return (
    <CContainer className="mt-3">
      <CTable className="border">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">N°</CTableHeaderCell>
            <CTableHeaderCell scope="col">Nombre de Usuario</CTableHeaderCell>
            <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
            <CTableHeaderCell scope="col">Apellido</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {users.map((user, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              <CTableDataCell>{user.nombreUsuario}</CTableDataCell>
              <CTableDataCell>{user.nombre}</CTableDataCell>
              <CTableDataCell>{user.apellido}</CTableDataCell>
              <CTableDataCell>{user.correoElectronico}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>{" "}
    </CContainer>
  );
};

export default Home;
