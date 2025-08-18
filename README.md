# Jonathan Ruiz Portfolio

A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS. Features include an interactive CV, AI-powered chat interface, and professional presentation of work experience.

## 🚀 Features

- **Modern Tech Stack**: Vue 3 + TypeScript + Vite + Tailwind CSS
- **AI Integration**: ChatGPT-powered chat interface for portfolio queries
- **Responsive Design**: Mobile-first approach with print optimization
- **Interactive Charts**: Visual representation of skills and experience
- **State Management**: Pinia store for centralized data management
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized builds with code splitting

## 🏗️ Architecture

```
src/
├── components/          # Vue components
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components
│   └── features/       # Feature-specific components
├── composables/        # Vue composables
├── stores/            # Pinia stores
├── services/          # API services
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
├── constants/         # Application constants
├── data/              # Static data
└── assets/            # Static assets
```

## 🛠️ Tech Stack

- **Frontend**: Vue 3, TypeScript, Vite
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Charts**: Chart.js + Vue-ChartJS
- **Icons**: Heroicons
- **AI**: OpenAI GPT-3.5-turbo (via backend proxy)
- **Backend**: Node.js + Express.js
- **Deployment**: Nginx + PM2

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm 9+

### Frontend Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd work-curriculum
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

### Backend Setup (Optional)

The AI chat feature requires a backend proxy for security. See [Backend Setup](#backend-setup) for details.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Frontend
VITE_BACKEND_URL=https://your-domain.com

# Backend (server/.env)
OPENAI_API_KEY=your-openai-api-key
PORT=3001
NODE_ENV=production
```

### ChatGPT Integration

Two options for ChatGPT integration:

#### Option 1: Backend Proxy (Recommended)
- Secure API key handling
- Rate limiting
- Better error handling
- See [Backend Setup](#backend-setup)

#### Option 2: Client-side (Development only)
- Direct API calls from frontend
- API key exposed in client code
- Not recommended for production

## 🚀 Deployment

### Frontend Deployment

```bash
# Build for production
npm run build

# Deploy using provided script
./deploy.sh user@server /path/to/web/root
```

### Backend Deployment

```bash
# Deploy backend
./server/deploy.sh user@server /path/to/backend
```

## 📁 Project Structure

### Components

- **UI Components**: Reusable components like buttons, modals, charts
- **Layout Components**: Page structure and navigation
- **Feature Components**: Specific features like ChatGPT integration

### Data Management

- **Stores**: Pinia stores for state management
- **Services**: API communication and external services
- **Data**: Static portfolio data and configuration

### Utilities

- **Date Utils**: Date formatting and calculations
- **Validation**: Input validation and sanitization
- **Constants**: Application-wide constants

## 🎨 Customization

### Adding Work Experience

Edit `src/data/portfolio.ts`:

```typescript
export const workExperiences: ExperienceType[] = [
  {
    id: 'unique-id',
    title: 'Job Title',
    role: ['Role1', 'Role2'],
    company: 'Company Name',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    achievements: ['Achievement 1', 'Achievement 2'],
    tasks: ['Task 1', 'Task 2'],
    skills: [
      { label: 'Skill Name', value: 90 }
    ],
    industry: 'technology'
  }
]
```

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: `src/assets/styles/main.css`
- **Component Styles**: Scoped styles in Vue components

### Themes

Modify `src/constants/index.ts` for theme customization:

```typescript
export const THEME_COLORS = {
  PRIMARY: '#3B82F6',
  SECONDARY: '#64748B',
  // ... more colors
}
```

## 🔍 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # TypeScript type checking
npm run lint         # ESLint linting
npm run format       # Prettier formatting
npm run test         # Run tests
```

### Code Quality

- **ESLint**: Code linting with Vue 3 and TypeScript rules
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Vue 3**: Composition API and script setup

### Testing

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui
```

## 🔒 Security

### API Key Security

- **Backend Proxy**: API keys stored securely on server
- **Rate Limiting**: Prevents abuse
- **CORS**: Configured for production domains
- **Environment Variables**: Secure configuration management

### Best Practices

- Never commit API keys to version control
- Use HTTPS in production
- Implement proper error handling
- Validate all user inputs

## 📊 Performance

### Optimization Features

- **Code Splitting**: Automatic vendor chunk separation
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Optimized asset loading
- **Caching**: API response caching
- **Lazy Loading**: Component lazy loading

### Build Optimization

- **Vite**: Fast build tool
- **TypeScript**: Compile-time optimizations
- **Tailwind**: Purge unused CSS
- **Source Maps**: Development debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Email**: contact@jonathanruiz.co.uk
- **Issues**: Create an issue on GitHub
- **Documentation**: Check the inline code comments

## 🔄 Changelog

### v1.0.0
- Initial release
- Vue 3 + TypeScript implementation
- ChatGPT integration
- Responsive design
- Print optimization
