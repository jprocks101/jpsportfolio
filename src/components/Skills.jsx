import { motion } from 'framer-motion';
import { DiPython, DiJavascript1, DiGo, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiLua } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <DiPython />, level: 90, color: '#3776AB' },
    { name: 'JavaScript', icon: <DiJavascript1 />, level: 85, color: '#F7DF1E' },
    { name: 'Go', icon: <DiGo />, level: 80, color: '#00ADD8' },
    { name: 'HTML', icon: <DiHtml5 />, level: 95, color: '#E34F26' },
    { name: 'CSS', icon: <DiCss3 />, level: 85, color: '#1572B6' },
    { name: 'Lua', icon: <SiLua />, level: 75, color: '#2C2D72' }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-secondary to-primary opacity-50" />
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
            Technical Skills
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Proficient in multiple programming languages and technologies, 
            with a focus on automation and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/80 to-primary/80 backdrop-blur-sm p-6 rounded-xl border border-accent/10"
              whileHover={{ 
                y: -5,
                boxShadow: `0 10px 30px -10px ${skill.color}33`
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="text-4xl"
                  style={{ color: skill.color }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <div className="h-2 bg-primary/50 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`
                  }}
                />
              </div>
              <motion.p 
                className="text-right text-sm text-text/60 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {skill.level}%
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 