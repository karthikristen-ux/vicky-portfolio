import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Remove MissMinutes
code = code.replace("import { MissMinutes } from './components/MissMinutes';\n", "")
code = code.replace("      <MissMinutes />\n", "")

# 2. Add scroll background to header
# First, add a scroll state and listener
nav_code_start = """const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);"""

nav_code_new = """const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);"""

code = code.replace(nav_code_start, nav_code_new)

# Modify nav style to use the scrolled state
old_nav_tag = """<nav className={location.pathname !== '/' ? 'nav-collapsed' : ''} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>"""
new_nav_tag = """<nav className={location.pathname !== '/' ? 'nav-collapsed' : ''} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, transition: 'all 0.3s ease', background: scrolled ? 'rgba(5,5,5,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent' }}>"""
code = code.replace(old_nav_tag, new_nav_tag)

# 3. Update V logo font
old_logo = """<Link to="/" className="logo" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', fontWeight: 700, fontFamily: "'Fredoka', sans-serif", fontSize: '1.8rem', letterSpacing: '-0.02em' }}>"""
new_logo = """<Link to="/" className="logo" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', fontWeight: 700, fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '2.5rem' }}>"""
code = code.replace(old_logo, new_logo)

# We also need to update the tab fonts. In index.css, .glass-pill-nav a has font-family
with open('src/index.css', 'r', encoding='utf-8') as fcss:
    css_code = fcss.read()

old_glass_pill = """  .glass-pill-nav a {
    color: #a3a3a3;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.2s ease;
  }"""
new_glass_pill = """  .glass-pill-nav a {
    color: #a3a3a3;
    text-decoration: none;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.2s ease;
  }"""

css_code = css_code.replace(old_glass_pill, new_glass_pill)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

with open('src/index.css', 'w', encoding='utf-8') as fcss:
    fcss.write(css_code)

print('App and index.css updated!')
