# React Portfolio

A responsive, single-page React portfolio site featuring developer bio, project showcase, contact form with validation, and resume access. Built using Vite + React and deployed to Netlify.

---

## 🚀 Live Demo

- **Deployed App:** https://adorable-gnome-4ef06f.netlify.app  
- **GitHub Repo:** https://github.com/eholt19/React-Profile

---

## 📄 Resume

The resume is downloadable from the app under the **Resume** section.

Or [download it here](public/Emily_Holt_Resume_Styled.pdf).

---

## ✅ Features

- Fully responsive single-page application (SPA)
- Built with Vite and React Router
- Navigation includes:
  - About Me (with avatar + bio)
  - Portfolio (with project links + images)
  - Contact (with live validation)
  - Resume (with download + proficiencies)
- Contact form with real-time validation on blur:
  - Required field prompts
  - Email format validation
- Highlighted navigation based on active section
- Reusable React components:
  - Header
  - Navigation
  - Footer
  - Project card

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- HTML/CSS
- React Router
- Custom styling + accessibility

---

## 🧪 Getting Started Locally

1. Clone the repo

```bash
git clone https://github.com/eholt19/React-Profile.git
cd React-Profile
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Visit in browser:  
http://localhost:3000

---

## 💡 User Story

AS AN employer looking for candidates with experience building single-page applications  
I WANT to view a potential employee's deployed React portfolio of work samples  
SO THAT I can assess whether they're a good candidate for an open position

---

## ✅ Acceptance Criteria

- App includes Header, Navigation, main content, and Footer
- Navigation includes About Me, Portfolio, Contact, Resume
- Active section is highlighted
- About Me section includes image + bio
- Portfolio section displays six projects with:
  - Titles
  - Screenshots
  - Links to deployed sites + GitHub
- Contact form includes required field validation and email format checking
- Resume section has:
  - Downloadable PDF
  - Proficiency list
- Footer includes links to GitHub, LinkedIn, and another profile (e.g. Stack Overflow)

---

## 📦 Deployment

This app is deployed using [Netlify](https://www.netlify.com/).  
To build for production:

```bash
npm run build
```

Publish the `/dist` directory via Netlify’s drag-and-drop or Git-linked deployment.  
For configuration help: [Vite + Netlify Docs](https://vitejs.dev/guide/static-deploy.html#netlify)

---

## 👩‍💻 Author

**Emily Holt**  
GitHub: [@eholt19](https://github.com/eholt19)

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).
