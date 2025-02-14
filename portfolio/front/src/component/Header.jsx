import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Icon = styled.div`
  font-size: 1.5rem; // Increase the size of the icons
  color: #61dafb;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const Header = () => {
  return (
    <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>My Portfolio</h1>
      <NavLinks>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </NavLinks>
      <SocialIcons>
        <a href="https://www.linkedin.com/in/mazwewoh-john-brindi-6684a3284/">
          <Icon>
            <FaLinkedin />
          </Icon>
        </a>
        <a href="https://github.com/johnbrindi">
          <Icon>
            <FaGithub />
          </Icon>
        </a>
        <a href="mailto:johnbrindimazwewoh@gmail.com">
          <Icon>
            <FaEnvelope />
          </Icon>
        </a>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;