import React from "react";
import {
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

const Home = () => {
  return (
    <CContainer>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">N°</CTableHeaderCell>
            <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
            <CTableHeaderCell scope="col">Apellido</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>@mdo</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Jacob</CTableDataCell>
            <CTableDataCell>Thornton</CTableDataCell>
            <CTableDataCell>@fat</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
            <CTableDataCell>@twitter</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>{" "}
    </CContainer>
  );
};

export default Home;
