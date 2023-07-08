import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Routes } from './Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
