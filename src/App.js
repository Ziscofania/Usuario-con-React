import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import UserStats from './components/UserStats';
import UserInterests from './components/UserInterests';
import RecentActivity from './components/RecentActivity';

const AppContainer = styled.div`
  &.purple-theme {
    background-color: #f9f6ff;
    min-height: 100vh;
  }
`;

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer className="purple-theme">
        <Navbar />
        <div className="app-container">
          <UserProfile />
          <UserStats />
          <DashboardContainer>
            <UserInterests />
            <RecentActivity />
          </DashboardContainer>
        </div>
      </AppContainer>
    </>
  );
}

export default App;