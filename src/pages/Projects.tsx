import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { STLViewer } from '../components/STLViewer';

/* ───── project data ───── */
const projects = [
  {
    id: 'filament-loader',
    title: 'MULTI-SPOOL FILAMENT LOADER (INFINITY FLOW S1 REDESIGN)',
    shortTitle: 'FILAMENT LOADER',
    year: '2025',
    description: 'A completely new product concept designed from scratch in Creo that automatically feeds filament using an innovative custom scissor mechanism and redesigned roller assemblies.',
    tags: ['CREO', 'NPD', '3D-PRINT', 'MECHANISM-DESIGN'],
    github: '#',
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
      { name: "Enclosure v3", description: "Main enclosure shell housing the mechanics.", stl: "/images/projects/filament loader/parts/enclosure-v3.stl" },
      { name: "Left Side Sub-assembly", description: "Structural left side component.", stl: "/images/projects/filament loader/parts/leftsidesub.stl" },
      { name: "Right Side Sub-assembly", description: "Structural right side component.", stl: "/images/projects/filament loader/parts/rightsidesub-prt-v4.stl" },
      { name: "Roller", description: "Feeder roller mechanism.", stl: "/images/projects/filament loader/parts/rlr.stl" },
      { name: "Scissors Mechanism", description: "Auto-feed mechanism for multi-spool adaptation.", stl: "/images/projects/filament loader/parts/scissors-mechanism-for-asm.stl" }
    ]
  },
  {
    id: 'filament-dryer',
    title: 'MODULAR STACKABLE MULTI-SPOOL FILAMENT DRYER & STORAGE CHAMBER',
    shortTitle: 'FILAMENT DRYER',
    year: '2025',
    description: 'A stackable dryer box designed in Creo, split into 8 3D-printable segments connected via robust dovetail and butt joints to bypass standard printer build-volume limits.',
    tags: ['CREO', 'MODULAR-DESIGN', '3D-PRINT', 'ENCLOSURE'],
    github: '#',
    image: '/images/projects/dryer/dryer cover.jpeg',
    wideImage: '/images/projects/dryer/dryer cover.jpeg',
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
      { name: "Base Heater", description: "Bottom heater base assembly providing uniform heat distribution.", stl: "/images/projects/dryer/parts/base-heater.stl" },
      { name: "Chamber A", description: "First segment of the modular chamber.", stl: "/images/projects/dryer/parts/chamber-a.stl" },
      { name: "Chamber A1", description: "Extension segment for Chamber A to accommodate larger spools.", stl: "/images/projects/dryer/parts/chamber-a1.stl" },
      { name: "Chamber B", description: "Second segment of the modular chamber.", stl: "/images/projects/dryer/parts/chamber-b.stl" },
      { name: "Main Dryer Assembly", description: "The assembled main structure.", stl: "/images/projects/dryer/parts/dryer.stl" },
      { name: "Hinge", description: "Durable door hinge component for frequent access.", stl: "/images/projects/dryer/parts/hinge.stl" }
    ]
  },
  {
    id: 'bluetooth-headset',
    title: 'REVERSE-ENGINEERED BLUETOOTH HEADSET JOINT',
    shortTitle: 'HEADSET JOINT',
    year: '2026',
    description: 'I reverse-engineered a broken Bluetooth headset swivel joint to provide a low-cost, on-demand replacement. The original part kept failing, so I measured it with calipers and recreated it in CAD with a slight cosmetic update.',
    tags: ['REVERSE-ENGINEERING', 'CAD', '3D-PRINTING', 'REPAIR'],
    github: '#',
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
      { name: "Headset Swivel Joint (Boat)", description: "The reverse-engineered replacement joint. Robust infill pattern makes it stronger than the original.", stl: "/images/projects/headset/part/bth.stl" }
    ]
  }
];

export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailProject, setDetailProject] = useState<typeof projects[0] | null>(null);
  const [activePartIndex, setActivePartIndex] = useState(0);
  const total = projects.length;

  const [dimensions, setDimensions] = useState({ itemWidth: 340, gap: 320 });

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w <= 480) {
        setDimensions({ itemWidth: 280, gap: 230 });
      } else if (w <= 768) {
        setDimensions({ itemWidth: 300, gap: 250 });
      } else if (w <= 900) {
        setDimensions({ itemWidth: 320, gap: 280 });
      } else {
        setDimensions({ itemWidth: 360, gap: 320 });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (detailProject) {
        if (e.key === 'Escape') {
          setDetailProject(null);
          setActivePartIndex(0);
        }
        return;
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + total) % total);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % total);
      } else if (e.key === 'Enter') {
        setDetailProject(projects[activeIndex]);
        setActivePartIndex(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, detailProject, total]);

  const goLeft = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goRight = () => setActiveIndex((prev) => (prev + 1) % total);

  const getItemStyle = (index: number) => {
    let offset = index - activeIndex;
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    const absOffset = Math.abs(offset);

    if (absOffset > 2) {
      return {
        transform: `translateX(${offset * (dimensions.gap * 0.6)}px) scale(0.5) rotateY(${offset > 0 ? -35 : 35}deg)`,
        opacity: 0,
        filter: 'blur(12px)',
        zIndex: 0,
        pointerEvents: 'none' as const,
      };
    }

    return {
      transform: `translateX(${offset * dimensions.gap}px) scale(${1 - absOffset * 0.18}) rotateY(${offset * -15}deg)`,
      opacity: absOffset === 0 ? 1 : 0.4 - absOffset * 0.1,
      filter: absOffset === 0 ? 'blur(0px)' : `blur(${absOffset * 4}px)`,
      zIndex: 10 - absOffset,
      pointerEvents: absOffset === 0 ? 'auto' as const : 'none' as const,
    };
  };

  return (
    <div className="carousel-root">
      <div className="carousel-header">
        <h1>PROJECT ARCHIVE</h1>
        <p>SELECT A BLUEPRINT TO DECRYPT CLASSIFIED PROJECT DATA</p>
      </div>

      <div className="carousel-container">
        <button className="carousel-nav-btn carousel-nav-prev" onClick={goLeft} aria-label="Previous project">‹</button>
        <motion.div
          className="carousel-track"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, { offset }) => {
            if (offset.x < -40) goRight();
            else if (offset.x > 40) goLeft();
          }}
          style={{ touchAction: 'pan-y' }}
        >
          {projects.map((project, index) => {
            const style = getItemStyle(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={project.id}
                className={`carousel-item ${isActive ? 'carousel-item--active' : ''}`}
                animate={{ transform: style.transform, opacity: style.opacity, filter: style.filter, zIndex: style.zIndex }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  pointerEvents: style.pointerEvents, position: 'absolute', left: '50%',
                  marginLeft: `${-dimensions.itemWidth / 2}px`, width: `${dimensions.itemWidth}px`,
                }}
                onClick={isActive ? () => { setDetailProject(project); setActivePartIndex(0); } : () => setActiveIndex(index)}
              >
                <div className="carousel-item-inner">
                  <div style={{ backgroundImage: `url('${project.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '220px', borderRadius: '8px' }} />
                  <div className="carousel-item-title" style={{ marginTop: '1rem' }}>{project.shortTitle}</div>
                  <div className="carousel-item-year">[{project.year}]</div>
                  {isActive && (
                    <motion.div
                      className="carousel-item-prompt"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginTop: '1rem' }}
                    >
                      <span>▸ CLICK TO DECLASSIFY ◂</span>
                      <span>← SWIPE TO VIEW NEXT →</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <button className="carousel-nav-btn carousel-nav-next" onClick={goRight} aria-label="Next project">›</button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button key={index} className={`carousel-dot ${index === activeIndex ? 'carousel-dot--active' : ''}`} onClick={() => setActiveIndex(index)} />
        ))}
      </div>

      {createPortal(
        <AnimatePresence>
          {detailProject && (
            <motion.div
              className="project-detail-overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              onClick={(e) => { if (e.target === e.currentTarget) { setDetailProject(null); setActivePartIndex(0); } }}
            >
              <motion.div
                className="project-detail-panel"
                style={{ width: '90vw', maxWidth: '1200px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
                initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ type: 'spring', stiffness: 250, damping: 22 }}
              >
                <button className="detail-close-btn" onClick={() => { setDetailProject(null); setActivePartIndex(0); }}>✕</button>

                <div className="project-detail-header" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <img src={detailProject.wideImage} alt={detailProject.title} style={{ width: '30%', borderRadius: '12px', border: '1px solid var(--tva-orange)' }} />
                  <div>
                    <span className="detail-year">[{detailProject.year}]</span>
                    <h2 className="detail-title" style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{detailProject.title}</h2>
                    <p className="detail-desc">{detailProject.description}</p>
                  </div>
                </div>

                <div className="detail-divider" />

                <div className="detail-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h3 className="detail-section-heading">// PROBLEM</h3>
                    <p className="detail-desc">{detailProject.problemStatement}</p>
                  </div>
                  <div>
                    <h3 className="detail-section-heading">// SOLUTION</h3>
                    <p className="detail-desc">{detailProject.solution}</p>
                  </div>
                </div>

                <div className="detail-divider" />
                
                <h3 className="detail-section-heading">// PROJECT PARTS & 3D MODELS</h3>
                <div className="project-parts-layout" style={{ display: 'flex', gap: '2rem', minHeight: '500px' }}>
                  <div className="parts-list" style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {detailProject.parts.map((part, index) => (
                      <div 
                        key={index} 
                        className={`part-item ${index === activePartIndex ? 'active' : ''}`}
                        onClick={() => setActivePartIndex(index)}
                        style={{
                          padding: '1rem',
                          borderRadius: '8px',
                          border: index === activePartIndex ? '1px solid var(--tva-orange)' : '1px solid rgba(255,140,0,0.2)',
                          background: index === activePartIndex ? 'rgba(255,140,0,0.1)' : 'transparent',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                      >
                        <h4 style={{ margin: '0 0 0.5rem 0', color: index === activePartIndex ? '#fff' : 'var(--tva-orange)' }}>{part.name}</h4>
                        <p style={{ margin: 0, color: '#ccc', fontSize: '0.95rem' }}>{part.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="parts-viewer" style={{ flex: '1.5', position: 'sticky', top: '2rem', height: '500px' }}>
                    {detailProject.parts[activePartIndex] && (
                      <STLViewer key={detailProject.parts[activePartIndex].stl} url={detailProject.parts[activePartIndex].stl} />
                    )}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};
