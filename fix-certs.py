import re

with open('src/pages/Certificates.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_h1 = \"\"\"<h1 className=\"crt-text\" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>CERTIFICATIONS & AWARDS</h1>\"\"\"
new_h1 = \"\"\"<h1 style={{ fontFamily: \"'Playfair Display', serif\", fontSize: 'clamp(2rem, 4vw, 4rem)', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>CERTIFICATIONS & AWARDS</h1>\"\"\"

content = content.replace(old_h1, new_h1)

with open('src/pages/Certificates.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Certificates updated')
