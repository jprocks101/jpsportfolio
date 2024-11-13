import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, []);

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
      rgba(99, 102, 241, 0.15) 0%, 
      rgba(79, 70, 229, 0.1) 25%, 
      transparent 50%)`
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0A0A]">
      <div style={gradientStyle} className="absolute inset-0 transition-all duration-300" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="grid grid-cols-8 gap-4 w-full h-full rotate-12 scale-125">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="h-32 bg-accent/10 rounded-lg"
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative inline-block mb-8 pt-12">
          <motion.h1 
            className="text-8xl md:text-[12rem] font-display font-bold tracking-tighter leading-[0.8] py-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 text-transparent bg-clip-text inline-block transform translate-y-2">
              jp
            </span>
          </motion.h1>
          {isHovered && (
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-purple-500/20 to-pink-500/20 rounded-xl -z-10 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-3xl text-text/80 font-light">
            15 y/o Full Stack Developer & Automation Specialist
          </p>
          <p className="text-lg text-text/60 max-w-2xl mx-auto">
            Turning ideas into reality through code. Available for freelance projects 
            at competitive rates.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={() => handleScroll('about')}
            className="group relative px-8 py-3 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.span 
              className="relative text-white text-lg font-medium inline-flex items-center gap-2"
              whileHover={{ gap: '12px' }}
            >
              View More
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5"
                initial={{ y: 0 }}
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.span>
          </motion.button>

          <motion.button
            onClick={() => handleScroll('contact')}
            className="group relative px-8 py-3 rounded-full overflow-hidden bg-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 border border-accent/50 rounded-full group-hover:border-accent transition-colors" />
            <motion.span 
              className="relative text-accent text-lg font-medium inline-flex items-center gap-2"
              whileHover={{ gap: '12px' }}
            >
              Start a Project
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 