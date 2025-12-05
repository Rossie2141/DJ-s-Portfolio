# Overview

This is a full-stack web application built with React and Express, featuring a Netflix-inspired portfolio website for a data science professional. The application showcases projects, skills, education, and professional background through an interactive, visually appealing interface. The tech stack includes React with TypeScript on the frontend, Express.js for the backend, PostgreSQL with Drizzle ORM for data persistence, and shadcn/ui components styled with Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Single-page application (SPA) architecture using `wouter` for client-side routing
- Component structure organized in `client/src/components/` with reusable UI primitives

**Styling & UI Components**
- Tailwind CSS for utility-first styling with custom design tokens
- shadcn/ui component library (New York style) providing accessible, composable UI primitives built on Radix UI
- Custom CSS variables for theming (dark theme with Netflix-inspired color palette)
- Responsive design with mobile-first approach

**State Management**
- TanStack Query (React Query) for server state management, caching, and data fetching
- React hooks for local component state
- Form state managed via React Hook Form with Zod validation

**Component Organization**
- Page components in `client/src/pages/` (Home, NotFound)
- Feature components in `client/src/components/` (HeroSection, ProjectsSection, SkillsSection, etc.)
- Reusable UI primitives in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`

## Backend Architecture

**Server Framework**
- Express.js with TypeScript for API routes and middleware
- ESM module system for modern JavaScript compatibility
- HTTP server creation via Node's native `http` module

**Development vs Production**
- Development: Vite middleware integrated for hot module replacement
- Production: Static file serving from `dist/public` directory
- Logging middleware for API request/response tracking

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as the default data store
- Interface-based storage design (`IStorage`) allowing easy swapping to database-backed implementations
- User CRUD operations with UUID-based identifiers

**API Structure**
- Routes defined in `server/routes.ts` with `/api` prefix convention
- JSON request/response format with proper error handling
- Raw body capture for webhook/payment processing compatibility

## Data Layer

**Database Configuration**
- PostgreSQL as the target database (via Neon serverless driver)
- Drizzle ORM for type-safe database queries and schema management
- Schema-first approach with TypeScript type inference
- Migration files generated in `./migrations` directory

**Schema Design**
- User entity with id (UUID), username (unique), and password fields
- Zod schemas for runtime validation of insert operations
- Type exports for compile-time safety throughout the application

**Data Access Pattern**
- Storage interface abstraction separating business logic from data implementation
- Currently using in-memory storage, designed to swap to Drizzle-based implementation
- Async/await patterns for all data operations

## External Dependencies

**Core Framework Dependencies**
- `@neondatabase/serverless`: Serverless PostgreSQL driver for edge/serverless environments
- `drizzle-orm`: TypeScript ORM with excellent type inference
- `drizzle-kit`: CLI tool for schema management and migrations
- `express`: Web application framework for Node.js

**Frontend Libraries**
- `react` & `react-dom`: UI framework
- `@tanstack/react-query`: Server state management and caching
- `wouter`: Lightweight routing library
- `react-hook-form` & `@hookform/resolvers`: Form handling and validation
- `zod`: Schema validation for forms and API requests

**UI Component Libraries**
- `@radix-ui/*`: Headless, accessible component primitives (accordion, dialog, dropdown, toast, etc.)
- `lucide-react`: Icon library
- `react-icons`: Additional icon sets (specifically for brand icons like Python, R)
- `embla-carousel-react`: Carousel/slider functionality

**Styling & Design**
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority`: Utility for managing component variants
- `clsx` & `tailwind-merge`: Conditional class name utilities

**Development Tools**
- `vite`: Build tool and dev server
- `@vitejs/plugin-react`: React fast refresh support
- `@replit/vite-plugin-*`: Replit-specific development enhancements
- `typescript` & `tsx`: TypeScript runtime and type checking
- `esbuild`: Fast JavaScript bundler for production builds

**Database & Validation**
- `connect-pg-simple`: PostgreSQL session store (for future session management)
- `drizzle-zod`: Bridge between Drizzle schemas and Zod validation

**Utility Libraries**
- `date-fns`: Date manipulation and formatting
- `nanoid`: Unique ID generation
- `cmdk`: Command palette functionality