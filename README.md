# Utilitats de qmrcat

Portal en català que reuneix les set utilitats de qmrcat i enllaça directament a les seves versions de GitHub Pages. HTML, CSS i JavaScript natius: cap dependència, font externa, servei d’analítica ni procés de compilació.

El tema fosc és el predeterminat, independentment del tema del sistema. La paleta principal es pot personalitzar a les variables de `:root` de `dist/styles.css`; els controls natius del navegador també utilitzen l’esquema fosc.

## Obrir el portal

Obre `dist/index.html` amb qualsevol navegador modern. També funciona amb `file://`: el catàleg es carrega amb scripts clàssics, sense `fetch` ni mòduls ES.

Per servir-lo localment, executa des de la carpeta `web`:

```sh
python -m http.server 8000 --directory dist
```

Obre `http://localhost:8000`. Per publicar-lo en qualsevol allotjament estàtic o GitHub Pages, puja **el contingut de `dist/`** al directori públic. Els camins són relatius i també admeten un subdirectori.

## Afegir una utilitat

Edita `dist/utilities.js` i afegeix un objecte a `window.UTILITIES`:

```js
{
  id: 'eina-nova',
  name: 'Nom de la utilitat',
  description: 'Una descripció breu que expliqui què pot fer l’usuari.',
  category: 'Dia a dia',
  icon: 'tool',
  color: 'green',
  tags: ['Etiqueta', 'Una altra etiqueta'],
  keywords: ['paraules', 'per trobar-la'],
  url: 'https://exemple.cat/eina/',
  repository: 'https://github.com/qmrcat/eina-nova'
}
```

Separa els objectes amb comes. Fes servir un `id` únic, URL HTTPS vàlids i un màxim recomanat de dues etiquetes. Les categories, els filtres i els comptadors s’actualitzen automàticament. L’ordre inicial és el del fitxer.

Icones disponibles: `grid`, `bolt`, `pin`, `watermark`, `dice`, `lock`, `markdown`, `tool`. Colors: `orange`, `amber`, `green`, `blue`, `purple`, `rose`, `teal`. Una icona o color desconegut utilitza el valor per defecte.

La cerca ignora accents i majúscules i consulta el nom, la descripció, la categoria, les etiquetes i les paraules clau. Es pot combinar amb una categoria i ordenar alfabèticament. `/` enfoca la cerca i `Esc` la buida.

## Fitxers

- `dist/index.html`: estructura, textos del portal i enllaços alternatius sense JavaScript.
- `dist/styles.css`: disseny adaptable i estils d’accessibilitat.
- `dist/utilities.js`: únic fitxer que cal editar per ampliar el catàleg amb JavaScript.
- `dist/app.js`: cerca, filtres, ordenació i generació de targetes.
- `dist/favicon.svg`: icona local del portal.

Si vols mantenir també el catàleg alternatiu sense JavaScript, actualitza els enllaços del bloc `<noscript>` d’`index.html` en afegir eines.

Les eines s’obren en una pestanya nova. El portal no copia ni allotja les aplicacions: necessita connexió per accedir als seus webs. El portal en si es pot obrir sense connexió. Les descripcions s’han contrastat amb els README dels set repositoris el 17 d’octubre de 2026.
