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

const MarqueeDivider = () => (
  <div className="marquee-container">
    <div className="marquee-track">
      <span>//////// MECHANICAL DESIGN //////// 3D PRINTING //////// PTC CREO //////// RAPID PROTOTYPING //////// REVERSE ENGINEERING //////// MECHANICAL DESIGN //////// 3D PRINTING //////// PTC CREO //////// RAPID PROTOTYPING //////// REVERSE ENGINEERING </span>
      <span>//////// MECHANICAL DESIGN //////// 3D PRINTING //////// PTC CREO //////// RAPID PROTOTYPING //////// REVERSE ENGINEERING //////// MECHANICAL DESIGN //////// 3D PRINTING //////// PTC CREO //////// RAPID PROTOTYPING //////// REVERSE ENGINEERING </span>
    </div>
  </div>
);

export const Projects: React.FC = () => {
  const [activeModel, setActiveModel] = useState<string | null>(null);
  const [activeParts, setActiveParts] = useState<{ [key: string]: number }>({});

  const setPart = (projId: string, partIdx: number) => {
    setActiveParts(prev => ({ ...prev, [projId]: partIdx }));
  };

  return (
    <div className="projects-timeline-page">
      <div className="spine-line"></div>

      {projects.map((proj, idx) => {
        const isEven = idx % 2 === 1;
        const numLabel = `0${idx + 1}`;

        return (
          <React.Fragment key={proj.id}>
            {idx > 0 && <MarqueeDivider />}
            
            <section className={`project-section ${isEven ? 'row-reverse' : ''}`}>
              
              <div className="project-content-wrapper">
                <motion.div 
                  className="project-text"
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="project-node-label">{numLabel}</span>
                  <h2>{proj.title}</h2>
                  <p>{proj.description}</p>
                  
                  <div className="project-features">
                    {proj.features.map((f, i) => (
                      <div className="feature-item" key={i}>
                        <span className="feature-slash">/</span> {f}
                      </div>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <button className="tech-btn" onClick={() => setActiveModel(activeModel === proj.id ? null : proj.id)}>
                      {activeModel === proj.id ? 'CLOSE 3D VIEWER' : 'VIEW 3D MODEL'}
                    </button>
                  </div>
                </motion.div>

                {/* Center spine branch for desktop */}
                <div className="spine-branch-container">
                  <div className="spine-branch-line"></div>
                  <div className="spine-node-diamond">
                    <span>{numLabel}</span>
                  </div>
                </div>

                <motion.div 
                  className="project-visual"
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <AnimatePresence mode="wait">
                    {activeModel === proj.id ? (
                      <motion.div 
                        key="3d"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="visual-container"
                      >
                        <STLViewer url={proj.parts[activeParts[proj.id] || 0].stlUrl} />
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '12px', background: 'rgba(0,0,0,0.8)', borderTop: '1px solid rgba(255,140,0,0.2)' }}>
                          {proj.parts.map((part, pIdx) => (
                            <button
                              key={pIdx}
                              onClick={() => setPart(proj.id, pIdx)}
                              style={{
                                background: (activeParts[proj.id] || 0) === pIdx ? 'rgba(255,140,0,0.2)' : 'transparent',
                                border: (activeParts[proj.id] || 0) === pIdx ? '1px solid var(--tva-orange)' : '1px solid rgba(255,255,255,0.2)',
                                color: (activeParts[proj.id] || 0) === pIdx ? 'var(--tva-orange)' : '#a3a3a3',
                                padding: '4px 10px',
                                fontSize: '0.65rem',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-mono)'
                              }}
                            >
                              {part.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="img"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="visual-container image-container"
                      >
                        <img src={proj.wideImage} alt={proj.title} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </div>
  );
};
