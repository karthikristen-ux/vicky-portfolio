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
  }, []);

  return (
    <div className="tva-container" style={{ position: 'relative' }}>
      
      {/* Interactive Gradient Background removed */}

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
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3.5rem, 8vw, 6rem)', margin: 0, lineHeight: 1.1, fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
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

        <motion.div variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem', width: '100%', maxWidth: '900px', margin: '0 auto 4rem auto' }}>
          
          <motion.div variants={itemVariants} style={{ background: 'rgba(20,20,20,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '0.5rem' }}>
              <Cpu size={28} color="#fff" strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: 0, fontFamily: "'Playfair Display', serif", textTransform: 'uppercase', letterSpacing: '1px' }}>
              Core Architecture
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#a3a3a3', fontSize: '0.95rem', fontFamily: "'Playfair Display', serif", textTransform: 'capitalize' }}>
              <li>PTC Creo Parametric &amp; TDD</li>
              <li>3D Printing (PLA, PETG, ABS, TPU)</li>
              <li>CAD Modeling &amp; Reverse Engineering</li>
              <li>NPD &amp; Custom Solutions Design</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} style={{ background: 'rgba(20,20,20,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '0.5rem' }}>
              <Terminal size={28} color="#fff" strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: 0, fontFamily: "'Playfair Display', serif", textTransform: 'uppercase', letterSpacing: '1px' }}>
              Deployment Tools
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#a3a3a3', fontSize: '0.95rem', fontFamily: "'Playfair Display', serif", textTransform: 'capitalize' }}>
              <li>PTC Creo / SolidWorks</li>
              <li>Bambu Studio (Slicer Software)</li>
              <li>Bambu Lab A1, P1S Printers</li>
              <li>2D/3D Drafting &amp; Tolerancing</li>
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
