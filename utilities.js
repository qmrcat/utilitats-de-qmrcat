/* Catàleg del portal. Per afegir una eina, copia un objecte i canvia'n les dades.
   Les categories i els comptadors es generen automàticament.
   Icones: grid, bolt, pin, watermark, dice, lock, markdown (o tool per defecte).
   Colors: orange, amber, green, blue, purple, rose, teal.
   Fes servir un id únic i URL https:// per a l'eina i el repositori. */
window.UTILITIES = [
  {
    id: 'divisor-imatges',
    name: 'Divisor d’imatges',
    description: 'Divideix una imatge en quadrícules de 2 × 2 a 6 × 6. Descarrega els trossos per separat o tots junts en un ZIP.',
    category: 'Imatges', icon: 'grid', color: 'orange',
    tags: ['Quadrícules', 'Exportació ZIP'],
    keywords: ['retallar', 'tallar', 'foto', 'fotografia', 'mosaic'],
    url: 'https://qmrcat.github.io/divisor-imatges/',
    repository: 'https://github.com/qmrcat/divisor-imatges'
  },
  {
    id: 'consum-electric',
    name: 'Consum elèctric',
    description: 'Calcula el consum i estima el cost dels teus aparells. Consulta els preus horaris del PVPC o introdueix els del teu contracte.',
    category: 'Dia a dia', icon: 'bolt', color: 'amber',
    tags: ['Energia', 'Calculadora'],
    keywords: ['watts', 'watt', 'kwh', 'llum', 'electricitat', 'estalvi', 'calculadora'],
    url: 'https://qmrcat.github.io/calculadora-consum-electric/',
    repository: 'https://github.com/qmrcat/calculadora-consum-electric'
  },
  {
    id: 'deixalleria',
    name: 'On és la deixalleria?',
    description: 'Troba la deixalleria mòbil de Reus. Consulta el calendari, els horaris i les ubicacions, i cerca el punt del teu barri.',
    category: 'Dia a dia', icon: 'pin', color: 'green',
    tags: ['Reus', 'Calendari'],
    keywords: ['reciclatge', 'residus', 'carrer', 'mapa', 'medi ambient'],
    url: 'https://qmrcat.github.io/on-es-la-deixalleria/',
    repository: 'https://github.com/qmrcat/on-es-la-deixalleria'
  },
  {
    id: 'marca-aigua',
    name: 'Marca d’aigua',
    description: 'Afegeix marques d’aigua a les imatges i tapa informació sensible amb màscares o pixelat. Processa els fitxers al navegador.',
    category: 'Imatges', icon: 'watermark', color: 'blue',
    tags: ['Personalització', 'Privacitat'],
    keywords: ['foto', 'text', 'confidencial', 'document', 'ocultar', 'difuminar'],
    url: 'https://qmrcat.github.io/Zona-MarcaAigues/',
    repository: 'https://github.com/qmrcat/Zona-MarcaAigues'
  },
  {
    id: 'partides',
    name: 'Marcador de partides',
    description: 'Porta els punts dels jocs de taula, afegeix jugadors i rondes i consulta la classificació. Les partides es desen al dispositiu.',
    category: 'Jocs', icon: 'dice', color: 'purple',
    tags: ['Puntuacions', 'Jocs de taula'],
    keywords: ['jugar', 'catan', 'carcassonne', 'rànquing', 'comptador'],
    url: 'https://qmrcat.github.io/Zona-Partides/',
    repository: 'https://github.com/qmrcat/Zona-Partides'
  },
  {
    id: 'xifratge',
    name: 'CiberGanxets',
    description: 'Xifra i desxifra fitxers amb una contrasenya i AES-256. El processament es fa al teu navegador, sense enviar els fitxers al servidor.',
    category: 'Seguretat', icon: 'lock', color: 'rose',
    tags: ['Xifratge', 'Fitxers locals'],
    keywords: ['xifrar', 'desxifrar', 'encriptar', 'protegir', 'contrasenya', 'clau', 'xifreu'],
    url: 'https://qmrcat.github.io/Xifreu_en_local/',
    repository: 'https://github.com/qmrcat/Xifreu_en_local'
  },
  {
    id: 'editor-markdown',
    name: 'Editor Markdown',
    description: 'Escriu notes i documents en Markdown amb vista prèvia en temps real. Dona format al text, afegeix taules i desa els teus fitxers.',
    category: 'Escriptura', icon: 'markdown', color: 'teal',
    tags: ['Vista prèvia', 'Documents'],
    keywords: ['editar', 'escriure', 'readme', 'md', 'apunts', 'text'],
    url: 'https://qmrcat.github.io/editor-markdown/',
    repository: 'https://github.com/qmrcat/editor-markdown'
  }
];
