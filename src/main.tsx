import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './Hero';
import TechStack from './TechStack';
import MyWork from './mywork';
import Experience from './experience';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Hero />
      <TechStack />
      <Experience />
      <MyWork />
    </>
  </StrictMode>,
);
