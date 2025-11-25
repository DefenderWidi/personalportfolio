import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Download } from 'lucide-react';
import GradientText from './components/GradientText';
import TypewriterRoles from './components/TypewriterRoles';
import LightRays from './components/LightRays';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('mywork')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-x-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

    {/* Light rays */}
<div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-100">
  <LightRays
    raysOrigin="top-center"
    raysColor="#ffd700" 
    raysSpeed={isMobile ? 0.7 : 1.2} 
    lightSpread={isMobile ? 5 : 2.5}
    rayLength={isMobile ? 3.5 : 2.5} 
    followMouse={!isMobile}
    mouseInfluence={isMobile ? 0 : 0.2} 
    noiseAmount={isMobile ? 0.18 : 0.08} 
    distortion={isMobile ? 0.08 : 0.05} 
  />
</div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl backdrop-saturate-200 p-8 md:p-16 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        {/* Watery shimmer + reflection */}
<div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
  {/* Shimmer utama lebih terang dan tajam */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-white/20 to-transparent animate-waterWave blur-lg opacity-10 saturate-[2.5] mix-blend-screen" />

  {/* Pantulan air di bawah, lebih tebal dan hangat */}
  <div className="absolute top-full left-0 w-full h-full scale-y-[-1] animate-waterWave blur-md opacity-60 bg-gradient-to-t from-[#fff9c4]/50 via-[#ffe082]/30 to-transparent mix-blend-screen" />
</div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-[#ffc107]" />
              <span className="text-sm text-white/80">Available for projects</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <GradientText
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
                colors={["#ff5e00", "#ff8800", "#ffb300", "#ffe066"]}
                animationSpeed={5}
              >
                Defender Widi
              </GradientText>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-3xl font-light text-[#ffcc80] mb-6 h-[2.5rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <TypewriterRoles
                roles={[
                  'Frontend Developer',
                  'Full-Stack Developer',
                  'Web Developer',
                  'Copywriter',
                  'Content Writer',
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1500}
              />
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              A Computer Engineering student with extensive experience in web development, built through internships, freelance projects, and academic work. I specialize in developing interactive and scalable web applications using modern technology stacks. Beyond coding, I have a strong passion for writing, particularly in articles and copywriting that bridge the gap between complex technology and engaging human-centered communication.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <button
                onClick={scrollToProjects}
                className="group relative overflow-hidden rounded-xl px-8 py-4 text-lg text-white shadow-lg bg-gradient-to-r from-[#ff6600] to-[#ffc107] hover:from-[#cc3300] hover:to-[#ff9900] transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#1a0a00]/60 before:to-transparent before:animate-shine before:z-0 before:blur-md before:mix-blend-overlay" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowDown className="w-5 h-5" />
                  </motion.div>
                </span>
              </button>

              <a
                href="https://drive.google.com/file/d/1vwtQeiYADHkS8BeuYCpsg54DeibWsQqq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group relative overflow-hidden rounded-xl px-8 py-4 text-lg text-white shadow-lg backdrop-blur-sm bg-white/10 border border-white/30 hover:scale-105 transition-all duration-300">
                  <span className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-shine before:z-0 before:blur-lg" />
                  <span className="relative z-10 flex items-center gap-2">
                    Download CV
                    <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <Download className="w-5 h-5" />
                    </motion.div>
                  </span>
                </button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;