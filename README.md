# Artist-Fan-Site
A frontend fan site for the artist Moderat, created to learn UIKit, JS, and jQuery.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)

## Installation

```sh
npm install
```

This will also automatically copy the required UIKit vendor files into `src/css/` and `src/js/`.

## Running Locally

```sh
npm start
```

This starts the Eleventy dev server with live reload.


## Deployment

The site is automatically deployed on push to `main` via GitHub Actions:
See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

- **GitHub Pages** — built with the `/Artist-Fan-Site/` path prefix.
- **Student Server** — deployed via FTP using stored secrets.