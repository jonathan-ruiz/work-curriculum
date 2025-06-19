# Project Kickoff

This project generates a printable, interactive curriculum using Vue 3 + TypeScript. It computes visual summaries from experience data, such as skill usage, industry presence, and roles over time.

## 🧰 Requirements

- Node.js (v18+ recommended)  
- NVM (optional, but recommended for version management)  
- SSH access with public key to deploy (optional for deployment)

## 📦 Install Dependencies

```bash
npm install
```

## 🚀 Development Server

Launch the dev server:

```bash
npm run dev
```

## 🏗️ Production Build

Generate a production build:

```bash
npm run build
```

> ⚠️ Note: There was a typo in the original command: `buld` ➜ `build`.

## 🚚 Deploy via SSH

You can deploy the built files to a remote server via SSH.

> This requires your public SSH key to be installed on the destination server.

```bash
./deploy.sh [user]@domain.com /path/on/remote/server
```

## 🗂️ Project Structure

Key folders:

- `src/assets/fonts` — Embedded fonts  
- `src/assets/images` — Curriculum-related visuals  
- `src/components/Charts` — Pie, Radar, TopBar charts  
- `src/components/Curriculum` — Printable CV views and icons  
- `src/model.ts` — Main curriculum data model with experience, skills, industry, and role computation  
- `src/types.ts` — Type definitions for experiences and skills  
- `deploy.sh` — Custom SSH deployment script  
- `tailwind.config.js` — Color palette used for skill heatmaps

## 🧠 Curriculum Generation Logic

The file `model.ts` defines:

- `workExperiences[]` — A list of job entries with roles, skills, and impact  
- `skillsFromExperience[]` — Aggregated skill scores based on time spent using each  
- `rolesFromExperience[]` — Time-weighted role summaries  
- `industriesFromExperience[]` — Time-weighted industry focus

These aggregates power dynamic chart visualizations.

---

Feel free to open a pull request if you'd like to improve or expand any part of this project!
