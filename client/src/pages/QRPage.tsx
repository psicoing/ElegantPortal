import { QRGenerator } from '../components/QRGenerator';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function QRPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Generador de Código QR
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Genera un código QR para acceder rápidamente a JOBDA.org desde dispositivos móviles
            </p>
          </div>
        </div>

        {/* QR Generator */}
        <div className="flex justify-center">
          <QRGenerator />
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900">Genera</h3>
              <p className="text-gray-600 text-sm">
                Haz clic en "Generar QR" para crear tu código personalizado
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900">Descarga</h3>
              <p className="text-gray-600 text-sm">
                Guarda el código QR en tu dispositivo o compártelo
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900">Escanea</h3>
              <p className="text-gray-600 text-sm">
                Usa la cámara de cualquier móvil para acceder a JOBDA.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}