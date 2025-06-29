import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  
  &:hover {
    color: #f0f0f0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => props.$active ? '#ffd700' : 'white'};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffd700;
  }
`;

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">HIV Watch Philippines</Logo>
        <NavLinks>
          <NavLink to="/" $active={location.pathname === '/'}>
            Dashboard
          </NavLink>
          <NavLink to="/map" $active={location.pathname === '/map'}>
            Clinic Map
          </NavLink>
          <NavLink to="/faq" $active={location.pathname === '/faq'}>
            FAQ
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 