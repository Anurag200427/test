import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaBriefcase, FaCogs, FaUser, FaEnvelope } from 'react-icons/fa';
import './styles/animations.css';
import './styles/navbar.css';
import './styles/mobile-nav.css';
import './App.css';

// Global styles
const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap');
`;

// Styled components
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 1rem;
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #FFE800;
  }
`;

const NavIcon = styled.span`
  font-size: 1.2rem;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

const MainContent = styled.main`
  min-height: 100vh;
  width: 100%;
  background: #111111;
  position: relative;
  z-index: 1;
`;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <GlobalFonts />

      <button
        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <a href="/works.html" onClick={() => setMobileMenuOpen(false)}>
              <FaBriefcase />
              <span className="gradient-text">WORKS</span>
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/services.html" onClick={() => setMobileMenuOpen(false)}>
              <FaCogs />
              <span className="gradient-text">SERVICES</span>
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/about.html" onClick={() => setMobileMenuOpen(false)}>
              <FaUser />
              <span className="gradient-text">ABOUT</span>
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="mailto:adityaofficial2008@gmail.com" onClick={() => setMobileMenuOpen(false)}>
              <FaEnvelope />
              <span className="gradient-text">CONTACT</span>
            </a>
          </li>
        </ul>
      </nav>

      <Navbar>
        <NavList>
          <NavItem>
            <NavIcon><FaBriefcase /></NavIcon>
            <a href="/works.html">WORKS</a>
          </NavItem>
          <NavItem>
            <NavIcon><FaCogs /></NavIcon>
            <a href="/services.html">SERVICES</a>
          </NavItem>
          <NavItem>
            <NavIcon><FaUser /></NavIcon>
            <a href="/about.html">ABOUT</a>
          </NavItem>
          <NavItem>
            <NavIcon><FaEnvelope /></NavIcon>
            <a href="mailto:adityaofficial2008@gmail.com">CONTACT</a>
          </NavItem>
        </NavList>
      </Navbar>

      <MainContent>
        {/* Content for About page will go here */}
      </MainContent>

      <Footer>
        <span className="gradient-text">VAYOSA</span> © copyright 2025
      </Footer>
    </>
  );
}

export default App;
