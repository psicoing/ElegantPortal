import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Download, Send, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

interface Service {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  priceType: 'monthly' | 'yearly' | 'one-time' | 'custom';
  description: string;
  features: string[];
  multipliers?: {
    [key: string]: number;
  };
}

interface QuoteItem {
  service: Service;
  quantity: number;
  duration?: number;
  customOptions: string[];
  subtotal: number;
}

const services: Service[] = [
  {
    id: 'nflow',
    name: 'NFLOW',
    category: 'Bienestar Digital',
    basePrice: 2.99,
    priceType: 'monthly',
    description: 'Apoyo psicológico mediante IA con profesionales cualificados',
    features: [
      'Asistente virtual 24/7',
      'Conexión con psicólogos certificados',
      'Respaldo científico',
      'Prueba gratuita 7 días'
    ],
    multipliers: {
      'usuarios_1_10': 1,
      'usuarios_11_50': 0.9,
      'usuarios_51_100': 0.8,
      'usuarios_100+': 0.7
    }
  },
  {
    id: 'empordajobs',
    name: 'EmpordaJobs',
    category: 'Recursos Humanos',
    basePrice: 1200,
    priceType: 'one-time',
    description: 'Gestión completa del proceso de selección por oferta de trabajo',
    features: [
      'Análisis con IA integrada',
      'Gestión total de candidatos',
      'Evaluación de competencias',
      'Sistema de recomendaciones'
    ],
    multipliers: {
      'ofertas_1_5': 1,
      'ofertas_6_10': 0.9,
      'ofertas_11_20': 0.8,
      'ofertas_20+': 0.75
    }
  },
  {
    id: 'appia_desarrollo',
    name: 'APPIA - Desarrollo',
    category: 'Desarrollo Tecnológico',
    basePrice: 9000,
    priceType: 'one-time',
    description: 'Desarrollo de aplicaciones web y móviles con IA',
    features: [
      'Aplicación web completa',
      'Aplicación móvil (iOS/Android)',
      'Integración con IA',
      'Diseño UX/UI profesional'
    ],
    multipliers: {
      'basica': 0.67, // 6000€
      'estandar': 1,   // 9000€
      'premium': 1.33  // 12000€
    }
  },
  {
    id: 'appia_mantenimiento',
    name: 'APPIA - Mantenimiento',
    category: 'Desarrollo Tecnológico',
    basePrice: 1700,
    priceType: 'yearly',
    description: 'Infraestructura, hosting y soporte técnico anual',
    features: [
      'Hosting y BBDD',
      'Tokens de IA',
      'Soporte técnico',
      'Actualizaciones de seguridad'
    ],
    multipliers: {
      'basico': 0.7,   // 1200€
      'estandar': 1,   // 1700€
      'premium': 1.18  // 2000€
    }
  },
  {
    id: 'saludalia',
    name: 'SALUDALIA',
    category: 'Salud Digital',
    basePrice: 0,
    priceType: 'custom',
    description: 'Plataforma que conecta pacientes con profesionales de salud',
    features: [
      'Primeros 100 perfiles gratuitos',
      'Conexión paciente-profesional',
      'Gestión de citas',
      'Especialidades médicas'
    ]
  },
  {
    id: 'jobda',
    name: 'JOBDA',
    category: 'Bolsa de Talento',
    basePrice: 0,
    priceType: 'custom',
    description: 'Bolsa de valores para talento humano con IA',
    features: [
      'Coeficientes en tiempo real',
      'Validación PROM con IA',
      'Estados dinámicos',
      'Dashboard profesional'
    ]
  }
];

export function DynamicQuoteSystem() {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<QuoteItem[]>([]);
  const [currentService, setCurrentService] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [duration, setDuration] = useState<number>(12);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const [showQuote, setShowQuote] = useState<boolean>(false);

  const calculatePrice = (service: Service, qty: number, dur?: number, options: string[] = []) => {
    let price = service.basePrice;
    
    // Apply multipliers based on options
    if (service.multipliers && options.length > 0) {
      const option = options[0]; // Use first option for pricing
      if (service.multipliers[option]) {
        price *= service.multipliers[option];
      }
    }

    // Apply quantity and duration
    let finalPrice = price * qty;
    if (service.priceType === 'monthly' && dur) {
      finalPrice *= dur;
    } else if (service.priceType === 'yearly' && dur) {
      finalPrice *= Math.ceil(dur / 12);
    }

    return Math.round(finalPrice * 100) / 100;
  };

  const addService = () => {
    const service = services.find(s => s.id === currentService);
    if (!service) return;

    const subtotal = calculatePrice(service, quantity, duration, selectedOptions);
    const newItem: QuoteItem = {
      service,
      quantity,
      duration: service.priceType === 'monthly' || service.priceType === 'yearly' ? duration : undefined,
      customOptions: [...selectedOptions],
      subtotal
    };

    setSelectedServices([...selectedServices, newItem]);
    setCurrentService('');
    setQuantity(1);
    setDuration(12);
    setSelectedOptions([]);
  };

  const removeService = (index: number) => {
    setSelectedServices(selectedServices.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const newTotal = selectedServices.reduce((sum, item) => sum + item.subtotal, 0);
    setTotal(newTotal);
  }, [selectedServices]);

  const generateQuote = () => {
    setShowQuote(true);
  };

  const downloadQuote = () => {
    // Generate PDF functionality would go here
    console.log('Downloading quote...');
  };

  const sendQuote = () => {
    // Email functionality would go here
    console.log('Sending quote to:', contactEmail);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Cotizador Inteligente
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcula el presupuesto personalizado para tus servicios digitales en tiempo real
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Service Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                Configurar Servicios
              </CardTitle>
              <CardDescription>
                Selecciona y personaliza los servicios que necesitas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Service Selector */}
              <div className="space-y-2">
                <Label htmlFor="service">Servicio</Label>
                <Select value={currentService} onValueChange={setCurrentService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        <div className="flex flex-col">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-sm text-muted-foreground">{service.category}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Service Details */}
              {currentService && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 border-l-4 border-primary pl-4"
                >
                  {(() => {
                    const service = services.find(s => s.id === currentService);
                    if (!service) return null;

                    return (
                      <>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        
                        {/* Quantity */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="quantity">
                              {service.priceType === 'monthly' ? 'Usuarios' : 'Cantidad'}
                            </Label>
                            <Input
                              id="quantity"
                              type="number"
                              min="1"
                              value={quantity}
                              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                            />
                          </div>

                          {/* Duration for recurring services */}
                          {(service.priceType === 'monthly' || service.priceType === 'yearly') && (
                            <div>
                              <Label htmlFor="duration">
                                {service.priceType === 'monthly' ? 'Meses' : 'Años'}
                              </Label>
                              <Input
                                id="duration"
                                type="number"
                                min="1"
                                value={duration}
                                onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                              />
                            </div>
                          )}
                        </div>

                        {/* Options based on multipliers */}
                        {service.multipliers && (
                          <div>
                            <Label>Opciones</Label>
                            <div className="space-y-2 mt-2">
                              {Object.keys(service.multipliers).map((option) => (
                                <div key={option} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={option}
                                    checked={selectedOptions.includes(option)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedOptions([option]); // Only one option at a time
                                      } else {
                                        setSelectedOptions([]);
                                      }
                                    }}
                                  />
                                  <Label htmlFor={option} className="text-sm">
                                    {option.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Real-time price preview */}
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Precio estimado:</span>
                            <span className="text-lg font-bold text-primary">
                              {service.basePrice === 0 ? 'Consultar' : 
                               `${calculatePrice(service, quantity, duration, selectedOptions)}€`}
                              {service.priceType === 'monthly' && '/mes'}
                              {service.priceType === 'yearly' && '/año'}
                            </span>
                          </div>
                        </div>

                        <Button onClick={addService} className="w-full">
                          Añadir al Presupuesto
                        </Button>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Quote Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Resumen del Presupuesto
              </CardTitle>
              <CardDescription>
                Servicios seleccionados y total estimado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Selected Services List */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                <AnimatePresence>
                  {selectedServices.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex justify-between items-start p-3 bg-background rounded-lg border"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{item.service.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {item.service.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.quantity} {item.service.priceType === 'monthly' ? 'usuarios' : 'unidades'}
                          {item.duration && ` × ${item.duration} ${item.service.priceType === 'monthly' ? 'meses' : 'años'}`}
                        </p>
                        {item.customOptions.length > 0 && (
                          <p className="text-xs text-muted-foreground">
                            Opciones: {item.customOptions.join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">
                          {item.subtotal > 0 ? `${item.subtotal}€` : 'Consultar'}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeService(index)}
                          className="text-red-600 hover:text-red-700 mt-1"
                        >
                          Eliminar
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {selectedServices.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Calculator className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Selecciona servicios para generar tu presupuesto</p>
                </div>
              )}

              {selectedServices.length > 0 && (
                <>
                  <Separator />
                  
                  {/* Total */}
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Estimado:</span>
                      <span className="text-primary">
                        {total > 0 ? `${total}€` : 'Consultar precios'}
                      </span>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="company">Empresa (opcional)</Label>
                      <Input
                        id="company"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email de contacto</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <Button onClick={generateQuote} className="w-full">
                      Generar Presupuesto
                    </Button>
                    
                    {showQuote && contactEmail && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-2"
                      >
                        <Button variant="outline" onClick={downloadQuote} className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Descargar PDF
                        </Button>
                        <Button variant="outline" onClick={sendQuote} className="flex-1">
                          <Send className="w-4 h-4 mr-2" />
                          Enviar por Email
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}