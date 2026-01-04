# Juspay UI Assignment - SaaS Dashboard

## Features

- Dark/Light Theme Toggle
- Responsive Design (Desktop, Tablet, Mobile)
- Advanced Data Table with Filtering, Sorting, and Pagination
- Real-time Search Functionality
- Interactive Charts and Visualizations
- Accessible UI Components
- Smooth Animations and Microinteractions

## Tech Stack

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

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

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

* **Component Distribution:** I have distributed pages and sections into small components for better readability and following the Single Responsibility Principle. For example, this avatar icon is being used in more than 3 places. So, I have created a single component and am using it everywhere. This will help when I need to change the avatar icon in some way.
* **SVG Components:** I have created separate SVG components for all SVGs. I have used a tool for optimizing and formatting the SVGs and then creating a React component from it.
* **State Management:** I have used Redux Toolkit for global theme state management. The use case is very small, but it basically subscribes to theme changes, applies/removes the dark class on the HTML tag, and prevents flash of wrong theme on load.
* **Performance:** I have also implemented code splitting and vendor chunk optimization as chunks were getting a little bit big. Route-based code splitting using React.lazy() and Suspense ensures that pages are loaded on-demand, reducing the initial bundle size.

### Challenges Faced

- **Challenge 1:** The first challenge I faced was getting the layout right. So, from my perspective, the layout is divided into 4 parts: the left sidebar, the right sidebar, the app header, and lastly the main content. So, setting up those 4 parts was the first step in completing this assignment. And in order to be precise with the text, font, coloring, and spacing, I have used the same specs as the Figma design.
- **Challenge 2:** The second challenge I faced was the home page analytics. The UI library (Shadcn) which I am using has some really good basic analytic components. So, after importing the basic ones and adjusting them to the design was a little time-taking. In some places like in the revenue by location components, first I straight used the SVG from the Figma design, but that was affecting the performance of the web page. So, I created a separate SVG and added dots absolutely on top of it. Same for the Total Sales pie chart. That pie chart was not present in the UI library I am using, so I had to create that from scratch.

Other than these I enjoyed working on the project.

### Live Demo

[Walkthrough](https://drive.google.com/file/d/1wIQ0cuiyoBoK4kTGuZsWU3fN4rTGY-Tf/view?usp=sharing)

[View Live Demo](https://juspay-ui-assignment-nine.vercel.app/)

## Performance Optimizations

- Route-based code splitting using React.lazy() and Suspense for on-demand page loading
- Manual chunk splitting for vendor libraries
- Vendor library separation (React, Recharts, TanStack Table, Radix UI, etc.)
- Optimized bundle sizes
- Efficient re-rendering strategies
- **Lighthouse Performance Score: 100**

## Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML structure
