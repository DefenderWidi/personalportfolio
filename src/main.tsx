import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './Hero';
import TechStack from './TechStack';
import MyWork from './mywork';
import Experience from './experience';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Floating cheerful blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-80px] left-[-60px] h-72 w-72 rounded-full bg-[#ffe08a]/70 blur-3xl animate-floatBlob" />
        <div
          className="absolute top-[18%] right-[-70px] h-80 w-80 rounded-full bg-[#ffb95c]/55 blur-3xl animate-floatBlob"
          style={{ animationDelay: '1.2s' }}
        />
        <div
          className="absolute bottom-[10%] left-[10%] h-64 w-64 rounded-full bg-[#ffd36d]/55 blur-3xl animate-floatBlob"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-[-80px] right-[10%] h-72 w-72 rounded-full bg-[#ffcf7e]/55 blur-3xl animate-floatBlob"
          style={{ animationDelay: '2.8s' }}
        />
      </div>

      <Hero />
      <TechStack />
      <Experience />
      <MyWork />
    </div>
  </StrictMode>,
);