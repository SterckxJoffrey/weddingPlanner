

import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { jwtDecode } from "jwt-decode"
import { useState, useEffect } from "react"

const Nav = styled.nav`
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 0.5rem 2rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: #2d2d2d;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s;
  &:hover {
    color: #b48b31;
  }
`;


export default function Navbar() {
  const [user, setUser] = useState<{ name?: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        setUser({ name: decoded.name || decoded.email });
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">Accueil</NavLink></NavItem>
        <NavItem><NavLink to="/weddings">Mariages</NavLink></NavItem>
        <NavItem><NavLink to="/guests">Invités</NavLink></NavItem>
        <NavItem><NavLink to="/vendors">Prestataires</NavLink></NavItem>
        <NavItem><NavLink to="/budget">Budget</NavLink></NavItem>
        {user ? (
          <>
            <NavItem>Bonjour, {user.name}</NavItem>
            <NavItem><button style={{background:"none",border:"none",color:"#b48b31",cursor:"pointer",fontWeight:600}} onClick={handleLogout}>Déconnexion</button></NavItem>
          </>
        ) : (
          <>
            <NavItem><NavLink to="/login">Login</NavLink></NavItem>
            <NavItem><NavLink to="/register">Sign Up</NavLink></NavItem>
          </>
        )}
      </NavList>
    </Nav>
  );
}
