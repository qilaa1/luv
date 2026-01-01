import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface MiniGameProps {
  onNext: () => void;
}

interface Card {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
}

export const MiniGame: React.FC<MiniGameProps> = ({ onNext }) => {
  const symbols = ["💖", "💕", "💘", "💓", "💗"];

  const generateCards = () => {
    const pairList = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((value, i) => ({
        id: i,
        value,
        flipped: false,
        matched: false,
      }));
    return pairList;
  };

  const [cards, setCards] = useState<Card[]>(generateCards);
  const [selected, setSelected] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // Handle card click
  const flipCard = (index: number) => {
    if (disabled) return;
    if (cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setDisabled(true);

      setTimeout(() => {
        checkMatch(newSelected);
      }, 800);
    }
  };

  // Check match
  const checkMatch = (pair: number[]) => {
    const [a, b] = pair;
    const newCards = [...cards];

    if (newCards[a].value === newCards[b].value) {
      newCards[a].matched = true;
      newCards[b].matched = true;
      setScore(score + 1);
    } else {
      newCards[a].flipped = false;
      newCards[b].flipped = false;
    }

    setCards(newCards);
    setSelected([]);
    setDisabled(false);
  };

  const allMatched = cards.every((c) => c.matched);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <div className="bg-white px-5 py-2 rounded-full shadow-md text-pink-600 font-bold mb-6">
        Poin: {score}
      </div>

      {!allMatched && (
        <h2 className="text-2xl font-bold text-pink-600 mb-6">
          Cocokkan Pasangan Hati 💞
        </h2>
      )}

      {/* GAME BOARD */}
      <div className="grid grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <motion.button
            key={card.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => flipCard(index)}
            className={`w-20 h-24 rounded-xl shadow-lg flex items-center justify-center text-3xl font-bold 
              ${
                card.flipped || card.matched
                  ? "bg-white text-pink-500"
                  : "bg-pink-400"
              }`}
          >
            {card.flipped || card.matched ? card.value : "❣️"}
          </motion.button>
        ))}
      </div>

      {/* GAME COMPLETE */}
      {allMatched && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-10 bg-white p-8 rounded-2xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            YEAYYY Berhasil! 🎉
          </h2>
          <p className="text-xl text-pink-600 mb-6">
          Pinter bangett cii pacal aku nii 💘
          </p>

          <button
            onClick={onNext}
            className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-colors"
          >
            Lanjut ke Kejutan ➡️
          </button>
        </motion.div>
      )}
    </div>
  );
};
