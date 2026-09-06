import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    id: '01',
    title: '10th Grade',
    subtitle: 'Maharishi Vidhya Mandhir',
    date: '03.15.2017',
    description: 'Foundation in science and mathematics, developing an early interest in engineering and mechanics.',
    align: 'left'
  },
  {
    id: '02',
    title: '12th Grade',
    subtitle: 'Maharishi Vidhya Mandhir',
    date: '05.20.2019',
    description: 'Advanced studies in physics and mathematics, preparing for a career in mechatronics and product design.',
    align: 'right'
  },
  {
    id: '03',
    title: 'B.E. Mechatronics',
    subtitle: 'Sathyabama IST',
    date: '08.10.2023',
    description: 'Comprehensive engineering degree focusing on mechanical systems, electronics, and control theory.',
    align: 'left'
  },
  {
    id: '04',
    title: 'NPD Trainee',
    subtitle: 'Alinks 3D',
    date: '01.01.2025',
    description: 'Hands-on experience in New Product Development, 3D printing, CAD modeling, and reverse engineering.',
    align: 'right'
  }
];

export const TemPadTimeline: React.FC = () => {
  useEffect(() => {
    // Just to ensure page starts at top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem', color: '#fff', position: 'relative' }}>
      
      {/* Central Line */}
      <div style={{ 
        position: 'absolute', 
        left: '50%', 
        top: '6rem', 
        bottom: '6rem', 
        width: '1px', 
        background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.2) 10%, rgba(255,255,255,0.2) 90%, rgba(255,255,255,0))',
        transform: 'translateX(-50%)',
        zIndex: 0
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', position: 'relative', zIndex: 1 }}>
        {timelineData.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ 
              display: 'flex', 
              justifyContent: item.align === 'left' ? 'flex-start' : 'flex-end',
              width: '100%',
              position: 'relative'
            }}
          >
            {/* Connecting horizontal line to center */}
            <div style={{
              position: 'absolute',
              top: '24px',
              [item.align === 'left' ? 'right' : 'left']: '50%',
              width: 'calc(50% - 40px)',
              height: '1px',
              borderTop: '1px dashed rgba(255,255,255,0.2)',
              zIndex: 0
            }} />

            {/* Node circle on the center line */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 0 10px rgba(255,255,255,0.5)',
              zIndex: 2
            }} />

            {/* Content card */}
            <div style={{ 
              width: 'calc(50% - 40px)', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.5rem',
              textAlign: item.align === 'left' ? 'right' : 'left'
            }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#a3a3a3', fontStyle: 'italic' }}>
                {item.id} &mdash; {item.date}
              </span>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '2rem', margin: 0, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {item.title}
              </h3>
              <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500, color: '#e0e0e0', letterSpacing: '0.5px' }}>
                {item.subtitle}
              </h4>
              <p style={{ margin: '1rem 0 0 0', color: '#888', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
