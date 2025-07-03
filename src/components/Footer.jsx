import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#0B1224] text-gray-400 py-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400">Senior Software Engineer Portfolio</span>. Built with modern web technologies.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Designed and developed with attention to detail and performance optimization.
        </p>
      </div>
    </motion.footer>
  );
}
