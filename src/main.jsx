import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DrumMachine from './DrumMachine.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DrumMachine />
  </StrictMode>
);
