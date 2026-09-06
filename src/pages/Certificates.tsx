import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  { name: 'Review Paper: "Design and Fabrication of Perseverance Crawling Robot – A Review" at ICAARS conference, PSG College of Technology; communicated to AIP Journal', date: 'Dec 2022' },
  { name: 'Research Presentation: "Perseverance Crawling Robot" at ICDTM Conference, SASTRA University', date: 'Apr 2023' },
  { name: 'Rajya Puraskar – Bharat Scouts & Guides (signed by Governor)', date: 'N/A' },
  { name: 'Certificate of Merit for securing 10 CGPA in CBSE Secondary School Examination', date: '2017' },
];

export const Certificates: React.FC = () => {
  return (
    <div className="tva-container">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 4rem)', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>CERTIFICATIONS & AWARDS</h1>
        <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', marginBottom: '3rem', color: '#ccc' }}>
          Official credentials and recognitions on file.
        </p>

        <div className="cert-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              className="tva-card"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
            >
              <Award size={32} color="var(--tva-orange)" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", textTransform: 'capitalize', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', marginBottom: '0.5rem', lineHeight: 1.4 }}>{cert.name}</h3>
                <span style={{ color: 'var(--tva-orange)', opacity: 0.7, fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>[{cert.date}]</span>
                <div style={{ marginTop: '1rem', width: '100%', height: '2px', backgroundColor: 'var(--tva-orange)', opacity: 0.3 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

