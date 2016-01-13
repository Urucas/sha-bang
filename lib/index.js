const shebang = {
  "bash" : "#!/bin/bash",
  "node" : "#!/usr/bin/env node",
  "python": "#!/usr/bin/env python2"
}
export default function index(language) {
  return shebang[language] || `Wops! shebang for ${language} not found! Contribute by adding the shebang for this language on https://github.com/Urucas/sha-bang.`;
}
