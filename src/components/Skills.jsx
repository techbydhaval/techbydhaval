import { FaDatabase, FaCode, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SkillCard = ({ icon, title, color, skills }) => {
  return (
    <motion.div
      className="bg-[#f9fbfd] rounded-2xl p-6 shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 rounded-xl bg-${color}-100 text-${color}-500 text-xl`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-col gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1 w-fit text-sm rounded-full bg-${color}-100 text-${color}-700 font-medium`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comprehensive skill set spanning full-stack development, cloud platforms, and
          modern development practices.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <SkillCard
            icon={<FaServer />}
            title="Backend Development"
            color="blue"
            skills={[
              "ASP.NET Core",
              ".NET Framework",
              "Web API",
              "MVC",
              "Blazer",
              "Entity Framework",
            ]}
          />
          <SkillCard
            icon={<FaCode />}
            title="Frontend Development"
            color="green"
            skills={[
              "React",
              "Next.js",
              "Angular",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript ES6+",
            ]}
          />
          <SkillCard
            icon={<FaDatabase />}
            title="Database & Storage"
            color="purple"
            skills={[
              "SQL Server",
              "MongoDB",
              "MS Access",
              "Redis",
              "Azure SQL",
              "PostgreSQL",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
