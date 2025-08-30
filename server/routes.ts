import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import QRCode from 'qrcode';

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

  // QR Code generation endpoint
  app.post('/api/generate-qr', async (req, res) => {
    try {
      const { url } = req.body;
      
      if (!url) {
        return res.status(400).json({ message: 'URL es requerida' });
      }

      // Generate QR code as data URL
      const qrCodeDataUrl = await QRCode.toDataURL(url, {
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        width: 256
      });

      return res.status(200).json({ 
        qrCode: qrCodeDataUrl,
        url: url 
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
      return res.status(500).json({ message: 'Error al generar código QR' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
