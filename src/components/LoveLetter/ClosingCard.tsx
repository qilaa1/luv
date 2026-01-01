import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import musicFile from '../../assets/taruh.mp3';

export const ClosingCard: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 80;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center p-4 text-gray-800 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-pink-300 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: Math.random() * 6 + 2, height: Math.random() * 6 + 2 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full bg-white p-8 rounded-3xl shadow-xl border-2 border-pink-100 relative z-10"
      >
        <div className="absolute top-4 right-4 flex gap-2">
          <button onClick={togglePlay} className="p-2 bg-pink-100 text-pink-500 rounded-full hover:bg-pink-200 transition">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button onClick={toggleMute} className="p-2 bg-pink-100 text-pink-500 rounded-full hover:bg-pink-200 transition">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>


        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center font-serif text-pink-600">
          Happy New Year, Cintaku 
        </h1>

        <div className="space-y-6 text-lg leading-relaxed font-light text-gray-700">
          <p>
            Selamat tahun baru ya. Rasanya lucu juga, di akhir tahun ini kita berakhir saling dekat dan sekarang kamu jadi pacar aku. Jujur, aku masih belajar pahami kamu, kebiasaan kamu, cara kamu cerita, hal-hal yang kamu suka ataupun sebaliknya, sampe ke hal-hal kecil yang bikin kamu seneng.
          </p>
          
          <p>
            Di tahun yang baru ini, aku nggak berharap banyak, sekedar bisa terus sama kamu selama yang kita bisa it's enough. Aku juga mau belajar jadi versi terbaik aku yang pastinya untuk diri aku sendiri dan buat kita juga.
          </p>
          <p>
Maaf kalau terkadang cara aku mencintai dan nunjukin cinta aku sedikit berbeda dari yang lainnya, tapi aku berharap kamu cukup dengan adanya aku disini.</p>
          
          <p>
            Makasih ya udah hadir di hidup aku dan udah pilih aku. Walaupun ga semewah hubungan kebanyakan orang diluar sana, semoga selalu ada rasa syukur atas apapun yang kita hadapin didepan ya cil.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-pink-500">
           I love you, Sayanggg 🤍✨
          </p>
        </div>

        <audio ref={audioRef} src={musicFile} loop />
      </motion.div>
    </div>
  );
};
