import { motion } from "framer-motion";

export default function Experience() {
  const timeline = [
    {
      date: "2019 – Present",
      role: "Senior Software Engineer",
      company: "Bluesoft Infotech",
      description:
        "Leading development of enterprise-scale applications, mentoring junior developers, and implementing best practices for code quality and performance optimization.",
      side: "left",
    },
    {
      date: "2018",
      role: "Full-Stack Developer",
      company: "Elaunch Infotech",
      description:
        "Developed and maintained multiple web applications using .NET Core and Angular. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      side: "right",
    },
    {
      date: "2017",
      role: "Software Developer",
      company: "OZZEE Technologies",
      description:
        "Built responsive web applications and RESTful APIs. Gained expertise in database design, frontend and backend frameworks, and agile development methodologies.",
      side: "left",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          8 years of progressive experience in software development and technical leadership.
        </motion.p>

        <div className="relative mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>

          <div className="space-y-12 relative z-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row ${
                  item.side === "left"
                    ? "md:justify-start"
                    : "md:justify-end"
                } items-center`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {item.side === "left" && (
                  <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
                    <div className="bg-gray-50 p-6 rounded-lg shadow text-left">
                      <p className="text-blue-600 font-semibold">{item.date}</p>
                      <h3 className="text-md font-bold mt-1">{item.role}</h3>
                      <p className="text-sm text-gray-500">{item.company}</p>
                      <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                )}

                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10"></div>

                {item.side === "right" && (
                  <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg shadow text-left">
                      <p className="text-blue-600 font-semibold">{item.date}</p>
                      <h3 className="text-md font-bold mt-1">{item.role}</h3>
                      <p className="text-sm text-gray-500">{item.company}</p>
                      <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
