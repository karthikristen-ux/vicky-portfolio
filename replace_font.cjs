const fs = require('fs');
const files = [
  'src/pages/Projects.tsx',
  'src/pages/Home.tsx',
  'src/components/TemPadTimeline.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (file.includes('TemPadTimeline.tsx')) {
    content = content.replace(/'Fredoka', sans-serif/g, "'Playfair Display', serif");
  } else {
    content = content.replace(/'Fredoka', sans-serif/g, "'Inter', sans-serif");
  }
  fs.writeFileSync(file, content);
}
