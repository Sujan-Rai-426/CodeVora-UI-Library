# Contributing to CodeVora UI

First of all, thank you for taking the time to contribute ❤️  
CodeVora UI is an open-source React UI library, and every contribution helps make it better.

---

## 📌 Ways to Contribute

You can contribute in many ways:

- 🐛 Fix bugs
- ✨ Add new UI components
- 🎨 Improve styles or animations
- 📚 Improve documentation
- ⚡ Improve performance or code quality
- 🧪 Add tests or examples

---

## 🧰 Tech Stack

- React (JSX)
- JavaScript (ES6+)
- CSS (no external UI frameworks)
- Bundled for ESM + CJS

---

## 📂 Project Structure (Important)

Before contributing, please understand the structure:

- `components/core` → Reusable UI components using presets
- `components/environments` → Complete themed environments (no preset usage)

Please **do not mix these two concepts**.

---

## 🚀 Getting Started

### 1️⃣ Fork the Repository
Click the **Fork** button on GitHub and clone your fork:

```bash
    git clone https://github.com/your-username/codevora-ui.git
    cd codevora-ui
```

### 2️⃣ Install Dependencies
```bash
    npm install
```

### 3️⃣ Run Locally
```bash
    npm run dev
```

##  🧱 Adding a New Component

### Core Component (Preset-based)
**Location:**
    src/components/core/
**Expected structure:**
```text
    ComponentType/
        ├── preset/
        |       ├── ComponentName/
        |       ├──...      ├── ComponentName.jsx
        |                   └── ComponentName.module.css
        ├── ComponentType.d.ts
        └── ComponentType.jsx
    
    example:- 
        ComponentType = Background,
        preset = Wave,
        ComponentName = WaveBackground,
        For file formate you can check any one folder from component/core   
```

### Environment Component (Full Theme)
**Location:**
    src/components/environments/
**Expected Structure**
```text
    ComponentName/
        |    ├── ComponentName.jsx
        |    ├── ComponentName.module.css
        |    └── ComponentName.d.ts
        |
        ├── index.d.ts
        └── index.js
```

##   📝 Coding Guidelines
-   Use functional components only
-   Keep components clean and reusable
-   Avoid unnecessary dependencies
-   Use clear and meaningful names
-   Follow existing project patterns
-   Export components via index.js

##   ✅ Commit Message Format
**Use clear commit messages:**
-   feat: add HackerBackground component
-   fix: button hover animation bug
-   docs: update README usage section
-   refactor: simplify background animation logic


##   🔁 Pull Request Process

### Create a new branch:
```bash
    git checkout -b feature/your-feature-name
```

### Make your changes and commit

### Push your fork:
```bash
    git push origin feature/your-feature-name
```

### Open a Pull Request to the main branch

### Clearly describe:
-   What you changed
-   Why it was needed
-   Screenshots or demos (if UI-related)

##  ❌ What Not to Do 
-   ❌ Do not break existing exports
-   ❌ Do not commit node_modules
-   ❌ Do not add heavy libraries
-   ❌ Do not change version numbers in PRs

#  ❤️ Code of Conduct
### Be kind, respectful, and inclusive.
### Harassment or abusive behavior will not be tolerated.
 