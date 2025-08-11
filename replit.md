# JOBDA - Multi-Service Platform

## Overview
JOBDA is a comprehensive full-stack web application designed as a multi-service platform. Its purpose is to offer diverse business solutions, including psychological support with AI assistance (NFLOW), AI application development (APPIA), and other professional services. The project envisions significant market potential by consolidating various business-to-business and business-to-consumer services under a single, integrated platform, aiming to transform digital futures.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Context API (global state) and React Query (server state)
- **UI Framework**: Custom component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom themes and CSS variables
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Features**: Multi-language support (Spanish, Catalan, English), theme system (light/dark mode), interactive service cards, modal-based contact system, PWA capabilities.
- **UI/UX Decisions**: Focus on a clean, professional aesthetic with interactive elements. Custom app icon with brain/neural network design. Integration of branding elements like the JOBDA logo and "Plataforma Multiservicios" subtitle. Elegant notification system for language selection. Premium design for pricing sections with gradients and animated icons.

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database Access**: Drizzle ORM
- **API Pattern**: RESTful API endpoints with middleware for logging and error handling
- **Features**: Health check endpoints, contact form submission handling, static asset serving, comprehensive error handling.

### Database
- **Database**: PostgreSQL via Neon serverless connections
- **ORM**: Drizzle ORM for type-safe operations
- **Schema**: Shared schema definitions between frontend and backend
- **Migrations**: Drizzle Kit

### Shared Components & Design Patterns
- **Type Safety**: Shared TypeScript types and Zod validation across frontend and backend.
- **Data Flow**: Client requests to Express backend, processing with middleware, Drizzle ORM for database operations, structured JSON responses, and React Query for client-side state management.
- **Development**: Hot Module Replacement (HMR) for frontend, `tsx` for backend execution, local/cloud PostgreSQL, debugging tools.

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Components**: Radix UI primitives
- **Validation**: Zod
- **Animations**: Framer Motion

### Development Dependencies
- **Build Tools**: Vite, ESBuild
- **Type Checking**: TypeScript compiler

## Recent Changes

### January 28, 2025
- Added 5 new European labor market services expanding JOBDA ecosystem: Red Profesional Paneuropea (networking across EU countries), Ofertas y Publicación de Empleo UE (job aggregation from 27 EU countries), Movilidad Laboral en la UE (international relocation resources), Tendencias y Comunidades Sectoriales (hashtag-based professional communities), and Inteligencia del Mercado Laboral Europeo (real-time labor market analytics dashboard). Each service features detailed modals with KPIs, target users, benefits, and professional contact integration
- Updated European services with custom LINKEURO branding: replaced generic icons with custom LINKEURO SVG logo based on provided image, featuring green globe with white grid lines and "LINKEURO European Network" text. Added "Acceder a LINKEURO" button in all 5 service modals linking directly to https://ejobs.jobda.es/linkeuro for immediate access to the platform