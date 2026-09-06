const fs = require('fs');
const file = 'src/pages/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace descriptions
content = content.replace(
  /{ name: 'Base', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/base-part-v2.stl' }/g,
  "{ name: 'Base', stlUrl: '/images/projects/filament loader/parts/base-part-v2.stl', description: 'Foundation structure for the loader.\\nDesigned for maximum stability during operation.' }"
);
content = content.replace(
  /{ name: 'Mount', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/circular-mount-holder.stl' }/g,
  "{ name: 'Mount', stlUrl: '/images/projects/filament loader/parts/circular-mount-holder.stl', description: 'Secure attachment point for spools.\\nAdaptable to different spool diameters.' }"
);
content = content.replace(
  /{ name: 'Enclosure', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/enclosure-v3.stl' }/g,
  "{ name: 'Enclosure', stlUrl: '/images/projects/filament loader/parts/enclosure-v3.stl', description: 'Protects the internal mechanics from dust.\\nSnap-fit design for easy assembly.' }"
);
content = content.replace(
  /{ name: 'Left Side', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/leftsidesub.stl' }/g,
  "{ name: 'Left Side', stlUrl: '/images/projects/filament loader/parts/leftsidesub.stl', description: 'Left structural brace supporting the spool.\\nIntegrates directly with the base mount.' }"
);
content = content.replace(
  /{ name: 'Motor', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/motor-enclosure.stl' }/g,
  "{ name: 'Motor', stlUrl: '/images/projects/filament loader/parts/motor-enclosure.stl', description: 'Houses the non-proprietary driving motor.\\nDesigned with thermal vents to prevent overheating.' }"
);
content = content.replace(
  /{ name: 'Mount V1', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/mount_v1.stl' }/g,
  "{ name: 'Mount V1', stlUrl: '/images/projects/filament loader/parts/mount_v1.stl', description: 'Initial prototype for the spool mount.\\nRetained for legacy compatibility.' }"
);
content = content.replace(
  /{ name: 'Right Side', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/rightsidesub-prt-v4.stl' }/g,
  "{ name: 'Right Side', stlUrl: '/images/projects/filament loader/parts/rightsidesub-prt-v4.stl', description: 'Right structural brace supporting the spool.\\nSymmetrical pairing with the left side.' }"
);
content = content.replace(
  /{ name: 'Roller', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/rlr.stl' }/g,
  "{ name: 'Roller', stlUrl: '/images/projects/filament loader/parts/rlr.stl', description: 'Ensures smooth filament unspooling.\\nReduces friction and prevents tangling.' }"
);
content = content.replace(
  /{ name: 'Scissors', stlUrl: '\\/images\\/projects\\/filament loader\\/parts\\/scissors-mechanism-for-asm.stl' }/g,
  "{ name: 'Scissors', stlUrl: '/images/projects/filament loader/parts/scissors-mechanism-for-asm.stl', description: 'Innovative scissor mechanism to grab and feed filament.\\nAutomatically adjusts to tension.' }"
);

content = content.replace(
  /{ name: 'Base Heater', stlUrl: '\\/images\\/projects\\/dryer\\/parts\\/base-heater.stl' }/g,
  "{ name: 'Base Heater', stlUrl: '/images/projects/dryer/parts/base-heater.stl', description: 'Houses the heating element and fan.\\nEnsures consistent heat distribution.' }"
);
content = content.replace(
  /{ name: 'Chamber A', stlUrl: '\\/images\\/projects\\/dryer\\/parts\\/chamber-a.stl' }/g,
  "{ name: 'Chamber A', stlUrl: '/images/projects/dryer/parts/chamber-a.stl', description: 'Primary 3D-printable chamber segment.\\nUses dovetail joints for expansion.' }"
);
content = content.replace(
  /{ name: 'Chamber A1', stlUrl: '\\/images\\/projects\\/dryer\\/parts\\/chamber-a1.stl' }/g,
  "{ name: 'Chamber A1', stlUrl: '/images/projects/dryer/parts/chamber-a1.stl', description: 'Secondary chamber expansion segment.\\nIncreases volume for multi-spool setups.' }"
);
content = content.replace(
  /{ name: 'Chamber B', stlUrl: '\\/images\\/projects\\/dryer\\/parts\\/chamber-b.stl' }/g,
  "{ name: 'Chamber B', stlUrl: '/images/projects/dryer/parts/chamber-b.stl', description: 'Top structural chamber component.\\nSeals the box to maintain humidity levels.' }"
);
content = content.replace(
  /{ name: 'Dryer Body', stlUrl: '\\/images\\/projects\\/dryer\\/parts\\/dryer.stl' }/g,
  "{ name: 'Dryer Body', stlUrl: '/images/projects/dryer/parts/dryer.stl', description: 'The core assembled body of the dryer.\\nProvides the main structural integrity.' }"
);
content = content.replace(
  /{ name: 'Hinge', stlUrl: '\\/images\\/projects\\/dryer\\/parts\\/hinge.stl' }/g,
  "{ name: 'Hinge', stlUrl: '/images/projects/dryer/parts/hinge.stl', description: 'Robust mechanical hinge for the lid.\\nReplaces weak standard printed hinges.' }"
);

content = content.replace(
  /{ name: 'Headset Joint', stlUrl: '\\/images\\/projects\\/headset\\/part\\/bth.stl' }/g,
  "{ name: 'Headset Joint', stlUrl: '/images/projects/headset/part/bth.stl', description: 'Replacement swivel joint for the headset.\\nEngineered to eliminate original weak points.' }"
);

content = content.replace(
  /{ name: 'Solar Wiper', stlUrl: '\\/images\\/projects\\/solar\\/part\\/solar-wiper.stl' }/g,
  "{ name: 'Solar Wiper', stlUrl: '/images/projects/solar/part/solar-wiper.stl', description: 'Reinforced wiper attachment body.\\nBuilt to withstand high manual push force.' }"
);

// Add description to ProjectPart interface if it's not there
if (!content.includes("description?: string")) {
  content = content.replace("stlUrl: string;", "stlUrl: string;\n  description?: string;");
}

// Remove "Click Me For Facts!" button
content = content.replace(
  /<div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>\s*<button[\s\S]*?CLICK ME FOR FACTS!<\/button>\s*<\/div>/g,
  ""
);

// Make Carousel Cards fit to image and 1:1 ratio (approx), move title outside.
const cardStartIdx = content.indexOf("<div\\n                        key={p.id}");
const cardEndIdx = content.indexOf("</motion.div>\\n                    </div>"); // It's wrapped in motion.div

// For the cards, I will just do string replacements for the specific parts.

// 1. Change card dimensions and background to contain
content = content.replace(
  /width: '320px',\n\s*height: '420px',\n\s*backgroundColor: 'rgba\(0,0,0,0\.6\)',\n\s*backgroundImage: `url\(\\\$\\{p\.cover\\}\)`,\n\s*backgroundSize: 'cover',\n\s*backgroundPosition: 'center',/g,
  "width: '350px',\n                        height: '350px',\n                        backgroundColor: 'transparent',\n                        backgroundImage: `url(${p.cover})`,\n                        backgroundSize: 'contain',\n                        backgroundPosition: 'center',\n                        backgroundRepeat: 'no-repeat',"
);

// 2. Remove the inner title and gradient
content = content.replace(
  /{\/\* Title Overlay \*\/}[\s\S]*?<\/div>\s*<\/div>/g,
  ""
);

// 3. Add title BELOW the card (which is rendered by motion.div)
// The structure is currently:
/*
<motion.div ...>
  <div ... card style ... onClick={...}> </div>
</motion.div>
*/
// We need to wrap it in a flex column, or just add the title inside the motion.div below the card.
content = content.replace(
  /<div\s*style={{\s*width: '350px',[\s\S]*?onClick={\(\) => {\s*if \(idx === activeProjectIdx\) {\s*setIsOpen\(true\);\s*}\s*}}\s*>\s*<\/div>/g,
  `$&
                      {idx === activeProjectIdx && (
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'normal', margin: 0 }}>
                            {p.title}
                          </h2>
                          <div style={{ width: '60px', height: '1px', backgroundColor: '#fff', margin: '0.75rem auto', opacity: 0.3 }} />
                          <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1rem', color: '#fff', display: 'block', opacity: 0.8, letterSpacing: '1px' }}>
                            [{p.year}]
                          </span>
                        </div>
                      )}`
);

// Fix colors and fonts inside the project details view (isOpen)
// Change colors from #e5a93c to #fff inside isOpen content

// Fix Close Project button color
content = content.replace(/color: '#e5a93c'/g, "color: '#fff'");
content = content.replace(/borderColor: '#e5a93c'/g, "borderColor: '#fff'");

// Fix main title inside details
content = content.replace(
  /<h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp\(2rem, 4vw, 3rem\)', color: '#e5a93c', margin: 0, textTransform: 'uppercase', fontWeight: 'normal', letterSpacing: '2px' }}>/g,
  "<h1 style={{ fontFamily: \"'Playfair Display', serif\", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', margin: 0, textTransform: 'uppercase', fontWeight: 'normal', letterSpacing: '2px' }}>"
);

// Fix subtitle color
content = content.replace(
  /<div style={{ fontFamily: "'Fredoka', sans-serif", color: '#e5a93c', opacity: 0.8, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>/g,
  "<div style={{ fontFamily: \"'Fredoka', sans-serif\", color: '#fff', opacity: 0.8, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>"
);

// Fix line separator color
content = content.replace(
  /<div style={{ width: '100%', height: '1px', background: 'linear-gradient\(90deg, rgba\(229,169,60,0.5\) 0%, rgba\(229,169,60,0\) 100%\)', marginBottom: '3rem' }} \/>/g,
  "<div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)', marginBottom: '3rem' }} />"
);

// Fix tab colors (active)
content = content.replace(
  /color: activeTab === 'description' \? '#e5a93c' : '#888'/g,
  "color: activeTab === 'description' ? '#fff' : '#888'"
);
content = content.replace(
  /color: activeTab === 'parts' \? '#e5a93c' : '#888'/g,
  "color: activeTab === 'parts' ? '#fff' : '#888'"
);
// Fix tab underline colors
content = content.replace(
  /background: 'linear-gradient\(90deg, rgba\(229,169,60,0.3\) 0%, rgba\(229,169,60,0\) 100%\)'/g,
  "background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)'"
);

// Fix headings in Description tab
// The user asked to "remove the bulky font use the uniform font". 
// I'll change fontFamily: "'Playfair Display', serif" to "'Fredoka', sans-serif" for OVERVIEW, KEY FEATURES, PROBLEM, SOLUTION
content = content.replace(
  /<h3 style={{ fontFamily: "'Playfair Display', serif", color: '#e5a93c', fontSize: '1.5rem', fontWeight: 'normal', margin: '0 0 1.5rem 0' }}>/g,
  "<h3 style={{ fontFamily: \"'Fredoka', sans-serif\", color: '#fff', fontSize: '1.5rem', fontWeight: 'normal', margin: '0 0 1.5rem 0' }}>"
);

// Add 2-line description for parts in the Parts tab
// Currently it maps over parts:
/*
<div style={{ flex: 1, backgroundColor: 'rgba(10,10,10,0.8)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
  <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h4 style={{ fontFamily: "'Fredoka', sans-serif", color: '#fff', margin: 0, fontSize: '1.2rem', letterSpacing: '1px' }}>{part.name}</h4>
    <span style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Orbitron', sans-serif" }}>0{partIdx + 1}</span>
  </div>
  <div style={{ height: '300px', width: '100%' }}>
    <STLViewer url={part.stlUrl} />
  </div>
</div>
*/
content = content.replace(
  /<div style={{ height: '300px', width: '100%' }}>\s*<STLViewer url={part.stlUrl} \/>\s*<\/div>/g,
  `$&
                                {part.description && (
                                  <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <p style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '0.9rem', color: '#ccc', margin: 0, lineHeight: '1.5' }}>
                                      {part.description.split('\\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                          {line}
                                          {i !== part.description.split('\\n').length - 1 && <br />}
                                        </React.Fragment>
                                      ))}
                                    </p>
                                  </div>
                                )}`
);


fs.writeFileSync(file, content, 'utf8');
