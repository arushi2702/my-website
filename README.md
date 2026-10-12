# Arushi Waddepalli — personal website

A static academic site with no build step: `index.html`, `assets/css/style.css`, `assets/js/main.js`.

## Structure

- **Home** (`#home`): intro, links, news, education, honors, service
- **Research** (`#research`): publications (`#publications`)
- **Projects** (`#projects`): selected projects
- **CV** (`#cv`): the full CV laid out on the page (education, publications, experience with logos, projects, honors, leadership, skills), plus download buttons for both PDFs

All content lives in `index.html`. Dark mode follows the visitor's system setting.

## Common edits

- **Photo:** `assets/img/profile.jpg`, a 4:5 portrait.
- **News:** add a new `<li>` at the top of `<ul class="news">`.
- **Publications / experience / projects:** copy an existing `<li>` in the matching `<ul class="entries">`. Experience entries take a logo from `assets/img/logos/` (128×128 PNG).
- **PDFs:** replace `assets/cv/Arushi_Waddepalli_CV.pdf` (research) or `assets/cv/Arushi_Waddepalli_Resume_SDE.pdf`, keeping the same names.

## Preview locally

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Deploy

- **Vercel:** import the folder as a new project. Choose "Other" as the framework, with no build command.
- **GitHub Pages:** push to a repo named `<username>.github.io`, or enable Pages on any repo from the root of `main`.
