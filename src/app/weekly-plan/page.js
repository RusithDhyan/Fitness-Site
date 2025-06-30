"use client";
import { motion } from "framer-motion";
import React from "react";

const weeklyPlan = [
  {
    day: "Monday",
    title: "Cardio + Core",
    description:
      "Boost your heart rate and strengthen your core muscles with a dynamic mix of aerobic exercises and abdominal workouts. Improves cardiovascular endurance, burns calories, and builds stability around your spine.",
  },
  {
    day: "Tuesday",
    title: "Flexibility + Neuromotor",
    description:
      "Focus on improving joint mobility and enhancing coordination through stretching routines and neuromotor training. Increases range of motion, reduces injury risk, and sharpens balance and agility.",
  },
  {
    day: "Wednesday",
    title: "Strength + Endurance",
    description:
      "Build lean muscle and stamina with resistance training and higher-rep circuits. Enhances muscular endurance and supports long-term strength gains.",
  },
  {
    day: "Thursday",
    title: "Active Recovery",
    description:
      "Let your body rest with gentle movement—like walking, light cycling, or yoga—to support recovery and circulation. Reduces soreness, improves blood flow, and promotes overall recovery without full rest.",
  },
  {
    day: "Friday",
    title: "Body Composition + Cardio",
    description:
      "Combine interval-based cardio with bodyweight exercises to reduce fat and improve metabolic health. Supports fat loss while preserving muscle mass and improving body composition.",
  },
  {
    day: "Saturday",
    title: "Strength + Balance",
    description:
      "Work on full-body strength with an added emphasis on stability and proprioception through balance exercises. Builds muscle, supports joint integrity, and improves overall functional strength.",
  },
  {
    day: "Sunday",
    title: "Light Stretching",
    description:
      "Dedicate time to slow, relaxing stretches that promote muscle recovery and mental calm. Reduces muscle tightness, lowers stress, and prepares your body for the week ahead.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WeeklyPlanPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-12 text-orange-600"
      >
        🗓️ Weekly Workout Plan
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {weeklyPlan.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 p-6"
          >
            <h2 className="text-xl font-semibold text-orange-500 mb-1">
              {item.day}
            </h2>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
