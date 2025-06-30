"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const programs = [
  {
    title: "Beginner-Friendly Fitness",
    duration: "4 Weeks",
    gif: "/assets/animations/1.gif",
    description:
      "This low-impact program helps you build strength and stamina with physiotherapy-safe exercises. Ideal for those new to fitness, older adults, or those returning after a break.",
    focus: ["Mobility", "Core stability", "Gentle strength building"],
  },
  {
    title: "Post-Injury Recovery Plan",
    duration: "6 Weeks",
    gif: "/assets/animations/2.gif",
    description:
      "Tailored for individuals recovering from minor injuries or managing joint pain. Each session includes guided mobility, functional movements, and pain-prevention strategies.",
    focus: ["Joint mobility", "Controlled movement", "Pain relief"],
  },
  {
    title: "Full-Body Flexibility",
    duration: "3 Weeks",
    gif: "/assets/animations/5.gif",
    description:
      "Improve range of motion, posture, and recovery with this guided stretch program. Excellent for anyone looking to improve flexibility and reduce stiffness.",
    focus: ["Stretching routines", "Posture alignment", "Relaxation"],
  },
  {
    title: "Weight Loss & Wellness",
    duration: "5 Weeks",
    gif: "/assets/animations/3.gif",
    description:
      "A balanced blend of cardio, light resistance, and mindful eating support. This program is designed to promote fat burning while maintaining joint-friendly exercise practices.",
    focus: ["Fat burning", "Cardio endurance", "Body composition"],
  },
  {
    title: "Strength & Balance for Seniors",
    duration: "6 Weeks",
    gif: "/assets/animations/4.gif",
    description:
      "Designed with older adults in mind, this program improves stability, prevents falls, and builds functional strength safely.",
    focus: ["Balance training", "Leg & core strength", "Everyday movements"],
  },
];

export default function FitnessPrograms() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-10 py-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center text-orange-600 mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Fitness Programs
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-md shadow-md border-l-4 border-orange-500 flex flex-col md:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/3">
              <Image
                src={program.gif}
                alt={program.title}
                width={300}
                height={200}
                className="rounded-md object-cover w-full"
              />
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {program.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {program.duration} Program
              </p>
              <p className="text-gray-700 mb-3">{program.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {program.focus.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
