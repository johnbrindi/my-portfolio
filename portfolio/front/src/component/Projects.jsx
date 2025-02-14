import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsContainer = styled(motion.section)`
  padding: 4rem 2rem;
  background: #282c34;
  color: white;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ProjectCard = styled(motion.div)`
  width: 300px;
  padding: 1rem;
  background: #1a1a1a;
  border-radius: 10px;
`;

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'A brief description of Project 1.' },
    { title: 'Project 2', description: 'A brief description of Project 2.' },
  ];
  return (
    <ProjectsContainer id="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Projects</h2>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index} whileHover={{ scale: 1.05 }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;