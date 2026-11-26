# ShopFlow — Admin Dashboard

A responsive, frontend-only commerce admin dashboard built with semantic HTML, modern CSS, vanilla JavaScript, Bootstrap Icons and Chart.js. This is a portfolio/demo project; it does not connect to a backend or database.

## Features

- Responsive admin layout with collapsible mobile sidebar
- Dashboard overview with revenue and order-status charts
- Product, order and customer CRUD (create, read, update, delete)
- Search and status filters for management tables
- CSV exports for products, customers and orders; JSON backup for all demo data
- Demo sign-up/sign-in flow and editable profile settings
- LocalStorage persistence and resettable sample data
- Accessible labels, keyboard shortcuts (`Ctrl/Cmd + K`, `Esc`), modal validation and toast feedback

## Run locally

1. Download or clone this repository.
2. Open `login.html` directly in a modern browser, or serve the folder with a local static server (recommended).
3. Create a demo account or sign in using any valid email and a password of at least six characters.

No `npm install`, backend, API keys or database are required. Google Fonts, Bootstrap Icons and Chart.js are loaded from CDNs, so an internet connection is needed for those assets.

## Demo data and security note

All records are stored in the browser's LocalStorage. The sign-in flow is intentionally a frontend demonstration and is **not secure authentication**. Do not enter real passwords, payment details or sensitive customer information. Clearing this site's browser storage resets the local workspace.

## Tech stack

- HTML5
- CSS3 (Grid, Flexbox, responsive media queries)
- JavaScript (ES6+, DOM APIs, LocalStorage)
- Chart.js 4
- Bootstrap Icons 1.11

## Portfolio note

The project demonstrates frontend UI architecture, responsive layouts, state persistence, form validation, data-table interactions, chart rendering and client-side export workflows. Sample metrics and seeded records are illustrative, not live business data.
