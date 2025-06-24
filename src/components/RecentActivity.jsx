import React from 'react';
import styled from 'styled-components';
import { FiCode, FiBook, FiCamera, FiMusic } from 'react-icons/fi';

const ActivityContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const ActivityList = styled.ul`
  list-style: none;
`;

const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ActivityIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--light-purple);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ActivityContent = styled.div`
  flex-grow: 1;
`;

const ActivityTitle = styled.h4`
  color: #333;
  margin-bottom: 0.3rem;
`;

const ActivityDate = styled.p`
  color: #888;
  font-size: 0.8rem;
`;

const RecentActivity = () => {
  const activities = [
    {
      icon: <FiCode />,
      title: "Publicó un nuevo proyecto en GitHub",
      date: "Hace 2 horas"
    },
    {
      icon: <FiBook />,
      title: "Agregó un nuevo libro a su lista de lectura",
      date: "Ayer"
    },
    {
      icon: <FiCamera />,
      title: "Compartió fotos de su último viaje",
      date: "Hace 3 días"
    },
    {
      icon: <FiMusic />,
      title: "Creó una nueva lista de reproducción",
      date: "Hace 1 semana"
    }
  ];

  return (
    <ActivityContainer>
      <SectionTitle>Actividad Reciente</SectionTitle>
      <ActivityList>
        {activities.map((activity, index) => (
          <ActivityItem key={index}>
            <ActivityIcon>{activity.icon}</ActivityIcon>
            <ActivityContent>
              <ActivityTitle>{activity.title}</ActivityTitle>
              <ActivityDate>{activity.date}</ActivityDate>
            </ActivityContent>
          </ActivityItem>
        ))}
      </ActivityList>
    </ActivityContainer>
  );
};

export default RecentActivity;