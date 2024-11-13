import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const AudioModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const audioElement = new Audio('/song.mp3');
      
      audioElement.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully');
        setError(false); 
      });

      audioElement.addEventListener('error', (e) => {
        console.error('Error loading audio:', {
          error: e.target.error,
          src: e.target.src,
          code: e.target.error?.code,
          message: e.target.error?.message
        });
        setError(true);
      });

      audioElement.loop = true;
      setAudio(audioElement);

      // Return cleanup function
      return () => {
        audioElement.pause();
        audioElement.src = '';
        audioElement.remove();
      };
    } catch (err) {
      console.error('Error creating audio element:', err);
      setError(true);
    }
  }, []);

  const handlePlay = async () => {
    if (audio) {
      try {
        audio.volume = 0.4;
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Audio started playing successfully');
              setIsPlaying(true);
              setIsOpen(false);
            })
            .catch(err => {
              console.error('Error playing audio:', err);
            });
        }
      } catch (err) {
        console.error('Error in play handler:', err);
      }
    }
  };

  const handleDecline = () => {
    if (audio) {
      audio.pause();
    }
    setIsOpen(false);
  };

  if (error && isPlaying) {
    console.log('Audio playback failed, modal hidden');
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-secondary/80 backdrop-blur-md p-8 rounded-2xl max-w-md mx-4"
          >
            <h2 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-accent to-purple-500 text-transparent bg-clip-text">
              Enable Background Music?
            </h2>
            <p className="text-text/80 mb-2">
              Would you like to enhance your experience with background music?
            </p>
            <p className="text-text/60 text-sm mb-6 italic">
              ♪ Daniel Caesar - Transform ft. Charlotte Day Wilson
            </p>
            <div className="flex gap-4 justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDecline}
                className="px-4 py-2 rounded-lg text-text/60 hover:text-text/80"
              >
                No Thanks
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlay}
                className="bg-gradient-to-r from-accent to-purple-600 px-4 py-2 rounded-lg text-white"
              >
                Play Music
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioModal; 