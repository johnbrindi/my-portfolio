import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import profile from '../assets/profile.jpg'; // Import the local image

const HeroContainer = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4rem 2rem;
  background: #282c34;
  color: white;
`;

const ProfileImage = styled(motion.img)`
  width: 300px; // Increase the width
  height: 300px;
  border-radius: 50%;
  border: 4px solid #61dafb;
  object-fit: cover;
`;

const Hero = () => {
  return (
    <HeroContainer initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <div>
        <h1>Hi, I'm MAZWEWOH JOHN BRINDI</h1>
        <p>WEB  Developer | CYBER SECURITY Enthusiast</p>
      </div>
      <ProfileImage
        src={profile} // Use the imported local image
        alt="Profile"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </HeroContainer>
  );
};

export default Hero;