# Modelverse Website

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=vercel&logoColor=white)

![Status](https://img.shields.io/badge/Status-Stable%20Release-green)

The official static website for the Modelverse cybersecurity platform, built with modern web technologies for performance and maintainability.

This repository hosts the front-end source code for the Modelverse platform's official online presence. Built with **Next.js** and **TypeScript** as a fully static export, its design prioritizes security, speed, and ease of deployment, serving as the main information hub for our platform.

## Table of Contents

- [Modelverse Website](#modelverse-website)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running Locally](#running-locally)
  - [Build \& Deployment](#build--deployment)
    - [1. Building the project](#1-building-the-project)
    - [2. Locally Previewing the Build](#2-locally-previewing-the-build)
    - [3. Locally deploying to Firebase (NOT Recommended)](#3-locally-deploying-to-firebase-not-recommended)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Contact](#contact)

## Technologies Used

This project is a static website built with a modern frontend stack designed for performance, security, and maintainability.

The core technologies are:

- **Framework:** [Next.js](https://nextjs.org/) (static export via `output: 'export'`)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Internationalisation:** [next-intl](https://next-intl.dev/) — English (default) and Dutch (`/nl/`)
- **Blog/Articles:** MDX via `@next/mdx`
- **Analytics:** Google Analytics 4
- **Hosting:** Firebase Hosting
- **Package Manager:** npm

## Getting Started

Follow these step-by-step instructions to get a copy of the **Modelverse Website** up and running on your local machine for development or review.

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- **Git**
- **Node.js:** v24.x (lts)
- **npm:** (comes bundled with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone -b dev git@github.com:modelversebv/modelverse-website.git
   ```
2. **Navigate into the project directory**
   ```bash
   cd modelverse-website
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```

### Running Locally

After successful installation, start the Next.js development server:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

The English version is served at `/` and the Dutch version at `/nl/`.

## Build & Deployment

The Modelverse website uses Next.js with `output: 'export'` to generate a fully static site.

### 1. Building the project

```bash
npm run build
```

This compiles and optimizes all pages, routes, and assets into static files in the **`dist/`** directory. The sitemap at `/sitemap.xml` is generated automatically from the page structure.

### 2. Locally Previewing the Build

To serve the production build locally exactly as Firebase would:

```bash
npx serve dist
```

> **Note:** `npm run start` is not applicable for static exports — use `npx serve dist` instead.

### 3. Locally deploying to Firebase (NOT Recommended)

- Install the **Firebase CLI** globally if not already installed:
  ```bash
  npm install -g firebase-tools
  ```
- Log into your Firebase account:
  ```bash
  firebase login
  ```
- Build the application, then deploy:
  ```bash
  firebase deploy
  ```

## Contributing

Please see [**CONTRIBUTING.md**](./CONTRIBUTING.md) for detailed instructions on setting up your environment, branching strategy, and code standards.

## Credits

Initial development and implementation by [Matei Avram](https://github.com/mateiAvram)

## Contact

For questions or support, reach out to the maintainers:

- Daan Loyens - [daan@modelverse.online](mailto:daan@modelverse.online)
- Matei Avram - [matei@modelverse.online](mailto:matei@modelverse.online)
