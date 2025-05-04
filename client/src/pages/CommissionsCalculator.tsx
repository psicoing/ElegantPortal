import { useState, ChangeEvent } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calculator, ChevronUp, ChevronDown, PieChart, Coins, User, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function CommissionsCalculator() {
  const [salesAmount, setSalesAmount] = useState(1800);
  const [commissionRate, setCommissionRate] = useState(25);
  const [salesQuantity, setSalesQuantity] = useState(1);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("mes");
  const [showTaxDetails, setShowTaxDetails] = useState(false);

  const handleSalesAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setSalesAmount(value);
    }
  };

  const handleCommissionRateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setCommissionRate(value);
    }
  };

  const handleSalesQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setSalesQuantity(value);
    }
  };

  // Cálculos base
  const baseCommission = salesAmount * commissionRate / 100;
  const iva = baseCommission * 0.21;
  const irpf = baseCommission * 0.15;
  const netCommission = baseCommission + iva - irpf;
  const commissionAmount = netCommission * salesQuantity;
  
  // Multipliers for different periods
  const periodMultipliers = {
    "mes": 1,
    "trimestre": 3,
    "semestre": 6,
    "año": 12
  };
  
  // Calculate values for different periods
  const calculateForPeriod = (period: keyof typeof periodMultipliers) => {
    return commissionAmount * periodMultipliers[period];
  };

  return (
    <>
      <Helmet>
        <title>Calculadora de Comisiones para Colaboradores | JOBDA</title>
        <meta name="description" content="Calcula cuánto puedes ganar como colaborador de JOBDA con nuestra calculadora de comisiones interactiva" />
      </Helmet>
      
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-gray-700 hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Volver a inicio</span>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
              Calculadora de Comisiones
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Estima tus ganancias como colaborador de JOBDA según tus objetivos de ventas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <motion.div
              className="col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
                <Calculator className="h-5 w-5 mr-2 text-primary" />
                Ingresa tus valores
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="salesAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Importe promedio de cada venta (€)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="salesAmount"
                      value={salesAmount}
                      onChange={handleSalesAmountChange}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none text-gray-900"
                      min="0"
                      step="100"
                    />
                    <span className="ml-2 text-gray-500">€</span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="commissionRate" className="block text-sm font-medium text-gray-700 mb-1">
                    Porcentaje de comisión
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="commissionRate"
                      value={commissionRate}
                      onChange={handleCommissionRateChange}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none text-gray-900"
                      min="0"
                      max="100"
                      step="1"
                    />
                    <span className="ml-2 text-gray-500">%</span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="salesQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de ventas
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="salesQuantity"
                      value={salesQuantity}
                      onChange={handleSalesQuantityChange}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none text-gray-900"
                      min="0"
                      step="1"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-1">
                    Período de cálculo
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsPeriodOpen(!isPeriodOpen)}
                    className="w-full flex items-center justify-between rounded-md border border-gray-300 py-2 px-3 text-gray-900 focus:border-primary focus:ring focus:ring-primary/20 focus:outline-none bg-white"
                  >
                    <span className="capitalize">{selectedPeriod}</span>
                    {isPeriodOpen ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                  {isPeriodOpen && (
                    <div className="absolute top-full left-0 z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                      {Object.keys(periodMultipliers).map((period) => (
                        <button
                          key={period}
                          type="button"
                          onClick={() => {
                            setSelectedPeriod(period);
                            setIsPeriodOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 hover:bg-gray-100 capitalize ${
                            selectedPeriod === period ? "bg-gray-100" : ""
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Coins className="h-5 w-5 mr-2" />
                Tus ganancias
              </h2>
              
              <div className="text-center flex-grow flex flex-col justify-center">
                <p className="text-blue-100 mb-2">Por {selectedPeriod}</p>
                <div className="text-4xl md:text-5xl font-bold mb-4">
                  {calculateForPeriod(selectedPeriod as keyof typeof periodMultipliers).toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </div>
                <p className="text-blue-100 text-sm">
                  Basado en {salesQuantity} {salesQuantity === 1 ? 'venta' : 'ventas'} de {salesAmount.toLocaleString('es-ES')}€ cada una
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-500/30">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Base comisión:</span>
                  <span className="font-medium">
                    {baseCommission.toLocaleString('es-ES', {
                      style: 'currency',
                      currency: 'EUR'
                    })}
                  </span>
                </div>
                <button 
                  onClick={() => setShowTaxDetails(!showTaxDetails)}
                  className="w-full text-center text-xs text-blue-200 hover:text-white transition-colors mt-2 flex items-center justify-center"
                  aria-expanded={showTaxDetails}
                >
                  {showTaxDetails ? 'Ocultar detalles fiscales' : 'Ver detalles fiscales'} 
                  {showTaxDetails ? (
                    <ChevronUp className="h-3 w-3 ml-1" />
                  ) : (
                    <ChevronDown className="h-3 w-3 ml-1" />
                  )}
                </button>
                
                {showTaxDetails && (
                  <div className="mt-3 pt-3 border-t border-blue-500/30 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span>IVA (21%):</span>
                      <span>
                        +{iva.toLocaleString('es-ES', {
                          style: 'currency',
                          currency: 'EUR'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>IRPF (15%):</span>
                      <span>
                        -{irpf.toLocaleString('es-ES', {
                          style: 'currency',
                          currency: 'EUR'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-medium pt-2 border-t border-blue-500/30">
                      <span>Total a recibir:</span>
                      <span>
                        {netCommission.toLocaleString('es-ES', {
                          style: 'currency',
                          currency: 'EUR'
                        })}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-6 flex items-center text-gray-800">
              <PieChart className="h-5 w-5 mr-2 text-primary" />
              Proyección de ingresos por períodos
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Mensual</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {calculateForPeriod('mes').toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Trimestral</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {calculateForPeriod('trimestre').toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Semestral</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {calculateForPeriod('semestre').toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Anual</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {calculateForPeriod('año').toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Información fiscal importante
            </h2>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-4">
              <p className="text-amber-800 text-sm font-medium mb-2">Ten en cuenta que para trabajar como colaborador:</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Deberás estar dado de alta como autónomo o tener una sociedad.</li>
                <li>Las facturas deben incluir IVA (21%) y retención por IRPF (15%).</li>
                <li>Es responsabilidad del colaborador cumplir con sus obligaciones fiscales.</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2 text-sm">Documentos a presentar</h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                  <li>Modelo 303 (IVA) - Trimestral</li>
                  <li>Modelo 130 (IRPF) - Trimestral</li>
                  <li>Modelo 100 (Declaración renta) - Anual</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2 text-sm">Facturación</h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                  <li>Emitir factura con tus datos completos</li>
                  <li>Incluir concepto detallado del servicio</li>
                  <li>Especificar base, IVA e IRPF</li>
                  <li>Incluir información de pago</li>
                </ul>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 italic">
              Nota: Esta información es orientativa. Consulta con un asesor fiscal para obtener información específica según tu situación particular.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-blue-50 rounded-xl shadow-md p-6 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <User className="h-5 w-5 mr-2 text-primary" />
              ¿Interesado en trabajar con nosotros?
            </h2>
            
            <p className="text-gray-700 mb-4">
              Si estás interesado en formar parte de nuestro equipo de colaboradores y aprovechar este modelo de comisiones, contáctanos y te proporcionaremos toda la información necesaria.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:empordajobs@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contactar por email</span>
              </a>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-primary border border-primary rounded-md hover:bg-blue-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Volver a inicio</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}