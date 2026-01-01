import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface IntroCardProps {
  onNext: () => void;
}

export const IntroCard: React.FC<IntroCardProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4 text-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border-2 border-pink-200"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-pink-500 mb-6 flex justify-center"
        >
          <Heart size={64} fill="currentColor" />
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
          Alowww Sayangkuu
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
  “I’ll code for you, because loving you is my favorite script 💕”
</p>

<p className="bg-pink-500 text-white px-2 py-2 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-colors text-lg mb-8">
  Hope you like it
</p>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={onNext}
  className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-colors"
>
  Click Here ❤️
</motion.button>

      </motion.div>
    </div>
  );
};
