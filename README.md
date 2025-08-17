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

## 🤖 ChatGPT Integration

The project includes an AI-powered chat feature that allows visitors to ask questions about your experience and background.

### Setup

#### Option 1: Backend Proxy (Recommended - Secure)

1. **Setup the backend proxy:**
   ```bash
   cd server
   ./setup.sh
   ```

2. **Configure your API key:**
   - Edit `server/.env` file
   - Add your OpenAI API key: `OPENAI_API_KEY=your_api_key_here`

3. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```

4. **Configure the frontend:**
   - Add `VITE_BACKEND_URL=http://localhost:3001` to your `.env` file

#### Option 2: Direct API (Less Secure - Legacy)

1. **Get an OpenAI API Key**: Visit [OpenAI Platform](https://platform.openai.com/api-keys) to create an API key
2. **Configure Environment Variable**: Create a `.env` file in the project root with:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```
3. **Restart Development Server**: The chat will automatically use the real ChatGPT API once configured

### Features

- **Header Chat Button**: "Ask AI" button appears in the header next to the PDF link
- **Context-Aware Responses**: The AI is trained on your specific background and experience
- **Secure Backend Proxy**: API key never leaves the server (Option 1)
- **Rate Limiting**: Prevents abuse and controls costs
- **Fallback Mode**: Works without API key (simulated responses)
- **Print-Friendly**: Chat interface is hidden when printing
- **Dark Mode Support**: Adapts to your site's theme

### Security

The backend proxy provides several security benefits:
- 🔒 API key is never exposed to the client
- 🚦 Rate limiting prevents abuse
- 🌍 CORS protection
- 🛡️ Input validation and error handling

### Customization

The AI context is defined in `server/server.js` (Option 1) or `src/services/chatgpt.ts` (Option 2). You can modify the system prompt to provide different information about your background.

---

Feel free to open a pull request if you'd like to improve or expand any part of this project!
