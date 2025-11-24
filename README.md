# Gorkha Brewery - Bottle Recycling Champion

A professional and beautiful web application for the Gorkha Brewery Bottle Recycling Champion program, featuring leaderboards, statistics, prizes, and bilingual support (English/Nepali).

## Features

- 🎨 Modern, professional UI design
- 🌐 Bilingual support (English/Nepali) with easy language switching
- 📊 Real-time leaderboard display
- 📈 Statistics dashboard
- 🏆 Prize information and rewards
- 📱 Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Header with title and logos
│   ├── RulesSection.tsx # Rules and guidelines
│   ├── Leaderboard.tsx  # Leaderboard display
│   ├── Statistics.tsx  # Statistics section
│   ├── Prizes.tsx      # Prizes information
│   ├── Footer.tsx      # Footer component
│   └── LanguageSwitcher.tsx # Language toggle
├── i18n/               # Internationalization
│   ├── config.ts       # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── ne.json     # Nepali translations
├── App.tsx             # Main app component
├── App.css             # App styles
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **react-i18next** - Internationalization
- **CSS3** - Styling with custom properties

## Language Support

The application supports two languages:
- English (EN)
- Nepali (ने)

Users can switch languages using the language switcher in the top-right corner.

## License

© Copyright 2025 Gorkha Brewery. All Rights Reserved

