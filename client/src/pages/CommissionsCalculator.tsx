import React from "react";
import { Helmet } from "react-helmet";
import { Calculator, ArrowLeft, FileText, BarChart3, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function CommissionsCalculator() {
  return (
    <>
      <Helmet>
        <title>Calculadora de Comisiones | JOBDA</title>
        <meta name="description" content="Detalles sobre el sistema de comisiones para colaboradores y cálculo de beneficios" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                Sistema de Comisiones
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Información detallada sobre el cálculo de comisiones para colaboradores independientes
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-12">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Ejemplo de Cálculo: Venta de 1.800€</h2>
                
                <div className="space-y-8">
                  {/* Desglose básico */}
                  <div className="rounded-lg bg-blue-50 p-5 border border-blue-100">
                    <h3 className="font-semibold text-lg mb-4 text-gray-800">
                      Datos básicos de la operación
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center pb-2 border-b border-blue-100">
                        <span className="text-gray-700">Venta al cliente (con IVA):</span>
                        <span className="font-semibold text-gray-900">1.800 €</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-blue-100">
                        <span className="text-gray-700">Comisión del comercial (20%):</span>
                        <span className="font-semibold text-gray-900">360 €</span>
                      </li>
                    </ul>
                  </div>

                  {/* Factura del comercial */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-gray-800 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-blue-500" />
                      Factura del comercial (lo que recibe)
                    </h3>
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Concepto
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Importe
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              Base imponible
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                              360,00 €
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              IVA (21%)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 text-right font-medium">
                              +75,60 €
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              IRPF (15%)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-right font-medium">
                              -54,00 €
                            </td>
                          </tr>
                          <tr className="bg-blue-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">
                              Total a recibir
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 text-right font-bold">
                              381,60 €
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Desglose para la empresa */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-gray-800 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
                      Desglose para la empresa
                    </h3>
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Concepto
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Importe
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              IVA repercutido (cliente)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                              312,40 €
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              IVA soportado (comercial)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                              75,60 €
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              IVA neto a pagar
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                              236,80 €
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              IRPF retenido del comercial
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                              54,00 €
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                              Base sin IVA (cliente)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                              1.487,60 €
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              Comisión comercial (base)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-right font-medium">
                              -360,00 €
                            </td>
                          </tr>
                          <tr className="bg-blue-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">
                              Beneficio bruto
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 text-right font-bold">
                              1.127,60 €
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notas importantes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-500 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Notas importantes</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-yellow-200 text-yellow-800 text-xs font-bold flex items-center justify-center mr-2 mt-1">1</span>
                      <span>El contrato mercantil debe especificar claramente la comisión del 20% sobre el valor de venta (con IVA) y la independencia del comercial para evitar problemas con Hacienda (falso autónomo).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-yellow-200 text-yellow-800 text-xs font-bold flex items-center justify-center mr-2 mt-1">2</span>
                      <span>La factura del comercial debe incluir todos los datos fiscales obligatorios: NIF, nombre completo, dirección, base imponible, IVA e IRPF.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-yellow-200 text-yellow-800 text-xs font-bold flex items-center justify-center mr-2 mt-1">3</span>
                      <span>Los pagos a comerciales se realizan una vez que el cliente ha liquidado el importe correspondiente y siempre mediante transferencia bancaria para mantener la trazabilidad.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cálculo para múltiples ventas */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-12">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Cálculo para múltiples ventas</h2>
                <p className="text-gray-600 mb-6">
                  Para calcular la comisión total por múltiples ventas, simplemente multiplica el número de ventas por la comisión unitaria.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Número de ventas
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Comisión total (con IVA - IRPF)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          1 venta
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 text-right font-medium">
                          381,60 €
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          5 ventas
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 text-right font-medium">
                          1.908,00 €
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          10 ventas
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 text-right font-medium">
                          3.816,00 €
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          20 ventas
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 text-right font-medium">
                          7.632,00 €
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Botón de contacto */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                ¿Interesado en formar parte de nuestro equipo o tienes dudas sobre el sistema de comisiones?
              </p>
              <Link href="/#contact">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Contacta con nosotros
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}