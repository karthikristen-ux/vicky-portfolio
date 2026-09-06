import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

/* ───── project data ───── */
const projects = [
  {
    id: 'filament-loader',
    title: 'MULTI-SPOOL FILAMENT LOADER (INFINITY FLOW S1 REDESIGN)',
    shortTitle: 'FILAMENT LOADER',
    year: '2025',
    description:
      'A completely new product concept designed from scratch in Creo that automatically feeds filament using an innovative custom scissor mechanism and redesigned roller assemblies.',
    tags: ['CREO', 'NPD', '3D-PRINT', 'MECHANISM-DESIGN'],
    github: '#',
    image: '/images/filament_loader.png',
    wideImage: '/images/filament_loader_wide.png',
    problemStatement:
      'Commercial multi-spool products like the Infinity Flow S1 (priced at approx. 18,000 INR) require bulky, interchangeable modular side attachments for different spool sizes and rely on expensive proprietary motors.',
    solution:
      'Developed a completely new product concept from scratch in Creo that automatically feeds filament, featuring an innovative custom scissor mechanism and redesigned roller assemblies. This unique architecture enables a single compact chassis to seamlessly accommodate 1 kg, 3 kg, and 5 kg spools while achieving mass cost-cutting to an estimated 4,500 INR (a 75% reduction in the Bill of Materials) through alternative motor integration and robust heat-set brass insert assemblies.',
    features: [
      'Custom scissor mechanism for automatic filament feeding',
      'Single compact chassis for 1 kg, 3 kg, and 5 kg spools',
      '75% BOM cost reduction (18,000 INR → 4,500 INR)',
      'Heat-set brass insert assemblies for durability',
      'Alternative motor integration for cost efficiency',
    ],
  },
  {
    id: 'filament-dryer',
    title: 'MODULAR STACKABLE MULTI-SPOOL FILAMENT DRYER & STORAGE CHAMBER',
    shortTitle: 'FILAMENT DRYER',
    year: '2025',
    description:
      'A stackable dryer box designed in Creo, split into 8 3D-printable segments connected via robust dovetail and butt joints to bypass standard printer build-volume limits.',
    tags: ['CREO', 'MODULAR-DESIGN', '3D-PRINT', 'ENCLOSURE'],
    github: '#',
    image: '/images/filament_dryer.png',
    wideImage: '/images/filament_dryer_wide.png',
    problemStatement:
      'Commercial filament dry boxes are expensive and lack modular expansion, while leaving spools exposed to ambient moisture ruins print quality — yet standard dry boxes cannot handle large multi-spool setups without bulky, costly hardware.',
    solution:
      'Designed the structural enclosure and modular architecture for a stackable dryer box in Creo, splitting the design into 8 3D-printable segments connected via robust dovetail and butt joints to bypass standard printer build-volume limits. Conceived and integrated the mechanical layout for a base-level air filtration system to neutralize plastic odors and a side-mounted filament cutter for streamlined multi-spool management.',
    features: [
      '8 modular 3D-printable segments with dovetail joints',
      'Stackable design bypassing printer build-volume limits',
      'Base-level air filtration system for odor neutralization',
      'Side-mounted filament cutter for multi-spool management',
      'Robust dovetail and butt joint connections',
    ],
  },
  {
    id: 'crawling-robot',
    title: 'PERSEVERANCE CRAWLING ROBOT',
    shortTitle: 'CRAWLING ROBOT',
    year: '2022–2023',
    description:
      'A research-grade crawling robot with published papers at ICAARS (PSG College of Technology) and ICDTM (SASTRA University), communicated to AIP Journal.',
    tags: ['ROBOTICS', 'RESEARCH', 'PUBLICATION', 'MECHATRONICS'],
    github: '#',
    image: '/images/crawling_robot.png',
    wideImage: '/images/crawling_robot_wide.png',
    problemStatement:
      'Crawling robots require precise mechanical design and locomotion control to traverse uneven terrain effectively, with limited research on affordable, fabrication-friendly designs for educational and field applications.',
    solution:
      'Designed and fabricated a Perseverance Crawling Robot, conducting comprehensive research resulting in a review paper presented at ICAARS conference at PSG College of Technology (Dec 2022) and communicated to AIP Journal, plus a second presentation at ICDTM Conference at SASTRA University (Apr 2023).',
    features: [
      'Published at ICAARS, PSG College of Technology (Dec 2022)',
      'Communicated to AIP Journal for peer review',
      'Presented at ICDTM Conference, SASTRA University (Apr 2023)',
      'Custom mechanical design and fabrication',
      'Multi-terrain crawling locomotion system',
    ],
  },
];

/* ───── component ───── */
export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailProject, setDetailProject] = useState<typeof projects[0] | null>(null);
  const total = projects.length;

  // Responsive dimensions
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
        if (e.key === 'Escape') setDetailProject(null);
        return;
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + total) % total);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % total);
      } else if (e.key === 'Enter') {
        setDetailProject(projects[activeIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, detailProject, total]);


  const goLeft = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goRight = () => setActiveIndex((prev) => (prev + 1) % total);

  // Get carousel item transform based on offset from active
  const getItemStyle = (index: number) => {
    let offset = index - activeIndex;
    // Wrap around
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
      {/* Page header */}
      <div className="carousel-header">
        <h1>PROJECT ARCHIVE</h1>
        <p>SELECT A BLUEPRINT TO DECRYPT CLASSIFIED PROJECT DATA</p>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        {/* Left arrow */}
        <button
          className="carousel-nav-btn carousel-nav-prev"
          onClick={goLeft}
          aria-label="Previous project"
        >
          ‹
        </button>



        {/* Track */}
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
                animate={{
                  transform: style.transform,
                  opacity: style.opacity,
                  filter: style.filter,
                  zIndex: style.zIndex,
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  pointerEvents: style.pointerEvents,
                  position: 'absolute',
                  left: '50%',
                  marginLeft: `${-dimensions.itemWidth / 2}px`,
                  width: `${dimensions.itemWidth}px`,
                }}
                onClick={isActive ? () => setDetailProject(project) : () => setActiveIndex(index)}
              >
                <div className="carousel-item-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="carousel-item-img"
                    draggable={false}
                  />
                  <div className="carousel-item-title">{project.shortTitle}</div>
                  <div className="carousel-item-year">[{project.year}]</div>
                  {isActive && (
                    <motion.div
                      className="carousel-item-prompt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
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

        {/* Right arrow */}
        <button
          className="carousel-nav-btn carousel-nav-next"
          onClick={goRight}
          aria-label="Next project"
        >
          ›
        </button>
      </div>



      {/* Dot indicators */}
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === activeIndex ? 'carousel-dot--active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* ---- DETAIL OVERLAY ---- */}
      {createPortal(
        <AnimatePresence>
          {detailProject && (
            <motion.div
              className="project-detail-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setDetailProject(null);
            }}
          >
            <motion.div
              className="project-detail-panel"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', stiffness: 250, damping: 22 }}
            >
              <button
                className="detail-close-btn"
                onClick={() => setDetailProject(null)}
                aria-label="Close detail panel"
              >
                ✕
              </button>

              {/* Hero image */}
              <img
                src={detailProject.wideImage}
                alt={detailProject.title}
                className="detail-hero-img"
              />

              {/* Title area */}
              <span className="detail-year">[{detailProject.year}]</span>
              <h2 className="detail-title">{detailProject.title}</h2>
              <div className="detail-status-bar">
                <span className="detail-status-item">
                  <span className="detail-status-dot" /> STATUS: DECLASSIFIED
                </span>
                <span className="detail-status-item">
                  FILE 0{projects.indexOf(detailProject) + 1}/0{projects.length}
                </span>
              </div>

              <div className="detail-divider" />

              {/* Overview */}
              <p className="detail-desc">{detailProject.description}</p>

              {/* Problem + Solution */}
              <div className="detail-two-col">
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

              {/* Features */}
              <h3 className="detail-section-heading">// KEY ARCHITECTURE</h3>
              <ul className="detail-features">
                {detailProject.features.map((f, i) => (
                  <li key={i}>
                    <span className="detail-feat-arrow">▹</span> {f}
                  </li>
                ))}
              </ul>

              {/* Tags + Link */}
              <div className="detail-footer-row">
                <div className="detail-tags">
                  {detailProject.tags.map((t) => (
                    <span key={t} className="detail-tag">{t}</span>
                  ))}
                </div>

                {detailProject.github && detailProject.github !== '#' && (
                  <a
                    href={detailProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="detail-link"
                  >
                    [ VIEW PROJECT ] ›
                  </a>
                )}
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
