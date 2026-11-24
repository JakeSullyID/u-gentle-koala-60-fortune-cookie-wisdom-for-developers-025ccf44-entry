// This script writes our original developer fortune cookie wisdom about the reciprocal psychological weight of legacy refactoring.
// Re-reading the punchline uncovers a deeper symmetry where the developer's identity is rewritten by the legacy code they touch.
const fs = require('fs');
const path = require('path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const wisdom = 'You seek to refactor the ancient monolith, unaware the monolith is patiently refactoring you.';

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), wisdom, 'utf8');
