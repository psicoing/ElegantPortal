import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { Globe, TrendingUp, LineChart, BarChart3, Users, CheckCircle2, ArrowUpCircle, BarChart, Briefcase, PieChart, Shield, Database } from "lucide-react";
import { useState } from "react";
import ContactInfoModal from "@/components/ContactInfoModal";

export function InvestorsPage() {
  const { t } = useLanguage();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{t('nav.investors')} | JOBDA</title>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('investors.portal.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                {t('investors.portal.subtitle')}
              </p>
              <div className="inline-block bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full">
                EmpordaJobs SL | B02701100
              </div>
            </motion.div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-50 to-transparent"></div>
        </section>
        
        {/* Company overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Briefcase className="text-blue-600" />
                  {t('investors.portal.company_overview')}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {t('investors.portal.corporate_structure')}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{t('investors.portal.legal_name')}:</strong> EmpordaJobs SL
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{t('investors.portal.tax_id')}:</strong> B02701100
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{t('investors.portal.shares')}:</strong> 3,000 {t('investors.portal.total_shares')}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{t('investors.portal.founding_year')}:</strong> 2021
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {t('investors.portal.financial_overview')}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <LineChart className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{t('investors.portal.apps_valuation')}:</strong> €490,000
                          <div className="text-sm text-gray-600">
                            (7 {t('investors.portal.high_performance_apps')} × €70,000)
                          </div>
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <PieChart className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{t('investors.portal.current_investment_round')}:</strong> {t('investors.portal.series_a')}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>{t('investors.portal.projected_growth')}:</strong> {t('investors.portal.high_growth_potential')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* App Portfolio */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('investors.portal.app_portfolio')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('investors.portal.portfolio_description')}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* NFLOW App */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">NFLOW</h3>
                  <p className="text-blue-100">{t('investors.portal.nflow_subtitle')}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <BarChart3 className="h-4 w-4 text-blue-500" />
                        {t('investors.portal.valuation')}
                      </h4>
                      <p className="text-gray-700">€70,000</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-blue-500" />
                        {t('investors.portal.scalability')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.nflow_scalability')}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <Users className="h-4 w-4 text-blue-500" />
                        {t('investors.portal.target_market')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.nflow_market')}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <ArrowUpCircle className="h-4 w-4 text-blue-500" />
                        {t('investors.portal.growth_potential')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.nflow_growth')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* EJOBS App */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">EJOBS</h3>
                  <p className="text-amber-100">{t('investors.portal.ejobs_subtitle')}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <BarChart3 className="h-4 w-4 text-amber-500" />
                        {t('investors.portal.valuation')}
                      </h4>
                      <p className="text-gray-700">€70,000</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-amber-500" />
                        {t('investors.portal.scalability')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.ejobs_scalability')}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <Users className="h-4 w-4 text-amber-500" />
                        {t('investors.portal.target_market')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.ejobs_market')}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <ArrowUpCircle className="h-4 w-4 text-amber-500" />
                        {t('investors.portal.growth_potential')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.ejobs_growth')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* SALUDALIA App */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">SALUDALIA</h3>
                  <p className="text-green-100">{t('investors.portal.saludalia_subtitle')}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <BarChart3 className="h-4 w-4 text-green-500" />
                        {t('investors.portal.valuation')}
                      </h4>
                      <p className="text-gray-700">€70,000</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        {t('investors.portal.scalability')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.saludalia_scalability')}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <Users className="h-4 w-4 text-green-500" />
                        {t('investors.portal.target_market')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.saludalia_market')}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                        <ArrowUpCircle className="h-4 w-4 text-green-500" />
                        {t('investors.portal.growth_potential')}
                      </h4>
                      <p className="text-gray-700">{t('investors.portal.saludalia_growth')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Other apps in simpler format */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('investors.portal.additional_apps')}
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { name: 'SINAPSY', value: '€70,000', color: 'bg-purple-100 text-purple-800' },
                    { name: 'APPIA', value: '€70,000', color: 'bg-blue-100 text-blue-800' },
                    { name: 'NEURONMEG', value: '€70,000', color: 'bg-indigo-100 text-indigo-800' },
                    { name: 'JOBDA', value: '€70,000', color: 'bg-cyan-100 text-cyan-800' },
                  ].map((app, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${app.color}`}>
                        {app.name}
                      </div>
                      <p className="text-lg font-semibold">{app.value}</p>
                      <p className="text-gray-600 text-sm">{t('investors.portal.valuation')}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Investment Opportunities */}
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('investors.portal.investment_opportunities')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('investors.portal.opportunities_description')}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* SAFE Option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-8 translate-y-2">
                  {t('investors.most_popular')}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="text-blue-600" />
                    SAFE ({t('investors.private_contract')})
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('investors.portal.safe_description')}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {t('investors.no_notary')}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {t('investors.min_shares_safe')}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {t('investors.min_amount_safe')}
                      </span>
                    </li>
                  </ul>
                  
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    {t('investors.portal.contact_for_info')}
                  </button>
                </div>
              </motion.div>
              
              {/* Notarial Option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md border border-indigo-100 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Database className="text-indigo-600" />
                    {t('investors.notarial')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('investors.portal.notarial_description')}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {t('investors.full_rights')}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {t('investors.min_shares_notarial')}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>
                        {t('investors.min_amount_notarial')}
                      </span>
                    </li>
                  </ul>
                  
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="block w-full text-center border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    {t('investors.portal.contact_for_info')}
                  </button>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-blue-50 border border-blue-100 rounded-lg p-6 mt-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('investors.portal.investor_resources')}
                  </h3>
                  <p className="text-gray-600">
                    {t('investors.portal.resources_description')}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
                  >
                    {t('investors.portal.request_dossier')}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}