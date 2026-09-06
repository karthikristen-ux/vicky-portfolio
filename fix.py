with open('src/pages/Projects.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update data structures
code = code.replace(
    "    stlUrl: '/images/projects/filament loader/parts/enclosure-v3.stl'",
    """    parts: [
      { name: 'Base', stlUrl: '/images/projects/filament loader/parts/base-part-v2.stl' },
      { name: 'Mount', stlUrl: '/images/projects/filament loader/parts/circular-mount-holder.stl' },
      { name: 'Enclosure', stlUrl: '/images/projects/filament loader/parts/enclosure-v3.stl' },
      { name: 'Left Side', stlUrl: '/images/projects/filament loader/parts/leftsidesub.stl' },
      { name: 'Motor', stlUrl: '/images/projects/filament loader/parts/motor-enclosure.stl' },
      { name: 'Mount V1', stlUrl: '/images/projects/filament loader/parts/mount_v1.stl' },
      { name: 'Right Side', stlUrl: '/images/projects/filament loader/parts/rightsidesub-prt-v4.stl' },
      { name: 'Roller', stlUrl: '/images/projects/filament loader/parts/rlr.stl' },
      { name: 'Scissors', stlUrl: '/images/projects/filament loader/parts/scissors-mechanism-for-asm.stl' }
    ]"""
)

code = code.replace(
    "    stlUrl: '/images/projects/dryer/parts/dryer.stl'",
    """    parts: [
      { name: 'Base Heater', stlUrl: '/images/projects/dryer/parts/base-heater.stl' },
      { name: 'Chamber A', stlUrl: '/images/projects/dryer/parts/chamber-a.stl' },
      { name: 'Chamber A1', stlUrl: '/images/projects/dryer/parts/chamber-a1.stl' },
      { name: 'Chamber B', stlUrl: '/images/projects/dryer/parts/chamber-b.stl' },
      { name: 'Dryer Body', stlUrl: '/images/projects/dryer/parts/dryer.stl' },
      { name: 'Hinge', stlUrl: '/images/projects/dryer/parts/hinge.stl' }
    ]"""
)

code = code.replace(
    "    stlUrl: '/images/projects/headset/part/bth.stl'",
    """    parts: [
      { name: 'Headset Joint', stlUrl: '/images/projects/headset/part/bth.stl' }
    ]"""
)

code = code.replace(
    "    stlUrl: '/images/projects/solar/part/solar-wiper.stl'",
    """    parts: [
      { name: 'Solar Wiper', stlUrl: '/images/projects/solar/part/solar-wiper.stl' }
    ]"""
)

# 2. Add activePart state
state_code = """  const [activeModel, setActiveModel] = useState<string | null>(null);
  const [activeParts, setActiveParts] = useState<{ [key: string]: number }>({});

  const setPart = (projId: string, partIdx: number) => {
    setActiveParts(prev => ({ ...prev, [projId]: partIdx }));
  };"""
code = code.replace("  const [activeModel, setActiveModel] = useState<string | null>(null);", state_code)

# 3. Update rendering
render_code = """                        <STLViewer url={proj.parts[activeParts[proj.id] || 0].stlUrl} />
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
                        </div>"""
code = code.replace("                        <STLViewer url={proj.stlUrl} />", render_code)

with open('src/pages/Projects.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('Updated successfully.')
