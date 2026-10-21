# Chetan Thakur — Developer Portfolio Website

A modern, high-performance, dark-mode developer portfolio website designed for **Chetan Thakur**, focused on software engineering, full-stack web development, and applied AI/ML engineering roles.

Built with **React**, **Vite**, and **Vanilla CSS** featuring glassmorphic accents, custom code sandbox tabs, responsive layouts, and zero fabricated credentials.

---

## 🚀 Live Preview & Quick Start

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v22 recommended)
- **npm**: v9.0.0 or higher

### 2. Local Installation

```bash
# Clone or navigate to the project directory
cd My-Portfolio

# Install all project dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 3. Build for Production

```bash
npm run build
```

This compiles optimized, minified production assets into the `dist/` directory.

---

## 🛠️ Technology Stack

| Layer | Technologies & Tools |
| :--- | :--- |
| **Frontend Framework** | React 19, Vite 8 |
| **Styling & Design System** | Vanilla CSS3 (Custom Design Tokens, Flexbox, CSS Grid, Glassmorphism, Micro-Interactions) |
| **Icons & Visuals** | Lucide Icons (`lucide-react`) & Custom Inline SVGs |
| **Typography** | Inter (Body), Outfit (Headings), JetBrains Mono (Code) via Google Fonts |
| **Version Control & Hosting** | Git, GitHub, Vercel / Netlify |

---

## 📂 Project Structure

```text
My-Portfolio/
├── public/
│   └── favicon.svg               # Custom <CT/> branded vector favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky header with active scroll spy & mobile drawer
│   │   ├── Navbar.css
│   │   ├── Hero.jsx              # Hero headline, bio, pills, interactive code terminal
│   │   ├── Hero.css
│   │   ├── About.jsx             # Professional narrative, core pillars, profile details
│   │   ├── About.css
│   │   ├── Skills.jsx            # Categorized technical competencies with status tags
│   │   ├── Skills.css
│   │   ├── Projects.jsx          # 3 verified GitHub project cards with custom CSS graphics
│   │   ├── Projects.css
│   │   ├── Experience.jsx        # Discreet editable career template (no fake data)
│   │   ├── Experience.css
│   │   ├── Education.jsx         # Academic background & coursework with placeholders
│   │   ├── Education.css
│   │   ├── Certifications.jsx   # Neutral placeholder adhering to transparent hiring
│   │   ├── Certifications.css
│   │   ├── Contact.jsx           # Honest mailto dispatcher & 1-click clipboard copy
│   │   ├── Contact.css
│   │   ├── Footer.jsx            # Dynamic copyright, navigation shortcuts, back-to-top
│   │   ├── Footer.css
│   │   └── SocialIcons.jsx       # Custom SVG components for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.js      # Centralized, thoroughly commented configuration file
│   ├── App.jsx                   # Main layout container assembling all sections
│   ├── App.css
│   ├── index.css                 # Global design system, tokens, reset & accessibility
│   └── main.jsx                  # React application entry point
├── index.html                    # SEO meta tags, OpenGraph data, Google Fonts preconnect
├── package.json
└── vite.config.js
```

---

## ✏️ Customization Guide

All personal details, editable placeholders, and project cards can be configured in a single file:
👉 **`src/data/portfolioData.js`**

### 1. Update Contact Information
```javascript
export const personalInfo = {
  name: "Chetan Thakur",
  role: "Full-Stack Developer",
  email: "your.real.email@gmail.com", // <-- Update your email address
  linkedin: "https://linkedin.com/in/your-real-profile", // <-- Update your LinkedIn URL
  location: "Your City, Country", // <-- Update location
};
```

### 2. Update Experience
When you achieve new career milestones, update `experienceData`:
```javascript
export const experienceData = {
  isConfigured: true, // <-- Change from false to true to show real history
  templates: [
    {
      role: "Full-Stack Developer",
      company: "Company Name",
      period: "Jan 2024 – Present",
      location: "City, Country",
      responsibilities: [
        "Built responsive web applications...",
        "Engineered RESTful APIs..."
      ],
      achievements: [
        "Shipped core feature improving performance by 25%..."
      ]
    }
  ]
};
```

### 3. Update Education & Coursework
Update `educationData` in `src/data/portfolioData.js`:
```javascript
export const educationData = {
  isConfigured: true, // <-- Change to true
  templates: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University / College Name",
      graduationYear: "2024",
      location: "City, Country",
      coursework: ["Data Structures", "Algorithms", "Web Development", "AI/ML"]
    }
  ]
};
```

### 4. Add Certifications
Update `certificationsData` in `src/data/portfolioData.js`:
```javascript
export const certificationsData = {
  isConfigured: true, // <-- Change to true to display verified credentials
  templates: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      issueDate: "2024",
      credentialLink: "https://..."
    }
  ]
};
```

---

## 🌐 Deploying to Vercel or Netlify

### Option A: Deploy to Vercel (Recommended)
1. Push your repository to GitHub: `https://github.com/chetannit/my-portfolio`.
2. Visit [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select `my-portfolio`.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your website will be live with a free SSL certificate.

### Option B: Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/) and click **"Add new site" > "Import an existing project"**.
2. Select your GitHub repository.
3. Set build configuration:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Deploy site"**.

---

## ✅ Quality & Verification Checklist

- [x] **Dark Modern Aesthetics**: Charcoal and subtle navy tones with electric cyan & indigo accents.
- [x] **No Fabricated History**: Clear editable placeholders for unprovided employment, education, and credentials.
- [x] **Verified Project 1**: AI Customer Support Bot pointing to `https://github.com/chetannit/AI-customer-Bot`.
- [x] **Verified Project 2**: Sports Celebrity Image Classifier pointing to `https://github.com/chetannit/Image-Classifier`.
- [x] **Verified Project 3**: SplitMint pointing to `https://github.com/chetannit/Splitmint`.
- [x] **Responsive Mobile Menu**: Smooth sliding drawer with keyboard Escape and backdrop dismiss.
- [x] **Accessible Navigation**: Color contrast compliance, `:focus-visible` styling, reduced-motion media query support.
- [x] **Production Build**: Verified with `npm run build` (zero errors, builds in <1s).
