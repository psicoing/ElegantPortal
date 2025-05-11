import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for deployment
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
  });
  
  // API health check at root for deployment
  app.get('/', (req, res, next) => {
    // Si la solicitud viene con cabecera 'Accept: application/json', responder con health check
    if (req.headers.accept?.includes('application/json')) {
      return res.status(200).json({ status: 'ok', message: 'Server is running' });
    }
    // De lo contrario, continuar con la siguiente ruta que servirá el HTML
    next();
  });
  
  // Simple API endpoint for contact form (optional)
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
    
    // In a real application, this would save to a database or send an email
    console.log(`Contact form submission: ${name}, ${email}, ${message}`);
    
    return res.status(200).json({ message: 'Mensaje recibido correctamente' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
