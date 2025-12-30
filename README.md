<div align="center">
  <a href="https://codevora.com">
    <img src="https://raw.githubusercontent.com/Sujan-Rai-426/CodeVora-UI-Library/main/assets/logo/CodeVora_SVG_Logo.svg" 
         alt="CodeVora UI Logo" 
         width="180" />
  </a>

  # CodeVora UI Library `1.0.1`

  ### The Modern Animated UI Components Library for Web Developers
  *Free, Animated, and Professional UI Components for high-end React apps.*

  <p>
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
    <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React JS" />
    <img src="https://img.shields.io/npm/v/codevora-ui?style=flat-square&color=cb3837" alt="NPM Version" />
  </p>

  <code>npm i codevora-ui</code> &nbsp;•&nbsp; <code>npm i codevora-ui@latest</code>

  <br />

  [**CodeVora UI**](https://codevora140.vercel.app) • [**YouTube Community**](https://www.youtube.com/@CodeVora140)

  ---
</div>

# About CodeVora UI 💎
**CodeVora UI** is a specialized React component library designed for developers who want to add "Hacker-style," high-performance, and deeply animated visual elements to their web applications without the heavy lifting of custom CSS and Canvas logic.

## 🚀 Key Features
- **Plug & Play**: Import and use immediately in any React project.
- **Lightweight**: Optimized bundle size via Rollup.
- **Modern Tech**: Compatible with React 17, 18, and 19.
- **Beautifully Animated**: Built-in animations that work out of the box.

## 📦 Installation
```bash
npm install codevora-ui
```
## ✅ Usages Example [App.jsx]
```bash
    import { HackerThemeBG } from 'codevora-ui';
    ...
    return(
        <HackerThemeBG>
            <div style={{minHeight: "100vh"}}>
                Hello
            </ div>
        </HackerThemeBG>
    );
```
## 📄 License
MIT © [Sujan Rai](https://github.com/Sujan-Rai-426)


## Folder Structure [Demo]

codevora-ui/
    ├── index.t.ds
    |
    ├── src/
    |   ├── index.js
    |   |
    |   ├── components/
    |   |       ├── core/ # Reusable UI components using preset
        |       │       ├── Button/
        ├──..   |       |      ├── Button.css
                |       |      ├── Button.jsx
                |       |      ├── preset.css
                |       |      ├── Button.d.ts
                |       |
                |       ├──.....
                |       |     
                │       ├── index.js
                │       └── index.d.ts
                │
                │
                ├── environments/ #with complete environemnt and dont use preset
                │       ├── HackerBackground/
                │       │       ├── HackerBackground.jsx
                │       │       ├── HackerBackground.css
                │       │       └── index.js
                |       |
                │       ├── CyberpunkBackground/
                │       │       └── .....
                │       |
                |       ├──index.js
                |       └── index.d.ts
                |
                └── index.js
