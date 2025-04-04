import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
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
