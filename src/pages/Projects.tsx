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
      { name: 'Base', stlUrl: '/images/projects/filament loader/parts/base-part-v2.stl', description: 'Foundation structure for the loader.\nDesigned for maximum stability during operation.' },
      { name: 'Mount', stlUrl: '/images/projects/filament loader/parts/circular-mount-holder.stl', description: 'Secure attachment point for spools.\nAdaptable to different spool diameters.' },
      { name: 'Enclosure', stlUrl: '/images/projects/filament loader/parts/enclosure-v3.stl', description: 'Protects the internal mechanics from dust.\nSnap-fit design for easy assembly.' },
      { name: 'Left Side', stlUrl: '/images/projects/filament loader/parts/leftsidesub.stl', description: 'Left structural brace supporting the spool.\nIntegrates directly with the base mount.' },
      { name: 'Motor Enclosure', stlUrl: '/images/projects/filament loader/parts/motor-enclosure.stl', description: 'Houses the non-proprietary driving motor.\nDesigned with thermal vents to prevent overheating.' },
      { name: 'Mount V1', stlUrl: '/images/projects/filament loader/parts/mount_v1.stl', description: 'Initial prototype for the spool mount.\nRetained for legacy compatibility.' },
      { name: 'Right Side', stlUrl: '/images/projects/filament loader/parts/rightsidesub-prt-v4.stl', description: 'Right structural brace supporting the spool.\nSymmetrical pairing with the left side.' },
      { name: 'Roller', stlUrl: '/images/projects/filament loader/parts/rlr.stl', description: 'Ensures smooth filament unspooling.\nReduces friction and prevents tangling.' },
      { name: 'Scissors', stlUrl: '/images/projects/filament loader/parts/scissors-mechanism-for-asm.stl', description: 'Innovative scissor mechanism to grab and feed filament.\nAutomatically adjusts to tension.' }
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
      { name: 'Base Heater', stlUrl: '/images/projects/dryer/parts/base-heater.stl', description: 'Houses the heating element and fan.\nEnsures consistent heat distribution.' },
      { name: 'Chamber A', stlUrl: '/images/projects/dryer/parts/chamber-a.stl', description: 'Primary 3D-printable chamber segment.\nUses dovetail joints for expansion.' },
      { name: 'Chamber A1', stlUrl: '/images/projects/dryer/parts/chamber-a1.stl', description: 'Secondary chamber expansion segment.\nIncreases volume for multi-spool setups.' },
      { name: 'Chamber B', stlUrl: '/images/projects/dryer/parts/chamber-b.stl', description: 'Top structural chamber component.\nSeals the box to maintain humidity levels.' },
      { name: 'Dryer Body', stlUrl: '/images/projects/dryer/parts/dryer.stl', description: 'The core assembled body of the dryer.\nProvides the main structural integrity.' },
      { name: 'Hinge', stlUrl: '/images/projects/dryer/parts/hinge.stl', description: 'Robust mechanical hinge for the lid.\nReplaces weak standard printed hinges.' }
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
      { name: 'Headset Joint', stlUrl: '/images/projects/headset/part/bth.stl', description: 'Replacement swivel joint for the headset.\nEngineered to eliminate original weak points.' }
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
      { name: 'Solar Wiper', stlUrl: '/images/projects/solar/part/solar-wiper.stl', description: 'Reinforced wiper attachment body.\nBuilt to withstand high manual push force.' }
    ]
  }
];

export const Projects: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'parts'>('parts');

  const proj = projects[activeProjectIdx];

  const handleProjectSelect = (idx: number) => {
    if (idx === activeProjectIdx) {
      setIsOpen(true);
    } else {
      setActiveProjectIdx(idx);
    }
  };

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProjectIdx((prev) => (prev + 1) % projects.length);
  };

  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProjectIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardStyle = (idx: number) => {
    const diff = idx - activeProjectIdx;
    let offset = diff;
    if (offset > 1) offset = offset - projects.length;
    if (offset < -1) offset = offset + projects.length;

    let translateX = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let rotateY = 0;

    if (offset === 0) {
      translateX = 0;
      scale = 1;
      opacity = 1;
      zIndex = 10;
      rotateY = 0;
    } else if (offset === 1) {
      translateX = 55;
      scale = 0.75;
      opacity = 0.5;
      zIndex = 5;
      rotateY = -15;
    } else if (offset === -1) {
      translateX = -55;
      scale = 0.75;
      opacity = 0.5;
      zIndex = 5;
      rotateY = 15;
    } else {
      translateX = offset > 0 ? 100 : -100;
      scale = 0.5;
      opacity = 0;
      zIndex = 1;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      opacity,
      zIndex,
      transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
      position: 'absolute' as const,
      left: 0,
      right: 0,
      margin: '0 auto',
    };
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#fff', padding: '6rem 2rem 2rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#fff', margin: '0 0 1rem 0', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'normal' }}>
                Project Archive
              </h1>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#fff', letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.8 }}>
                Select a blueprint to decrypt classified project data
              </p>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Left Arrow */}
                <button 
                  onClick={prevProject}
                  style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 20, background: 'none', border: '1px solid rgba(229, 169, 60, 0.5)', color: '#fff', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1.2rem' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(229, 169, 60, 0.1)' }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'none' }}
                >
                  &#10094;
                </button>

                <div style={{ position: 'relative', width: '400px', height: '400px' }}>
                  {projects.map((p, idx) => {
                    const style = getCardStyle(idx);
                    return (
                      <div
                        key={p.id}
                        onClick={() => handleProjectSelect(idx)}
                        style={{
                          ...style,
                          width: '100%',
                          height: '100%',
                          cursor: 'pointer',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          background: 'rgba(20,20,20,0.8)',
                          border: '1px solid rgba(229, 169, 60, 0.3)',
                          boxShadow: idx === activeProjectIdx ? '0 0 30px rgba(229, 169, 60, 0.15)' : 'none',
                        }}
                      >
                        <div style={{ 
                          position: 'absolute', 
                          top: 0, left: 0, right: 0, bottom: 0,
                          backgroundImage: `url('${p.image}')`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          zIndex: -2,
                          filter: idx === activeProjectIdx ? 'none' : 'grayscale(100%) opacity(0.6)'
                        }} />
                        {/* Orange Overlay for inactive to look like blueprint */}
                        {idx !== activeProjectIdx && (
                          <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(229, 169, 60, 0.1)',
                            mixBlendMode: 'color',
                            zIndex: -1
                          }} />
                        )}
                        
                        {/* Gradient for text */}
                        <div style={{ 
                          position: 'absolute', 
                          top: 0, left: 0, right: 0, bottom: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
                          zIndex: -1 
                        }} />
                      </div>
                    );
                  })}
                </div>

                {/* Right Arrow */}
                <button 
                  onClick={nextProject}
                  style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 20, background: 'none', border: '1px solid rgba(229, 169, 60, 0.5)', color: '#fff', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1.2rem' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(229, 169, 60, 0.1)' }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'none' }}
                >
                  &#10095;
                </button>
              </div>
              
              {/* Title below carousel */}
              <div style={{ marginTop: '2rem', textAlign: 'center', zIndex: 10 }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', margin: 0, color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'normal' }}>
                  {projects[activeProjectIdx].title}
                </h2>
                <div style={{ width: '40px', height: '1px', background: 'rgba(255, 255, 255, 0.5)', margin: '0.5rem auto' }} />
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', color: '#fff', display: 'block', opacity: 0.8, letterSpacing: '1px' }}>
                  [{projects[activeProjectIdx].year}]
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', borderBottom: '1px solid rgba(229, 169, 60, 0.2)', paddingBottom: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#fff', opacity: 0.8, marginBottom: '0.5rem', display: 'block', letterSpacing: '1px' }}>
                  FILE NO. {activeProjectIdx + 1} // [{proj.year}]
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: 0, color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'normal' }}>
                  {proj.title}
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: '1px solid #e5a93c', color: '#fff', padding: '0.5rem 1.5rem', fontFamily: "'Playfair Display', serif", letterSpacing: '1px', textTransform: 'uppercase', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s', marginTop: '0.5rem' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(229, 169, 60, 0.1)' }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                Close Project
              </button>
            </div>

            {/* Project Details Tabs */}
            <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid rgba(229, 169, 60, 0.2)', marginBottom: '2rem', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => setActiveTab('description')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'description' ? '#e5a93c' : 'rgba(229, 169, 60, 0.5)',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s',
                  letterSpacing: '1px'
                }}
              >
                DESCRIPTION
              </button>
              <button
                onClick={() => setActiveTab('parts')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'parts' ? '#e5a93c' : 'rgba(229, 169, 60, 0.5)',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s',
                  letterSpacing: '1px'
                }}
              >
                PARTS
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${proj.id}-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
              >
                {activeTab === 'description' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: 'rgba(229, 169, 60, 0.03)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(229, 169, 60, 0.1)' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem', color: '#fff', fontSize: '1.5rem', fontWeight: 'normal', letterSpacing: '1px' }}>OVERVIEW</h3>
                      <p style={{ color: '#fff', opacity: 0.8, lineHeight: '1.6', fontSize: '1.1rem', fontFamily: "'Playfair Display', serif", textTransform: 'capitalize' }}>{proj.description}</p>
                      
                      <h3 style={{ fontFamily: "'Playfair Display', serif", marginTop: '2rem', marginBottom: '1rem', color: '#fff', fontSize: '1.5rem', fontWeight: 'normal', letterSpacing: '1px' }}>KEY FEATURES</h3>
                      <ul style={{ color: '#fff', opacity: 0.8, lineHeight: '1.6', paddingLeft: '1.2rem', fontFamily: "'Playfair Display', serif", textTransform: 'capitalize' }}>
                        {proj.features?.map((f, i) => (
                          <li key={i} style={{ marginBottom: '0.5rem' }}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div style={{ background: 'rgba(229, 169, 60, 0.03)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(229, 169, 60, 0.1)' }}>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem', color: '#fff', fontSize: '1.5rem', fontWeight: 'normal', letterSpacing: '1px' }}>PROBLEM</h3>
                        <p style={{ color: '#fff', opacity: 0.8, lineHeight: '1.6', fontSize: '1.1rem', fontFamily: "'Playfair Display', serif", textTransform: 'capitalize' }}>{proj.problemStatement}</p>
                      </div>
                      <div style={{ background: 'rgba(229, 169, 60, 0.03)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(229, 169, 60, 0.1)' }}>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem', color: '#fff', fontSize: '1.5rem', fontWeight: 'normal', letterSpacing: '1px' }}>SOLUTION</h3>
                        <p style={{ color: '#fff', opacity: 0.8, lineHeight: '1.6', fontSize: '1.1rem', fontFamily: "'Playfair Display', serif", textTransform: 'capitalize' }}>{proj.solution}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ position: 'relative', margin: '2rem 0 4rem 0', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                
                    {/* The central spine line */}
                    <div style={{ 
                      position: 'absolute', 
                      left: '50%', 
                      transform: 'translateX(-50%)', 
                      top: 0, 
                      bottom: 0, 
                      width: '1px', 
                      borderLeft: '1px dashed rgba(229, 169, 60, 0.3)' 
                    }} />
                    
                    {proj.parts.map((part, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse', 
                        alignItems: 'center', 
                        gap: '4rem',
                        position: 'relative'
                      }}>
                        
                        {/* 3D Model side */}
                        <div style={{ flex: 1, display: 'flex', justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <div style={{ 
                            width: '100%', 
                            maxWidth: '450px', 
                            height: '350px', 
                            background: 'rgba(20,20,20,0.6)', 
                            borderRadius: '12px', 
                            overflow: 'hidden',
                            border: '1px solid rgba(229, 169, 60, 0.2)'
                          }}>
                            <STLViewer url={part.stlUrl} />
                          </div>
                        </div>

                        {/* Center Node on spine */}
                        <div style={{ 
                          width: '12px', 
                          height: '12px', 
                          borderRadius: '50%', 
                          background: '#e5a93c', 
                          zIndex: 10, 
                          position: 'absolute', 
                          left: '50%', 
                          transform: 'translate(-50%, 0)',
                          boxShadow: '0 0 10px rgba(229, 169, 60, 0.5)'
                        }} />

                        {/* Text side */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: idx % 2 === 0 ? 'flex-start' : 'flex-end', textAlign: idx % 2 === 0 ? 'left' : 'right' }}>
                          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#fff', opacity: 0.8, marginBottom: '0.5rem', letterSpacing: '1px' }}>
                            PART NO. 0{idx + 1}
                          </span>
                          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', margin: 0, color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'normal' }}>
                            {part.name}
                          </h3>
                          {part.description && (
                            <p style={{ fontFamily: "'Playfair Display', serif", textTransform: 'capitalize', fontSize: '1rem', color: '#fff', opacity: 0.7, marginTop: '1rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                              {part.description}
                            </p>
                          )}
                          
                          {/* Subtle decorative line connecting to node */}
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            [idx % 2 === 0 ? 'left' : 'right']: '50%',
                            width: 'calc(2rem)',
                            borderTop: '1px dashed rgba(229, 169, 60, 0.3)',
                            zIndex: 0
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
