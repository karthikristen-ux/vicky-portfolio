import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Cpu, Terminal } from 'lucide-react';
import { TemPadTimeline } from '../components/TemPadTimeline';
import { PCBBoard } from '../components/PCBBoard';

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
  return (
    <div className="tva-container">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '75vh', margin: '0 0 4rem 0', gap: '2rem' }}>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%', maxWidth: '800px' }}>
            <div>
              <h1 className="crt-text" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', margin: '0 0 0.5rem 0', lineHeight: 1.1 }}>T. VENKATARAMANAN</h1>
              <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', borderBottom: 'none', color: '#ff8c00', opacity: 0.9, letterSpacing: '4px', padding: 0, display: 'inline-block' }}>Mechatronics Engineering</h2>
            </div>
            
            <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', color: '#ccc', lineHeight: '1.8', maxWidth: '100%' }}>
              Detail-oriented Mechatronics Engineering graduate with hands-on experience in <strong style={{color: '#fff'}}>PTC Creo, 3D printing, and mechanical design</strong>, 
              looking for a role to help build precision machinery, modular parts, and accurate 3D models. Currently at Sathyabama Institute of Science &amp; Technology (8.45 CGPA).
            </p>

            {/* PCB BOARD WITH CONTACT LINKS */}
            <PCBBoard />
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
