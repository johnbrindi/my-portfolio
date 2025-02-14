import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: #1a1a1a;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 MAZWEWOH JOHN BRINDI. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;