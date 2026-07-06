# Workbench — Workflow Builder (plain HTML/CSS/JS)

A conventional static web app — no framework, no build step. Runs directly on GitHub Pages or any static host.

## Files
- `index.html` — markup / structure
- `styles.css` — all styles + design tokens (Trumpia design system)
- `app.js` — all interaction logic (drag-and-drop tiles, port connections, Forward Call drawer, Spec modal)

Fonts load from Google Fonts over the network; everything else is local.

## Run locally
Open `index.html` in a browser, or serve the folder:
```
python3 -m http.server
```

## Publish on GitHub Pages
1. Push these three files to a repository (root or `/docs`).
2. Settings → Pages → Build from branch → pick the branch and folder.
3. `index.html` is the entry point.

## Features
- Drag any action card from the right panel onto the canvas to create a tile
- Contact Trigger and all tiles are movable; click to select, trash icon to delete
- Drag from a tile's output port to another tile's top input to connect them
- **Forward Call** tile has 5 outputs (Success / No Answer / Busy / Decline / Failed) and opens a config drawer
- The drawer's **Spec** button opens the full field specification table
