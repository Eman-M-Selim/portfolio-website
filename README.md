# Eman Selim | Portfolio Website

Professional multilingual portfolio website (English/German) with dark/light theme support and a dynamically generated CV page.

## Live Content Areas
- Hero
- About + Education timeline
- Skills + Language levels
- Experience timeline
- Projects
- Certificates
- Contact
- CV generator (print/PDF)

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap Icons
- Shared data model for all pages (`data/portfolio-data.js`)

## Project Structure
```text
.
|- assets/
|  |- images/
|- css/
|  |- style.css
|  |- cv.css
|- js/
|  |- script.js
|  |- cv.js
|- data/
|  |- portfolio-data.js
|- index.html
|- projects.html
|- certificates.html
|- cv.html
```

## Local Development
1. Clone the repository.
2. Open `index.html` directly in a browser, or use a static server.
3. Optional static server examples:
   - `python -m http.server 8000`
   - `npx serve .`

## Content Management
All dynamic text and structured content are centralized in:
- `data/portfolio-data.js`

Update this file to change:
- Translations (EN/DE)
- Personal profile information
- Projects and certificates
- CV content

## Accessibility and UX
- Skip link for keyboard users
- Focus-visible states for interactive elements
- Responsive navigation with keyboard escape handling
- Consistent heading hierarchy and semantic sections
- Improved contrast handling for light/dark themes

## GitHub Pages Publishing
1. Push repository to GitHub.
2. In repository settings, open **Pages**.
3. Set source to the main branch root (`/ (root)`).
4. Save and wait for deployment.

Because all links are relative, the site is GitHub Pages compatible.

## Final QA Checklist
- Desktop/tablet/mobile layouts
- English and German language switching
- Dark and light theme switching
- CV page rendering and PDF print/download
- Internal navigation anchors
- External links (GitHub, LinkedIn, certificate verification)

## License
This project is a personal portfolio website created for learning and professional presentation purposes.
