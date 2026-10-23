# Tanmay Salokhe — Data Analyst Portfolio

A clean, responsive personal portfolio website showcasing my skills, projects, education and contact details as an aspiring **Data Analyst**.

🔗 **Live site:** https://tanmaysalokhe.github.io/portfolio/ *(available after enabling GitHub Pages — see below)*

---

## ✨ Features

- **Responsive design** — works on desktop, tablet and mobile
- **Light / dark mode** toggle that remembers your choice
- **Animated hero** with typing effect and a mini "dashboard" card
- **Scroll reveal animations** and animated stat counters
- **Downloadable resume** (PDF) button
- **Active-section highlighting** in the navbar + back-to-top button
- Respects `prefers-reduced-motion` for accessibility
- Pure **HTML, CSS and vanilla JavaScript** — no frameworks, no build step

## 🗂️ Sections

| Section | Content |
|---|---|
| Home | Introduction, role, resume download, social links |
| About | Short bio and quick stats |
| Skills | Technical, analytics and soft skills |
| Projects | Business Performance Dashboard, Customer Purchase Behaviour Analysis |
| Education | B.Tech in Data Science Engineering, certification, achievements |
| Contact | Email, phone, LinkedIn |

## 🛠️ Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- JavaScript (ES6, IntersectionObserver)
- Google Fonts — Inter & JetBrains Mono

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main page
├── css/
│   └── style.css              # All styles + light/dark theme
├── js/
│   └── script.js              # Theme toggle, menu, animations
├── assets/
│   ├── favicon.svg            # Site icon
│   └── Tanmay_Salokhe_Resume.pdf
├── .nojekyll                  # Tells GitHub Pages to serve files as-is
├── .gitignore
├── LICENSE
└── README.md
```

## 🚀 Run Locally

No installation needed.

1. Clone the repository
   ```bash
   git clone https://github.com/tanmaysalokhe/portfolio.git
   cd portfolio
   ```
2. Open `index.html` in your browser — or, for a local server:
   ```bash
   python -m http.server 8000
   ```
   then visit `http://localhost:8000`.

## 🌐 Deploy on GitHub Pages

1. Create a new **public** repository on GitHub named `portfolio`.
2. Upload these files (or push them):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio website"
   git branch -M main
   git remote add origin https://github.com/tanmaysalokhe/portfolio.git
   git push -u origin main
   ```
3. On GitHub go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. After a minute or two the site will be live at
   `https://tanmaysalokhe.github.io/portfolio/`

> 💡 Tip: name the repository `tanmaysalokhe.github.io` instead and the site will be served at `https://tanmaysalokhe.github.io/`.

## ✏️ Customising

- **Text & projects:** edit `index.html` (each project is an `<article class="project">` block — copy one to add more).
- **Colours:** change the variables at the top of `css/style.css` (`--accent`, `--accent-2`, etc.).
- **Resume:** replace `assets/Tanmay_Salokhe_Resume.pdf` with the latest version (keep the same file name).
- **Typing roles:** edit the `roles` array in `js/script.js`.

## 📬 Contact

- **Email:** tanmaysalokhe7@gmail.com
- **LinkedIn:** [linkedin.com/in/tanmay-salokhe-601b46359](https://www.linkedin.com/in/tanmay-salokhe-601b46359)
- **GitHub:** [github.com/tanmaysalokhe](https://github.com/tanmaysalokhe)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
