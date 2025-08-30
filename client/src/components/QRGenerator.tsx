import { useState, useEffect } from 'react';
import { QrCode, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export function QRGenerator() {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateQR = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-qr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: 'https://jobda.org' }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate QR code');
      }

      const data = await response.json();
      setQrCodeDataUrl(data.qrCode);
      
      toast({
        title: "QR generado exitosamente",
        description: "Código QR para JOBDA.org creado correctamente",
      });
    } catch (error) {
      console.error('Error generating QR:', error);
      toast({
        title: "Error al generar QR",
        description: "No se pudo crear el código QR. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQR = () => {
    if (!qrCodeDataUrl) return;

    const link = document.createElement('a');
    link.href = qrCodeDataUrl;
    link.download = 'jobda-org-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "QR descargado",
      description: "El código QR se ha guardado como jobda-org-qr.png",
    });
  };

  const shareQR = async () => {
    if (!qrCodeDataUrl) return;

    try {
      // Convert data URL to blob
      const response = await fetch(qrCodeDataUrl);
      const blob = await response.blob();
      
      if (navigator.share && navigator.canShare({ files: [new File([blob], 'jobda-qr.png', { type: 'image/png' })] })) {
        await navigator.share({
          title: 'Código QR - JOBDA.org',
          text: 'Escanea este código QR para visitar JOBDA.org',
          files: [new File([blob], 'jobda-qr.png', { type: 'image/png' })]
        });
      } else {
        // Fallback: copy to clipboard if available
        if (navigator.clipboard && window.ClipboardItem) {
          await navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob
            })
          ]);
          toast({
            title: "QR copiado",
            description: "El código QR se ha copiado al portapapeles",
          });
        } else {
          // Final fallback: just show a message
          toast({
            title: "Compartir no disponible",
            description: "Utiliza el botón de descarga para guardar el QR",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error('Error sharing QR:', error);
      toast({
        title: "Error al compartir",
        description: "No se pudo compartir el código QR",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Auto-generate QR on component mount
    generateQR();
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <QrCode className="h-6 w-6 text-primary" />
          Código QR JOBDA
        </CardTitle>
        <Badge variant="outline" className="mx-auto">
          jobda.org
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* QR Code Display */}
        <div className="flex justify-center">
          {isGenerating ? (
            <div className="flex items-center justify-center w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                <p className="text-gray-500">Generando QR...</p>
              </div>
            </div>
          ) : qrCodeDataUrl ? (
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={qrCodeDataUrl} 
                alt="QR Code para JOBDA.org" 
                className="w-64 h-64"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">No hay QR generado</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            onClick={generateQR} 
            disabled={isGenerating}
            className="flex-1"
            variant="outline"
          >
            <QrCode className="w-4 h-4 mr-2" />
            {isGenerating ? 'Generando...' : 'Regenerar QR'}
          </Button>
          
          {qrCodeDataUrl && (
            <>
              <Button 
                onClick={downloadQR}
                className="flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar
              </Button>
              
              <Button 
                onClick={shareQR}
                variant="outline"
                className="flex-1"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </>
          )}
        </div>

        {/* Instructions */}
        <div className="text-center text-sm text-gray-600 space-y-2">
          <p>
            <strong>¿Cómo usar el QR?</strong>
          </p>
          <p>
            Escanea este código con la cámara de tu móvil para acceder directamente a <strong>jobda.org</strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}