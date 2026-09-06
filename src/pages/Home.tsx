import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Cpu, Terminal } from 'lucide-react';
import { TemPadTimeline } from '../components/TemPadTimeline';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const Home: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="tva-container" style={{ position: 'relative' }}>
      
      {/* Interactive Gradient Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(45, 75, 180, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          backgroundColor: '#050505'
        }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '85vh', margin: '0 0 4rem 0', gap: '2rem', paddingTop: '4rem' }}>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%', maxWidth: '800px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', fontStyle: 'italic', fontWeight: 400, letterSpacing: '1px', color: '#a3a3a3' }}>
                Mechatronics Engineering Graduate
              </span>
              <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 'clamp(3.5rem, 8vw, 6rem)', margin: 0, lineHeight: 1.1, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                Venkataramanan
              </h1>
            </div>
            
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', color: '#a3a3a3', lineHeight: '1.6', maxWidth: '85%', fontWeight: 400 }}>
              Detail-oriented graduate with hands-on experience in <strong style={{color: '#fff', fontWeight: 600}}>PTC Creo, 3D printing, and mechanical design</strong>, 
              looking for a role to help build precision machinery, modular parts, and accurate 3D models.
            </p>

            <div className="glass-input-cta" style={{ marginTop: '1rem' }}>
              <span>Reach out to collaborate on a project.</span>
              <div className="cta-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>

          </motion.div>

        </div>

        <motion.div variants={containerVariants} className="home-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          <motion.div variants={itemVariants} className="tva-card">
            <h3 className="crt-text" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,140,0,0.2)', paddingBottom: '1rem' }}>
              <Cpu size={24} color="#ff8c00" /> CORE ARCHITECTURE
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#ccc' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#ff8c00' }}>▹</span> PTC Creo Parametric &amp; TDD</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#ff8c00' }}>▹</span> 3D Printing (PLA, PETG, ABS, TPU)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#ff8c00' }}>▹</span> CAD Modeling &amp; Reverse Engineering</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#ff8c00' }}>▹</span> NPD &amp; Custom Solutions Design</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="tva-card">
            <h3 className="crt-text" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,140,0,0.2)', paddingBottom: '1rem' }}>
              <Terminal size={24} color="#ff8c00" /> DEPLOYMENT TOOLS
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#ccc' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#ff8c00' }}>▹</span> PTC Creo / SolidWorks</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#ff8c00' }}>▹</span> Bambu Studio (Slicer Software)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#ff8c00' }}>▹</span> Bambu Lab A1, P1S Printers</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: '#ff8c00' }}>▹</span> 2D/3D Drafting &amp; Tolerancing</li>
            </ul>
          </motion.div>

        </motion.div>

        {/* TVA TEMPAD TIMELINE */}
        <motion.div variants={itemVariants}>
          <h3 className="crt-text" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '-1rem', textAlign: 'center', letterSpacing: '8px' }}>EXPERIENCE LOG</h3>
          <TemPadTimeline />
        </motion.div>

      </motion.div>
    </div>
  );
};
