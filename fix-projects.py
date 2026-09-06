import re

with open('src/pages/Projects.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Update visual container to flex row
code = code.replace('className="visual-container"', 'className="visual-container" style={{ display: \'flex\', height: \'400px\', overflow: \'hidden\' }}')

# Update parts container to vertical scroll
old_parts_container = """                        <div 
                          className="parts-scroll-container"
                          style={{ 
                            display: 'flex', 
                            overflowX: 'auto', 
                            gap: '12px', 
                            padding: '16px 12px', 
                            background: 'rgba(0,0,0,0.8)', 
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            whiteSpace: 'nowrap'
                          }}
                        >"""

new_parts_container = """                        <div 
                          className="parts-scroll-container"
                          style={{ 
                            display: 'flex', 
                            flexDirection: 'column',
                            overflowY: 'auto', 
                            gap: '12px', 
                            padding: '16px 20px', 
                            background: 'rgba(0,0,0,0.9)', 
                            borderLeft: '1px solid rgba(255,255,255,0.1)',
                            minWidth: '180px'
                          }}
                        >"""

code = code.replace(old_parts_container, new_parts_container)

# Update scrollbar styles for Y axis
code = code.replace('.parts-scroll-container::-webkit-scrollbar {\n                                height: 3px;\n                              }', '.parts-scroll-container::-webkit-scrollbar {\n                                width: 3px;\n                              }')

# We'll fix the button styles by replacing the borderBottom line.
code = code.replace("borderBottom: (activeParts[proj.id] || 0) === pIdx ? '1px solid #fff' : '1px solid transparent',", "borderLeft: (activeParts[proj.id] || 0) === pIdx ? '2px solid #fff' : '2px solid transparent',")


with open('src/pages/Projects.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
print('Done!')
