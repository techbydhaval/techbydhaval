import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to discuss your next project or opportunity? I’d love to hear from you.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-md text-blue-600">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">techbydhaval@gmail.com</p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-md text-blue-600">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div> */}

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-md text-blue-600">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">Gujarat, India</p>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Connect With Me</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/techbydhaval/" alt="LinkedIn" className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/techbydhaval" className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700">
                  <FaGithub />
                </a>
                <a href="https://x.com/techbydhaval" className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="bg-white shadow rounded-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
