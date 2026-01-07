<div align="center">
  <a href="https://codevora.com">
    <img src="https://raw.githubusercontent.com/Sujan-Rai-426/CodeVora-UI-Library/main/assets/logo/CodeVora_SVG_Logo.svg" 
         alt="CodeVora UI Logo" 
         width="180" />
  </a>

  # CodeVora UI Library `1.0.6`

  ### The Modern Animated UI Components Library for Web Developers
  *Free, Animated, and Professional UI Components for high-end React apps.*

  <p>
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
    <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React JS" />
    <img src="https://img.shields.io/npm/v/codevora-ui?style=flat-square&color=cb3837" alt="NPM Version" />
  </p>

  <code>npm install codevora-ui</code> &nbsp;

  <br />

  [**CodeVora UI**](https://codevora140.vercel.app) • [**YouTube Community**](https://www.youtube.com/@CodeVora140)

  ---
</div>


# CodeVora UI Library

![npm version](https://img.shields.io/npm/v/codevora-ui?style=for-the-badge&color=00ff41)
![npm downloads](https://img.shields.io/npm/dm/codevora-ui?style=for-the-badge&color=white)
![bundle size](https://img.shields.io/bundlephobia/min/codevora-ui?style=for-the-badge)

<p> High-performance theme based UI components. </p>


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
- ### Some presets for Background [Matrix, Waves, Cyberpunk, Glassmorphism, Matrix, Messy, Starfield]
- ### For more checkout [**CodeVora UI**] (https://codevora140.vercel.app/react-library/topics)
```bash
    import { Background } from 'codevora-ui';
    ...
    return(
        <Background preset='Matrix'>
            <div style={{minHeight: "100vh"}}>
                Hello
            </ div>
        </Background>
    );
```
## 📄 License
MIT © [Sujan Rai](https://github.com/Sujan-Rai-426/CodeVora-UI-Library/blob/main/LICENSE)


## Folder Structure [Demo]

```text
codevora-ui/
  ├── index.d.ts
  │
  ├── src/
  │     ├── index.js
  │     │
  │     ├── components/
  │     │       ├── core/
  │     │       │       ├── Background/
  │     │       │       │       ├── Background.jsx
  │     │       │       │       ├── Background.d.ts
  │     │       │       │       └── preset/
  |     |       |       |             ├── Matrix/
  |     |       |       |             |      ├── MatrixBackground.jsx
  │     │       │       │             |      └── MatrixBackground.module.css
  |     |       |       |             |
  |     |       |       |             ├── Waves/
  |     |       |       |             |      ├── WavesBackground.jsx
  |     |       |       |             |      └── WavesBackground.module.css
  |     |       |       |             |
  |     |       |       |             ├──Cyberpunk/
  |     |       |       |             ├──Messy/
  |     |       |       |             └── ..../
  │     │       │       ├── index.js
  │     │       │       └── index.d.ts
  │     │       │
  │     │       ├── environments/
  │     │       │       ├── HackerBackground/
  │     │       │       │       ├── HackerBackground.jsx
  │     │       │       │       ├── HackerBackground.css
  │     │       │       │       └── index.js
  │     │       │       ├── .../
  │     │       │       │   
  │     │       │       ├── index.js
  │     │       │       └── index.d.ts
  │     │       │
  │     │       └── index.js
```
