import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  initials: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  color: "primary" | "secondary" | "accent";
}

export function TestimonialCard({ 
  initials, 
  name, 
  role, 
  comment, 
  rating, 
  color 
}: TestimonialCardProps) {
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-100',
          text: 'text-secondary-600'
        };
      case 'accent':
        return {
          bg: 'bg-accent/20',
          text: 'text-accent'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary'
        };
    }
  };

  const colors = getColorClass();

  const stars = Array.from({ length: rating }, (_, i) => (
    <Star key={i} className={`h-5 w-5 ${colors.text} fill-current`} />
  ));

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className={`h-10 w-10 rounded-full ${colors.bg} flex items-center justify-center mr-3`}>
              <span className={`${colors.text} font-semibold`}>{initials}</span>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{comment}</p>
          <div className="mt-4 flex">
            {stars}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
