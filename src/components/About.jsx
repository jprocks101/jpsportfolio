import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaDiscord, FaTelegram, FaBrain, FaServer } from 'react-icons/fa';

const About = () => {
  const specialties = [
    {
      icon: <FaDiscord />,
      title: 'Discord Bots',
      description: 'Developing advanced Discord bots with custom features and automation capabilities.'
    },
    {
      icon: <FaServer />,
      title: 'Full Stack',
      description: 'Building complete web applications from frontend to backend with modern technologies.'
    },
    {
      icon: <FaTelegram />,
      title: 'Telegram Bots',
      description: 'Creating automated Telegram bots for various purposes and functionalities.'
    },
    {
      icon: <FaRobot />,
      title: 'Automation',
      description: 'Specializing in Roblox account automation and various automation solutions.'
    },
    {
      icon: <FaCode />,
      title: 'Tools Development',
      description: 'Developing cracking tools, testers, and specialized software solutions.'
    },
    {
      icon: <FaBrain />,
      title: 'AI & ML',
      description: 'Created Bloxflip predictor using machine learning, growing to 15k+ members.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl font-display font-bold mb-6 bg-gradient-to-r from-accent to-purple-500 text-transparent bg-clip-text">About Me</h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            At just 15 years old, I've already established myself as a versatile developer 
            with 4½ years of experience. Passionate about automation and full-stack development, 
            I bring innovative solutions to complex challenges, from Discord bots to 
            machine learning applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/80 to-primary/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all border border-accent/10 hover:border-accent/30"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.3)"
              }}
            >
              <div className="text-4xl text-accent mb-4">{specialty.icon}</div>
              <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
              <p className="text-text/70">{specialty.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 