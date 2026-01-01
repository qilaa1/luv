import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sun, Smile, ArrowRight } from 'lucide-react';

interface ReasonsListProps {
  onNext: () => void;
}

export const ReasonsList: React.FC<ReasonsListProps> = ({ onNext }) => {
  const reasons = [
    { icon: <Smile className="w-6 h-6" />, text: "Senyum kamu yang manis banget" },
    { icon: <Sun className="w-6 h-6" />, text: "Tengilnya kamu" },
    { icon: <Heart className="w-6 h-6" />, text: "How you treat me and makes me feel loved" },
    { icon: <Star className="w-6 h-6" />, text: "Cara kamu mendukung mimpi-mimpiku" },
    { icon: <Heart className="w-6 h-6" />, text: "Pola pikir kamu" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 py-12 px-4 flex flex-col items-center">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2 font-serif">
            Kenapa Aku Jatuh ke Kamu
          </h2>
          <div className="h-1 w-20 bg-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-4 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4 border-l-4 border-pink-400 hover:shadow-lg transition-shadow"
            >
              <div className="bg-pink-100 p-2 rounded-full text-pink-500">
                {reason.icon}
              </div>
              <p className="text-gray-700 font-medium">{reason.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <p className="text-gray-600 italic mb-6">Dan masih banyak lagi...</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-2 mx-auto"
          >
            Ada Satu Lagi <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
