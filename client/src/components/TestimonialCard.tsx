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
  year: string;
}

export function TestimonialCard({ 
  initials, 
  name, 
  role, 
  comment, 
  rating, 
  color,
  year 
}: TestimonialCardProps) {
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-blue-600',
          text: 'text-white',
          star: 'text-blue-600'
        };
      case 'secondary':
        return {
          bg: 'bg-green-600',
          text: 'text-white',
          star: 'text-green-600'
        };
      case 'accent':
        return {
          bg: 'bg-purple-600',
          text: 'text-white',
          star: 'text-purple-600'
        };
      default:
        return {
          bg: 'bg-blue-600',
          text: 'text-white',
          star: 'text-blue-600'
        };
    }
  };

  const colors = getColorClass();

  const stars = Array.from({ length: rating }, (_, i) => (
    <Star key={i} className={`h-6 w-6 ${colors.star} fill-current`} />
  ));

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className={`h-14 w-14 rounded-full ${colors.bg} flex items-center justify-center mr-4 shadow-lg`}>
              <span className={`${colors.text} font-bold text-lg`}>{initials}</span>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{role} • {year}</p>
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
