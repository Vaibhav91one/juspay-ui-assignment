# Juspay UI Assignment - SaaS Dashboard

<!-- Add project description here -->

## Features

<!-- List key features here -->
- Dark/Light Theme Toggle
- Responsive Design (Desktop, Tablet, Mobile)
- Advanced Data Table with Filtering, Sorting, and Pagination
- Real-time Search Functionality
- Interactive Charts and Visualizations
- Accessible UI Components
- Smooth Animations and Microinteractions

## Tech Stack

<!-- List technologies used -->
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **UI Components**: Radix UI (shadcn/ui)
- **Charts**: Recharts
- **Table**: TanStack Table (React Table)
- **Animations**: Framer Motion, Tailwind Animations
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, TypeScript

## Getting Started

### Prerequisites

<!-- List prerequisites -->
- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

<!-- Add installation steps -->
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd juspay-ui-assignment

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Project Structure

<!-- Describe project structure -->
```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Sidebar)
│   ├── ui/             # Base UI components (Button, Input, etc.)
│   ├── right-sidebar/  # Right sidebar components
│   └── svgs/           # SVG icon components
├── pages/              # Page components
│   ├── Home/           # Home page and its components
│   └── Orders/         # Orders page and its components
├── store/              # Redux store configuration
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── test/               # Test utilities and setup
└── types/              # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Testing

<!-- Describe testing approach -->
The project uses Vitest and React Testing Library for unit and integration tests.

```bash
# Run all tests
npm run test:run

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test
```

## Design Decisions & Challenges

<!-- Add your design decisions and challenges here -->
- **Component Architecture**: Modular component structure for reusability
- **State Management**: Redux Toolkit for global theme state
- **Responsive Design**: Mobile-first approach with breakpoint at 1224px
- **Accessibility**: ARIA attributes and keyboard navigation support
- **Performance**: Code splitting and vendor chunk optimization

### Challenges Faced

<!-- List challenges and how they were solved -->
- Challenge 1: [Describe challenge and solution]
- Challenge 2: [Describe challenge and solution]

## Deployment

<!-- Add deployment information -->
### Live Demo

<!-- Add your deployment link here -->
[View Live Demo](https://your-deployment-link.vercel.app)

### Deployment Platforms

The application can be deployed on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

<!-- Add deployment instructions if needed -->

## Browser Support

<!-- List supported browsers -->
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

<!-- List performance optimizations implemented -->
- Code splitting with manual chunks
- Vendor library separation
- Optimized bundle sizes
- Efficient re-rendering strategies

## Accessibility

<!-- Describe accessibility features -->
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML structure

## Contributing

<!-- Add contribution guidelines if applicable -->

## License

<!-- Add license information if applicable -->
