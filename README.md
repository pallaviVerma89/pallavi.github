# Portfolio scaffold

This is a lightweight static portfolio scaffold. Edit `index.html` and `assets/js/main.js` to add your projects and content.

Quick start

```bash
# serve locally (requires a simple static server, e.g. Python)
python3 -m http.server 8000
# then open http://localhost:8000
```

Deploy

- Push this repo to GitHub and enable GitHub Pages from the `main` branch (or use Actions).

Editing projects

- Open `assets/js/main.js` and replace the `projects` array with your projects. Each project has `title`, `desc`, `thumb`, `url`, and `details`.

- Edit projects: update `data/projects.json` (recommended) or `assets/js/main.js`.
	- `data/projects.json` is the editable list the site loads. Add or remove objects in the array.
# pallavi.github