import React from 'react';
import styled from 'styled-components';
import { FiMail, FiCalendar, FiMapPin } from 'react-icons/fi';

const ProfileContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--light-purple);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const UserName = styled.h2`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const UserTitle = styled.p`
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const UserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
`;

const UserProfile = ({ user }) => {
  // Datos de ejemplo
  const userData = {
    name: "Alexandra Pérez",
    title: "Desarrolladora Frontend",
    email: "alexandra@example.com",
    joinDate: "Se unió en Enero 2022",
    location: "Barcelona, España",
    initials: "AP"
  };

  return (
    <ProfileContainer>
      <Avatar>{userData.initials}</Avatar>
      <UserName>{userData.name}</UserName>
      <UserTitle>{userData.title}</UserTitle>
      <UserInfo>
        <InfoItem>
          <FiMail />
          <span>{userData.email}</span>
        </InfoItem>
        <InfoItem>
          <FiCalendar />
          <span>{userData.joinDate}</span>
        </InfoItem>
        <InfoItem>
          <FiMapPin />
          <span>{userData.location}</span>
        </InfoItem>
      </UserInfo>
    </ProfileContainer>
  );
};

export default UserProfile;