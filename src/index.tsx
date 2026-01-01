import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle} from './global';
import {ThemeProvider, DefaultTheme} from 'styled-components';

const Theme:DefaultTheme = {
  containerColor: '#3C3D37',
  inputColor: '#2E2F2A',
  btnColor: '#697565',
  btnColor2: '#75776A',
  white: '#fff',
  black: '#1E1E1E',
  textColor: '#ECDFCC',
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
