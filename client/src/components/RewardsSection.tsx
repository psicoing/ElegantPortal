import { motion } from "framer-motion";
import { Gift, Car, Home, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

interface RewardItem {
  icon: React.ReactNode;
  users: string;
  reward: string;
  color: string;
}

export function RewardsSection() {
  const { t } = useLanguage();
  
  const rewards: RewardItem[] = [
    {
      icon: <Gift className="h-8 w-8 text-blue-500" />,
      users: "15.000",
      reward: t('rewards.iphones'),
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: <Car className="h-8 w-8 text-green-500" />,
      users: "30.000",
      reward: t('rewards.tesla'),
      color: "from-green-50 to-green-100"
    },
    {
      icon: <Home className="h-8 w-8 text-orange-500" />,
      users: "150.000",
      reward: t('rewards.house1'),
      color: "from-orange-50 to-orange-100"
    },
    {
      icon: <Home className="h-8 w-8 text-teal-500" />,
      users: "300.000",
      reward: t('rewards.house2'),
      color: "from-teal-50 to-teal-100"
    }
  ];

  return (
    <section id="rewards" className="py-16 relative overflow-hidden">
      {/* Globo flotante */}
      <motion.div 
        className="absolute right-8 md:right-16 top-8 cursor-pointer"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-4 rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-lg">
          <Award className="h-8 w-8 md:h-10 md:w-10" />
        </div>
        <div className="h-10 w-0.5 bg-gray-300 absolute -bottom-10 left-1/2 transform -translate-x-1/2"></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('rewards.title')}
          </h2>
          <p className="text-gray-600 mb-2">
            {t('rewards.subtitle')}
          </p>
          <p className="text-gray-700 font-medium mb-6">
            {t('rewards.milestones')}
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 font-sans font-semibold text-center py-2 px-6 shadow-md transition transform hover:-translate-y-1"
          >
            {t('rewards.discover')}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {rewards.map((reward, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-b ${reward.color} rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-2 shadow-sm mr-3">
                  {reward.icon}
                </div>
                <span className="font-bold text-xl text-gray-900">{reward.users}</span>
              </div>
              <p className="font-medium text-gray-800">{reward.reward}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>{t('rewards.footer')}</p>
        </motion.div>
      </div>
    </section>
  );
}