import { motion } from 'framer-motion';
import { FaGithub, FaDiscord, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { 
      icon: <FaDiscord />, 
      href: "https://discord.com/users/886041161167425606", 
      label: "Discord" 
    },
    { 
      icon: <FaTelegram />, 
      href: "https://t.me/jplolz", 
      label: "Telegram" 
    },
    { 
      icon: <FaGithub />, 
      href: "#", 
      label: "GitHub" 
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary opacity-50" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-6 bg-gradient-to-r from-accent to-purple-500 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Available for freelance work and commissions. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 mt-12"
          >
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="text-4xl text-text/80 group-hover:text-accent transition-colors">
                    {social.icon}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-8"
            >
              <p className="text-lg text-text/80">
                Prefer direct contact? Reach out on Discord or Telegram!
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <code className="bg-primary/50 px-4 py-2 rounded-lg text-accent">@jplolz</code>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 