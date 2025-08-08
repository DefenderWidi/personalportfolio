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
      {/* Overlay gelap */}
      <div className="absolute inset-0 z-0" />

      {/* Efek LightRays (di atas bg hitam tapi di bawah konten) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-100 mix-blend-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffcc33"
          raysSpeed={isMobile ? 0.9 : 1.7}
          lightSpread={isMobile ? 3.5 : 1.5}
          rayLength={isMobile ? 2.8 : 1.8}
          followMouse={!isMobile}
          mouseInfluence={isMobile ? 0 : 0.1}
          noiseAmount={isMobile ? 0.12 : 0.05}
          distortion={isMobile ? 0.04 : 0.02}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Kartu kaca */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#fff3]/10 backdrop-blur-md p-8 md:p-16 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ff6600]/15 via-transparent to-[#ffc107]/15" />

          {/* Isi */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/20 bg-[#fff3]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-[#ffc107]" />
              <span className="text-sm text-white/80">Available for projects</span>
            </motion.div>

            {/* Nama */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <GradientText
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight break-words"
                colors={['#ff5e00', '#ff8800', '#ffb300', '#ffe066']}
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

            {/* Description dengan animasi biasa */}
            <motion.p
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              A Computer Engineering student with extensive experience in web development, built through internships, freelance projects, and academic work. I specialize in developing interactive and scalable web applications using modern technology stacks. Beyond coding, I have a strong passion for writing, particularly in articles and copywriting that bridge the gap between complex technology and engaging human-centered communication.
            </motion.p>

            {/* Tombol */}
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
                {/* Shine effect */}
                <span className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#1a0a00]/60 before:to-transparent before:animate-shine before:z-0 before:blur-md before:mix-blend-overlay" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-5 h-5" />
                  </motion.div>
                </span>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#cc3300] to-[#ff9900] transition-opacity duration-300" />
              </button>

              <a
                href="https://drive.google.com/file/d/1Syka8OxwO2Qa4niYjHbQJ0_I_g_PSIEh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group relative overflow-hidden rounded-xl px-8 py-4 text-lg text-white shadow-lg backdrop-blur-sm bg-[#fff3]/10 border border-white/30 hover:scale-105 transition-all duration-300">
                  {/* Shine effect */}
                  <span className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-shine before:z-0 before:blur-lg" />

                  {/* Isi konten */}
                  <span className="relative z-10 flex items-center gap-2">
                    Download CV
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Download className="w-5 h-5" />
                    </motion.div>
                  </span>

                  {/* Overlay saat hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/10 to-white/5 transition-opacity duration-300" />
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
