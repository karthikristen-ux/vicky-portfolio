import re

with open('src/pages/Home.tsx', 'r', encoding='utf-8') as f:
    code = f.read()


old_skills_html = """        <motion.div variants={containerVariants} className="home-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
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

        </motion.div>"""

new_skills_html = """        <motion.div variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem', width: '100%', maxWidth: '900px', margin: '0 auto 4rem auto' }}>
          
          <motion.div variants={itemVariants} style={{ background: 'rgba(20,20,20,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '0.5rem' }}>
              <Cpu size={28} color="#fff" strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: 0, fontFamily: "'Fredoka', sans-serif" }}>
              Core Architecture
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#a3a3a3', fontSize: '0.95rem' }}>
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
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: 0, fontFamily: "'Fredoka', sans-serif" }}>
              Deployment Tools
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#a3a3a3', fontSize: '0.95rem' }}>
              <li>PTC Creo / SolidWorks</li>
              <li>Bambu Studio (Slicer Software)</li>
              <li>Bambu Lab A1, P1S Printers</li>
              <li>2D/3D Drafting &amp; Tolerancing</li>
            </ul>
          </motion.div>

        </motion.div>"""

if old_skills_html in code:
    code = code.replace(old_skills_html, new_skills_html)
    with open('src/pages/Home.tsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print('Home updated!')
else:
    print('Pattern not found in Home.tsx')

