import React from 'react';
import styled from 'styled-components';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

const NavbarContainer = styled.nav`
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

const NavItems = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--light-purple);
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>UserDashboard</Logo>
      <NavItems>
        <NavItem>
          <FiUser />
          <span>Perfil</span>
        </NavItem>
        <NavItem>
          <FiSettings />
          <span>Ajustes</span>
        </NavItem>
        <NavItem>
          <FiLogOut />
          <span>Salir</span>
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;