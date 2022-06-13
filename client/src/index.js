import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Providers
import { SearchProvider } from 'context/SearchContext';
import { AuthProvider } from 'context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>
);
