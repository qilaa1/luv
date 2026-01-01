import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IntroCard } from './components/LoveLetter/IntroCard';
import { MiniGame } from './components/LoveLetter/MiniGame';
import { ReasonsList } from './components/LoveLetter/ReasonsList';
import { ClosingCard } from './components/LoveLetter/ClosingCard';

function App() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => prev + 1);
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen overflow-hidden">
<AnimatePresence 
  mode="wait"
  onExitComplete={() => {}}
  custom={null}
>
        {slide === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <IntroCard onNext={nextSlide} />
          </motion.div>
        )}
        {slide === 1 && (
          <motion.div
            key="game"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <MiniGame onNext={nextSlide} />
          </motion.div>
        )}
        {slide === 2 && (
          <motion.div
            key="reasons"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <ReasonsList onNext={nextSlide} />
          </motion.div>
        )}
        {slide === 3 && (
          <motion.div
            key="closing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <ClosingCard />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;
