# Workbench — Workflow Builder

Self-contained static HTML. No build step, no dependencies — works directly on GitHub Pages or any static host.

## Files
- `index.html` — Workflow builder (drag-and-drop tiles, port connections, Forward Call config drawer + Spec modal)
- `forward-call-modal.html` — The Forward Call configuration modal on its own, with its embedded Spec table

Each file inlines all assets (the Trumpia design system, fonts, runtime) so it opens offline by double-click.

## Publish on GitHub Pages
1. Push this folder to a repository.
2. Settings → Pages → Build from branch → select the branch and the folder containing `index.html`.
3. The builder will be served at the Pages URL (`index.html` is the entry point).
