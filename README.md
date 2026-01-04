# Juspay UI Assignment - SaaS Dashboard

### Live Demo

[Walkthrough](https://drive.google.com/file/d/1wIQ0cuiyoBoK4kTGuZsWU3fN4rTGY-Tf/view?usp=sharing)

[View Live Demo](https://juspay-ui-assignment-nine.vercel.app/)

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

* **Component Distribution:**
  - Distributed pages and sections into small components for better readability
  - Followed the Single Responsibility Principle
  - Created reusable components (e.g., avatar icon used in 3+ places)
  - Centralized component changes for easier maintenance

* **SVG Components:**
  - Created separate SVG components for all SVGs
  - Used tools for optimizing and formatting SVGs
  - Converted optimized SVGs into React components

* **State Management:**
  - Used Redux Toolkit for global theme state management
  - Subscribes to theme changes
  - Applies/removes dark class on HTML tag
  - Prevents flash of wrong theme on load

* **Performance:**
  - Implemented code splitting and vendor chunk optimization
  - Route-based code splitting using React.lazy() and Suspense
  - Pages loaded on-demand, reducing initial bundle size

### Challenges Faced

- **Challenge 1: Layout Setup**
  - Getting the layout structure right was the first challenge
  - Layout divided into 4 main parts:
    - Left sidebar
    - Right sidebar
    - App header
    - Main content
  - Setting up these 4 parts was crucial for the assignment
  - Used exact Figma design specs for:
    - Text styling
    - Font specifications
    - Color schemes
    - Spacing and layout

- **Challenge 2: Home Page Analytics**
  - Working with Shadcn UI library's basic analytic components
  - Importing and adjusting components to match design was time-consuming
  - Revenue by location component:
    - Initially used SVG directly from Figma design
    - Performance issues arose
    - Solution: Created separate SVG and added dots absolutely positioned on top
  - Total Sales pie chart:
    - Not available in the UI library
    - Created custom pie chart component from scratch

Other than these I enjoyed working on the project.


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
