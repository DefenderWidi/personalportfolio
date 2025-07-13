import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './Hero';
import TechStack from './TechStack';
import MyWork from './MyWork';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Hero />
      <TechStack />
      <MyWork />
    </>
  </StrictMode>,
);
