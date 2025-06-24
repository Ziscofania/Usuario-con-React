import React from 'react';
import styled from 'styled-components';
import { FiBarChart2, FiHeart, FiBookmark } from 'react-icons/fi';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.color || 'var(--light-purple)'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StatValue = styled.h3`
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const UserStats = () => {
  const stats = [
    {
      icon: <FiBarChart2 />,
      value: "1,245",
      label: "Visitas al perfil",
      color: "#6a0dad"
    },
    {
      icon: <FiHeart />,
      value: "328",
      label: "Likes recibidos",
      color: "#9c27b0"
    },
    {
      icon: <FiBookmark />,
      value: "87",
      label: "Proyectos guardados",
      color: "#b39ddb"
    }
  ];

  return (
    <StatsContainer>
      {stats.map((stat, index) => (
        <StatCard key={index}>
          <StatIcon color={stat.color}>{stat.icon}</StatIcon>
          <StatValue>{stat.value}</StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatCard>
      ))}
    </StatsContainer>
  );
};

export default UserStats;