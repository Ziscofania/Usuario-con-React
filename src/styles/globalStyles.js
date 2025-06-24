import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
  }

  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .purple-theme {
    --primary-color: #6a0dad;
    --secondary-color: #9c27b0;
    --light-purple: #b39ddb;
    --dark-purple: #4a148c;
    --text-color: #ffffff;
    --card-bg: #ffffff;
  }
`;