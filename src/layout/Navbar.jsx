import React, { useState } from "react";
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
} from "@coreui/react";

export const Navbar = () => {
  return (
    <CNavbar expand="lg" color="primary" colorScheme="dark">
      <CContainer fluid>
        <CNavbarBrand href="#">Mi Aplicacion Full Stack</CNavbarBrand>
        <CButton color="light">Agregar Usuario</CButton>
      </CContainer>
    </CNavbar>
  );
};
