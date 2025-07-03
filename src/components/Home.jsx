import { motion } from "framer-motion";
import profileImg from '../assets/img/profile.jpg';
import resumePDF from '../assets/doc/resume.pdf';

export default function Home() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 min-h-screen px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg} // Replace with your image path or external URL
            alt="Profile"
            className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-blue-200 shadow-md"
          />
        </motion.div>

        {/* Title and Description */}
        <motion.h1
          className="text-6xl font-bold text-blue-800 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Senior Software Engineer
        </motion.h1>

        <motion.h2
          className="text-5xl font-extrabold text-blue-600 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          className="text-gray-700 mt-6 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Passionate about building scalable, high-performance applications with 8+ years
          of experience in modern web technologies. Specialized in .NET ecosystem, React,
          and cloud architectures.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center mt-8 gap-4 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href={resumePDF} target="_blank"
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md font-medium hover:bg-blue-700 transition"
          >
            <span className="inline-block mr-2">⬇</span>
            Download Resume
          </a>
          <a
            href="#"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <p className="text-3xl font-bold text-blue-700">8+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">50+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-700">15+</p>
            <p className="text-gray-600">Technologies</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
