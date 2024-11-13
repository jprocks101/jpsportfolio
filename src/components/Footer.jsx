import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-6 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center text-text/60 text-sm"
          whileHover={{ scale: 1.05 }}
        >
          <span className="inline-flex items-center gap-2">
            site designed by 
            <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 text-transparent bg-clip-text font-display">
              jp
            </span> 
            with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 