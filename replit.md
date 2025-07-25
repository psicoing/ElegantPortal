# JOBDA - Multi-Service Platform

## Overview

JOBDA is a comprehensive full-stack web application that serves as a multi-service platform offering various business solutions including NFLOW (psychological support with AI assistance), APPIA (AI application development), and other professional services. The application is built using React for the frontend and Express.js for the backend, with PostgreSQL as the database solution.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Context API for language preferences and React Query for server state management
- **UI Framework**: Custom component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration and CSS variables
- **Build Tool**: Vite for fast development and optimized builds
- **Animation**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript for type safety
- **Database Access**: Drizzle ORM with PostgreSQL via Neon serverless connections
- **API Pattern**: RESTful API endpoints with middleware for logging and error handling
- **Development**: Hot Module Replacement (HMR) via Vite middleware

### Database Architecture
- **Database**: PostgreSQL with Neon serverless connections
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between frontend and backend
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Multi-language Support**: Internationalization with Spanish, Catalan, and English
- **Theme System**: Light/dark mode with system preference detection
- **Service Cards**: Interactive service presentation with dialogs and animations
- **Contact System**: Modal-based contact forms and information display
- **PWA Features**: Progressive Web App capabilities for mobile installation

### Backend Services
- **Health Checks**: Deployment-ready health check endpoints
- **Contact API**: Form submission handling for user inquiries
- **Static Serving**: Development-time static asset serving with Vite integration
- **Error Handling**: Comprehensive error middleware with structured responses

### Shared Components
- **Schema Definitions**: User management schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Database Models**: Drizzle ORM models for consistent data access

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Server Processing**: Express middleware handles logging, validation, and routing
3. **Database Operations**: Drizzle ORM executes type-safe database queries
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: React Query caches and synchronizes server state

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Components**: Radix UI primitives for accessible components
- **Validation**: Zod for runtime type checking and validation
- **Animations**: Framer Motion for smooth user interactions

### Development Dependencies
- **Build Tools**: Vite, ESBuild for fast builds and development
- **Type Checking**: TypeScript compiler for static analysis
- **Linting**: Built-in TypeScript checking for code quality

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Asset Optimization**: Static assets are processed and optimized

### Production Environment
- **Platform**: Replit autoscale deployment
- **Port Configuration**: Internal port 5000 mapped to external port 80
- **Environment Variables**: Database URL and other secrets via environment
- **Process Management**: Node.js production mode with optimized settings

### Development Environment
- **Hot Reload**: Vite HMR for frontend changes
- **Auto Restart**: tsx for backend TypeScript execution
- **Database**: Local or cloud PostgreSQL instance
- **Debugging**: Source maps and development tools enabled

## Changelog

Changelog:
- June 14, 2025. Initial setup
- June 14, 2025. Created comprehensive "Conoce el Proyecto" page for INS NEURONMEG with detailed project information, building structure, professional team details, and Portbou location significance
- June 14, 2025. Added detailed professional staff requirements card with complete staffing template for 30-bed residence, including scientific-clinical, medical, residential, R&D and management areas (55-65 professionals total)
- June 14, 2025. Created elegant custom app icon with brain/neural network design and PWA configuration for iPhone/Android installation. App successfully installed and tested on iPhone
- June 18, 2025. Added professional Replit recognition badge in bottom-left corner with "Desarrollado en Replit" text and official logo, positioned to avoid conflicts with WhatsApp button and without external links to maintain traffic on company site
- June 18, 2025. Prominently featured JOBDA as the main corporate brand throughout the platform - added large JOBDA branding in hero section and header navigation with "Plataforma Multiservicios" subtitle to establish clear matrix company identity
- June 18, 2025. Simplified hero section by removing descriptive text about company history and capabilities, keeping only essential JOBDA branding and "Transformamos el Futuro Digital" message for cleaner, more direct presentation
- June 18, 2025. Added compact brand origin section explaining JOBDA evolution: 2016 autonomous start → 2020 EMPORDAJOBS company formation → 2025 JOBDA matrix brand, with visual breakdown of how "JOB" + "DA" (from EmporDA) created the JOBDA name
- June 20, 2025. Moved Replit badge from bottom-left corner to header integration below "Plataforma Multiservicios" to prevent overlap with WhatsApp button, changed text from "Desarrollado en" to "Powered by" for international appeal
- June 23, 2025. Fixed TALENTPOOL dialog by removing duplicate button and maintaining single "Acceder a TALENTPOOL" button that connects directly to https://talentpool.com.es/
- June 23, 2025. Divided TALENTPOOL into 5 vertical sector-specific service cards: Tech (technology professionals), Med (healthcare), Build (construction), Marketing (digital marketing), and Finance (financial professionals), each with specific icons, features and color schemes matching the rest of the platform's service card format
- June 23, 2025. Applied "Anti-edadismo" red badge to all 5 TALENTPOOL service cards to emphasize the anti-ageism commitment across all talent sectors
- June 29, 2025. Updated investor section values: SAFE contracts from €4,000 (minimum 1 share), Notarial from €5,000 (minimum 3 shares) - applied across all languages
- June 29, 2025. Enhanced investor page with contact modal replacing direct email links, updated contact email to jobda@jobda.es, added "Volver" navigation button to return to homepage, implemented multilingual contact information modal
- June 29, 2025. Fixed "Volver" button implementation on philanthropy page (/filantropia) with simplified HTML button structure, white background, shadow and border for better visibility, positioned directly after header
- June 30, 2025. Added comprehensive Partners page (/partners) accessible from mobile hamburger menu featuring anti-ageism commitment, partner program details, commission structure (40% of all plans), investment policy requiring €8,000-€10,000 commitment, professional profiles, and complete information about Saludalia partner collaboration program
- January 3, 2025. Updated "Trabaja con nosotros" modal to reflect new employment model: fixed labor contracts with guaranteed SMI (Salario Mínimo Interprofesional) plus 20% commission supplements, eliminating freelance/autonomous worker references, including Social Security benefits and labor protections
- January 3, 2025. Added flexibility clause to employment terms: possibility of starting with part-time hours, evolving to full-time based on performance evaluation, while maintaining 20% commission rate regardless of working hours
- January 13, 2025. Replaced Google Translate widget with custom LanguageSelector component due to development environment limitations. New selector supports 11 languages (Spanish, Catalan, English, French, German, Italian, Portuguese, Russian, Chinese, Japanese, Arabic) with elegant notification system that opens Google Translate in new tab for full page translation
- January 13, 2025. Implemented NFLOW-style Google Translate system: replaced problematic external widgets with educational modal that teaches users to activate Google Translate natively in their browser. Provides instructions for desktop (Chrome/Edge) and mobile devices, ensuring 100+ language support without CORS issues or performance problems
- January 13, 2025. Enhanced multilingual support with automatic language detection in translation modal - supports Spanish, English, and French with fallback to Spanish. All content (titles, instructions, tips) adapts to user's browser language preference
- January 14, 2025. Added Google Search Console verification meta tag (google-site-verification) for SEO optimization and search engine indexing
- January 14, 2025. Added additional Google Search Console verification meta tags for multiple property configurations and enhanced SEO management
- January 14, 2025. Created comprehensive "Nosotros" section in mobile menu featuring detailed professional profile of Ramón Molons de San Román (Colegiado Nº 7851), including academic credentials (UAB Psychology, UOC Telecommunications, UB Biomathematics), 30+ years experience, current projects (NFLOW, NEURON MEG, Tickets Plusalud), and complete contact information to enhance service credibility
- January 21, 2025. Added "Servicios" button to main hero section alongside "Filantropía" and "Inversores" buttons. Created comprehensive ServicesModal component showcasing all 11 Grupo JOBDA services (APPIA, NFLOW, SINAPSY, NEURONMEG, EJOBS, SALUDALIA, TICKETS PLUSALUD, TECNOAPP, TELECOS, C++, TALENTPOOL) with detailed descriptions, icons, and professional presentation in an elegant modal interface
- January 21, 2025. Completely redesigned Partners page (/partners) with new "Política de Partners" content featuring 2,500€ annual licensing model for autonomous professionals. Updated content includes commercial exploitation license details, benefits breakdown, and automatic renewal conditions based on performance results
- January 21, 2025. Simplified Partners page content by removing professional profiles section and "integrating into daily work" text, keeping only the core partner definition for autonomous professionals without exclusive dedication
- January 21, 2025. Enhanced Partners page pricing section with premium design: larger gradient header with centered Euro icon, improved benefits grid layout with individual gradient cards, animated benefit icons, and added bottom CTA section for better visual hierarchy and user engagement

## User Preferences

Preferred communication style: Simple, everyday language.