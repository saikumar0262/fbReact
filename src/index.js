import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './Thems';
import App from './App';
import './index.css'


const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    


  </React.StrictMode>
);


