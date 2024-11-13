import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="relative group px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-sm font-medium transition-colors duration-200">
                {item.label}
              </span>
              
              {}
              <motion.div
                className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-100' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}
                layoutId="navBackground"
              />

              {}
              <motion.div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-purple-500 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
                layoutId="navIndicator"
              />

              {}
              <motion.div
                className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {}
        <motion.div
          className="text-2xl font-display font-bold bg-gradient-to-r from-accent to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          jp
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 