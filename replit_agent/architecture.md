# Architecture Overview

## 1. Overview

JOBDA is a full-stack web application that serves as a platform for multiple business services including NFLOW (psychological support with AI assistance), APPIA (AI application development), and other related services. The application follows a client-server architecture with a clear separation between frontend and backend components.

The system is built as a monorepo with the following key directories:
- `/client`: React-based frontend application
- `/server`: Express-based backend application
- `/shared`: Common code shared between frontend and backend

## 2. System Architecture

### 2.1 High-Level Architecture

The application follows a traditional client-server architecture with the following components:

```
┌────────────────┐       ┌─────────────────┐       ┌────────────────┐
│                │       │                 │       │                │
│  React Client  │<─────>│  Express Server │<─────>│  PostgreSQL DB │
│                │       │                 │       │                │
└────────────────┘       └─────────────────┘       └────────────────┘
```

- **Frontend**: React-based SPA (Single Page Application) with client-side routing
- **Backend**: Express.js server providing API endpoints and serving static assets
- **Database**: PostgreSQL database accessed via Drizzle ORM with serverless connections via NeonDB

### 2.2 Frontend Architecture

The frontend is built with React and follows a component-based architecture with the following key patterns:

- **Routing**: Uses Wouter for lightweight client-side routing
- **State Management**: Combines React Context API (for language preferences) and React Query for data fetching
- **UI Components**: Uses a component library based on Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom theme configuration

### 2.3 Backend Architecture

The backend uses Express.js and follows these architectural patterns:

- **API Layer**: RESTful API endpoints
- **Database Access**: Repository pattern via `storage.ts` that abstracts database operations
- **Middleware**: Express middleware for logging, error handling, and request processing
- **Server-Side Rendering**: Development-only Vite middleware for HMR (Hot Module Replacement)

### 2.4 Data Layer

- **ORM**: Drizzle ORM for type-safe database access
- **Database**: PostgreSQL hosted on NeonDB (serverless)
- **Schema Definition**: Type-safe schema definitions with Drizzle and Zod validation

## 3. Key Components

### 3.1 Frontend Components

#### Core Framework
- **React**: UI library for building component-based interfaces
- **Wouter**: Lightweight router for client-side navigation
- **React Query**: Data fetching and caching library

#### UI Components
- **Radix UI**: Accessible UI primitives
- **Shadcn UI**: Component library based on Radix UI with Tailwind styling
- **Framer Motion**: Animation library for UI interactions

#### State Management
- **Context API**: Used for language localization and theme settings
- **React Query**: Used for server state management

### 3.2 Backend Components

#### Web Server
- **Express**: Web framework for handling HTTP requests
- **HTTP Server**: Node.js HTTP server

#### Database Access
- **Drizzle ORM**: Type-safe ORM for database operations
- **NeonDB Serverless**: PostgreSQL database with serverless connectivity

#### API Features
- **REST Endpoints**: API routes for data access
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging middleware

### 3.3 Shared Components

- **Schema Definitions**: Shared between frontend and backend
- **Type Definitions**: TypeScript interfaces and types used across the application

## 4. Data Flow

### 4.1 Frontend to Backend

1. User interacts with the React application
2. React components trigger data fetching via React Query
3. React Query makes HTTP requests to the Express API endpoints
4. Express routes handle requests and return responses
5. React Query caches responses and updates the UI

### 4.2 Backend to Database

1. Express routes receive requests
2. Routes delegate to the storage layer (Repository pattern)
3. Storage layer uses Drizzle ORM to interact with the PostgreSQL database
4. Database results are transformed and returned to the client

### 4.3 Authentication Flow

Based on the code, the application may have a simple authentication system where:
1. Users register with username and password
2. Users login with credentials
3. Server validates credentials and may use sessions for maintaining authentication state

## 5. External Dependencies

### 5.1 Third-Party Services

- **NeonDB**: Serverless PostgreSQL database
- **Replit**: Deployment and development platform (based on configuration files)

### 5.2 Key Libraries

#### Frontend
- **Radix UI**: UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Query**: Data fetching and caching
- **Wouter**: Client-side routing

#### Backend
- **Express**: Web server framework
- **Drizzle ORM**: Database ORM
- **Neon Serverless**: PostgreSQL client
- **Zod**: Schema validation

## 6. Deployment Strategy

The application is configured for deployment on Replit with the following strategy:

### 6.1 Build Process
1. Frontend is built using Vite (`vite build`)
2. Backend is built using esbuild
3. Combined output is placed in the `/dist` directory

### 6.2 Runtime Configuration
- **Development**: Uses the development server with HMR
- **Production**: Serves static assets and API endpoints from the built distribution

### 6.3 Database Setup
- Drizzle migrations are used for database schema management
- Database connection is established via environment variables

### 6.4 Environment Variables
- `DATABASE_URL`: PostgreSQL connection string for the NeonDB instance
- `NODE_ENV`: Environment indicator (development/production)

## 7. Future Considerations

### 7.1 Scalability
The current architecture should support reasonable scale, with potential improvements:
- Implement caching layer for database queries
- Consider serverless functions for specific API endpoints

### 7.2 Security
Consider implementing:
- HTTPS enforcement
- CSRF protection
- Rate limiting for API endpoints
- Enhanced authentication with JWT or OAuth

### 7.3 Monitoring and Logging
Implement comprehensive logging and monitoring:
- Application performance monitoring
- Error tracking
- User analytics