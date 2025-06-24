import React from 'react';
import styled from 'styled-components';

const InterestsContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Tag = styled.span`
  background-color: var(--light-purple);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const UserInterests = () => {
  const interests = [
    "Programación", "Diseño UI/UX", "Tecnología", 
    "Viajes", "Fotografía", "Música", 
    "Libros", "Cine", "Deportes"
  ];

  return (
    <InterestsContainer>
      <SectionTitle>Mis Intereses</SectionTitle>
      <TagsContainer>
        {interests.map((interest, index) => (
          <Tag key={index}>{interest}</Tag>
        ))}
      </TagsContainer>
    </InterestsContainer>
  );
};

export default UserInterests;