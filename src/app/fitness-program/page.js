"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const programs = [
  
  {
    title: "Day 1 – Muscular Strength (Gym-Based Upper Body)",
    duration: "1 Day",
    gif: "/assets/animations/1.gif",
    description:
      "Bench press, lat pulldown, shoulder press, and more — all focused on building upper body power. Includes a dynamic warm-up and cool-down.",
    focus: ["Gym", "Upper Body", "Power"],
  },
  {
    title: "Day 2 – Cardiopulmonary Endurance (Zumba Session)",
    duration: "1 Day",
    gif: "/assets/animations/2.gif",
    description:
      "A high-energy Zumba session that keeps your heart pumping while you burn calories to rhythmic dance routines.",
    focus: ["Cardio", "Zumba", "Endurance"],
  },
  {
    title: "Day 3 – Muscular Endurance (Pilates-Based)",
    duration: "1 Day",
    gif: "/assets/animations/3.gif",
    description:
      "Pilates movements that increase muscular stamina and core strength with low-impact control.",
    focus: ["Pilates", "Core", "Endurance"],
  },
  {
    title: "Day 4 – Flexibility (Yoga-Based)",
    duration: "1 Day",
    gif: "/assets/animations/5.gif",
    description:
      "Yoga poses like Downward Dog, Cobra, and Pigeon that enhance flexibility and calm the mind.",
    focus: ["Yoga", "Flexibility", "Mindfulness"],
  },
  {
    title: "Day 5 – Body Composition (HIIT-Based)",
    duration: "1 Day",
    gif: "/assets/animations/4.gif",
    description:
      "An intense HIIT session that focuses on fat burning through compound movements and cardio bursts.",
    focus: ["HIIT", "Fat Burn", "Metabolism"],
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
