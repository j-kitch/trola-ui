import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, AppEnv } from './App';
import './index.css';
import 'tailwindcss/src/css/preflight.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AppEnv>
      <App />
    </AppEnv>
);
