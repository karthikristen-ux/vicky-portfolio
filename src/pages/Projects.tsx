import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STLViewer } from '../components/STLViewer';

/* ───── project data ───── */
const projects = [
  {
    id: 'filament-loader',
    title: 'MULTI-SPOOL FILAMENT LOADER',
    shortTitle: 'FILAMENT LOADER',
    year: '2025',
    description: 'A completely new product concept designed from scratch in Creo that automatically feeds filament using an innovative custom scissor mechanism and redesigned roller assemblies.',
    tags: ['CREO', 'NPD', '3D-PRINT', 'MECHANISM-DESIGN'],
    image: '/images/projects/filament loader/existing model.png',
    wideImage: '/images/projects/filament loader/existing model.png',
    problemStatement: 'Commercial multi-spool products like the Infinity Flow S1 (priced at approx. 18,000 INR) require bulky, interchangeable modular side attachments for different spool sizes and rely on expensive proprietary motors.',
    solution: 'Developed a completely new product concept from scratch in Creo that automatically feeds filament, featuring an innovative custom scissor mechanism and redesigned roller assemblies. This unique architecture enables a single compact chassis to seamlessly accommodate 1 kg, 3 kg, and 5 kg spools while achieving mass cost-cutting to an estimated 4,500 INR (a 75% reduction in the Bill of Materials) through alternative motor integration and robust heat-set brass insert assemblies.',
    features: [
      'Custom scissor mechanism for automatic filament feeding',
      'Single compact chassis for 1 kg, 3 kg, and 5 kg spools',
      '75% BOM cost reduction (18,000 INR → 4,500 INR)',
      'Heat-set brass insert assemblies for durability',
      'Alternative motor integration for cost efficiency',
    ],
    parts: [
      { name: 'Base', stlUrl: '/images/projects/filament loader/parts/base-part-v2.stl' },
      { name: 'Mount', stlUrl: '/images/projects/filament loader/parts/circular-mount-holder.stl' },
      { name: 'Enclosure', stlUrl: '/images/projects/filament loader/parts/enclosure-v3.stl' },
      { name: 'Left Side', stlUrl: '/images/projects/filament loader/parts/leftsidesub.stl' },
      { name: 'Motor', stlUrl: '/images/projects/filament loader/parts/motor-enclosure.stl' },
      { name: 'Mount V1', stlUrl: '/images/projects/filament loader/parts/mount_v1.stl' },
      { name: 'Right Side', stlUrl: '/images/projects/filament loader/parts/rightsidesub-prt-v4.stl' },
      { name: 'Roller', stlUrl: '/images/projects/filament loader/parts/rlr.stl' },
      { name: 'Scissors', stlUrl: '/images/projects/filament loader/parts/scissors-mechanism-for-asm.stl' }
    ]
  },
  {
    id: 'filament-dryer',
    title: 'MODULAR MULTI-SPOOL FILAMENT DRYER',
    shortTitle: 'FILAMENT DRYER',
    year: '2025',
    description: 'A stackable dryer box designed in Creo, split into 8 3D-printable segments connected via robust dovetail and butt joints to bypass standard printer build-volume limits.',
    tags: ['CREO', 'MODULAR-DESIGN', '3D-PRINT', 'ENCLOSURE'],
    image: '/images/projects/dryer/dryer cover.png',
    wideImage: '/images/projects/dryer/dryer cover.png',
    problemStatement: 'Commercial filament dry boxes are expensive and lack modular expansion, while leaving spools exposed to ambient moisture ruins print quality — yet standard dry boxes cannot handle large multi-spool setups without bulky, costly hardware.',
    solution: 'Designed the structural enclosure and modular architecture for a stackable dryer box in Creo, splitting the design into 8 3D-printable segments connected via robust dovetail and butt joints to bypass standard printer build-volume limits. Conceived and integrated the mechanical layout for a base-level air filtration system to neutralize plastic odors and a side-mounted filament cutter for streamlined multi-spool management.',
    features: [
      '8 modular 3D-printable segments with dovetail joints',
      'Stackable design bypassing printer build-volume limits',
      'Base-level air filtration system for odor neutralization',
      'Side-mounted filament cutter for multi-spool management',
      'Robust dovetail and butt joint connections',
    ],
    parts: [
      { name: 'Base Heater', stlUrl: '/images/projects/dryer/parts/base-heater.stl' },
      { name: 'Chamber A', stlUrl: '/images/projects/dryer/parts/chamber-a.stl' },
      { name: 'Chamber A1', stlUrl: '/images/projects/dryer/parts/chamber-a1.stl' },
      { name: 'Chamber B', stlUrl: '/images/projects/dryer/parts/chamber-b.stl' },
      { name: 'Dryer Body', stlUrl: '/images/projects/dryer/parts/dryer.stl' },
      { name: 'Hinge', stlUrl: '/images/projects/dryer/parts/hinge.stl' }
    ]
  },
  {
    id: 'bluetooth-headset',
    title: 'REVERSE-ENGINEERED HEADSET JOINT',
    shortTitle: 'HEADSET JOINT',
    year: '2026',
    description: 'I reverse-engineered a broken Bluetooth headset swivel joint to provide a low-cost, on-demand replacement. The original part kept failing, so I measured it with calipers and recreated it in CAD with a slight cosmetic update.',
    tags: ['REVERSE-ENGINEERING', 'CAD', '3D-PRINTING', 'REPAIR'],
    image: '/images/projects/headset/cover image.png',
    wideImage: '/images/projects/headset/cover image.png',
    problemStatement: 'A popular Bluetooth headset kept breaking at the joint where the earcup turns. The original part failed repeatedly due to weak structural points in its commercial injection-molded design.',
    solution: 'Engineered a functional replacement part with a material cost of under ₹10, preventing the need to discard a fully working commercial headset. Maintained exact internal mating dimensions while introducing slight cosmetic and visual modifications to the outer surface. If it ever breaks again, the user can just print a new one instantly instead of discarding the whole headset.',
    features: [
      'Measured with calipers to recreate exact dimensions.',
      'Material cost of under 10 rupees.',
      'Maintained exact internal mating dimensions.',
      'Slight cosmetic and visual modifications to outer surface.'
    ],
    parts: [
      { name: 'Headset Joint', stlUrl: '/images/projects/headset/part/bth.stl' }
    ]
  },
  {
    id: 'solar-wiper',
    title: 'SOLAR PANEL WIPER',
    shortTitle: 'SOLAR WIPER',
    year: '2025',
    description: 'Reinforced 3D printed solar wiper design that replaces generic weak plastic wipers, built to withstand high manual push forces.',
    tags: ['3D-PRINTING', 'STRUCTURAL-DESIGN', 'CAD'],
    image: '/images/projects/solar/solar cover.png',
    wideImage: '/images/projects/solar/solar cover.png',
    problemStatement: 'Generic plastic solar wipers are structurally weak and easily break under manual push forces.',
    solution: 'I reinforced the high-stress structural walls and upgraded the exterior styling for a modern look. The entire reinforced structure is 3D printed with strong infill settings to ensure long-term durability. It features a rigid handle connection that handles high manual force without snapping.',
    features: [
      'Reinforced high-stress structural walls',
      'Upgraded exterior styling for a modern look',
      '3D printed with strong infill settings for long-term durability',
      'Rigid handle connection that handles high manual force'
    ],
    parts: [
      { name: 'Solar Wiper', stlUrl: '/images/projects/solar/part/solar-wiper.stl' }
    ]
  }
];

export const Projects: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activePartIdx, setActivePartIdx] = useState(0);

  const proj = projects[activeProjectIdx];

  const handleNextProject = (idx: number) => {
    setActiveProjectIdx(idx);
    setActivePartIdx(0); // Reset part on project switch
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#fff', padding: '6rem 2rem 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Project Tabs Header */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', overflowX: 'auto' }}>
        {projects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => handleNextProject(idx)}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeProjectIdx === idx ? '#fff' : '#666',
              fontFamily: "'Fredoka', sans-serif",
              fontSize: '1.1rem',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              transition: 'color 0.3s',
              whiteSpace: 'nowrap'
            }}
          >
            0{idx + 1} // {p.shortTitle}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={proj.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          {/* Hero Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#888', fontStyle: 'italic' }}>
              0{activeProjectIdx + 1}
            </span>
            <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0, lineHeight: 1.1, textTransform: 'uppercase' }}>
              {proj.title}
            </h1>
            <p style={{ color: '#a3a3a3', fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
              {proj.description}
            </p>
          </div>

          {/* Viewer & Parts Layout */}
          <div style={{ display: 'flex', gap: '2rem', height: '500px', width: '100%', background: 'rgba(20,20,20,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '1rem', overflow: 'hidden' }}>
            
            {/* Vertical Parts Index */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              padding: '1rem',
              overflowY: 'auto',
              borderRight: '1px solid rgba(255,255,255,0.08)'
            }}>
              {proj.parts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePartIdx(idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: activePartIdx === idx ? '#fff' : '#444',
                    cursor: 'pointer',
                    padding: '0.2rem',
                    transition: 'color 0.3s',
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* 3D Model Viewer with Part Name Overlay */}
            <div style={{ flex: 1, position: 'relative', height: '100%', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#a3a3a3', fontSize: '1rem' }}>
                  0{activePartIdx + 1}
                </span>
                <h3 style={{ fontFamily: "'Fredoka', sans-serif", color: '#fff', fontSize: '1.8rem', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {proj.parts[activePartIdx].name}
                </h3>
              </div>
              <STLViewer url={proj.parts[activePartIdx].stlUrl} />
            </div>
          </div>

          {/* Additional details */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", marginBottom: '1rem', color: '#fff' }}>PROBLEM</h3>
              <p style={{ color: '#a3a3a3', lineHeight: '1.6' }}>{proj.problemStatement}</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", marginBottom: '1rem', color: '#fff' }}>SOLUTION</h3>
              <p style={{ color: '#a3a3a3', lineHeight: '1.6' }}>{proj.solution}</p>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
};
