import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkillsContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background: #1a1a1a;
  color: white;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const SkillItem = styled(motion.div)`
  padding: 1rem 2rem;
  background: #61dafb;
  color: #1a1a1a;
  border-radius: 10px;
`;

const Skills = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git',
    'Python', 'cisco packet Tracer'
  ];
  return (
    <SkillsContainer id="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Skills</h2>
      <SkillList>
        {skills.map((skill, index) => (
          <SkillItem key={index} whileHover={{ scale: 1.1 }}>{skill}</SkillItem>
        ))}
      </SkillList>
    </SkillsContainer>
  );
};

export default Skills;