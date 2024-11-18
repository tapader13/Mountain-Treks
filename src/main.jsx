import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import UserProvider from './provider/UserProvider.jsx';
import AosDeclare from './components/AosDeclare.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AosDeclare>
        <App />
      </AosDeclare>
    </UserProvider>
  </StrictMode>
);
