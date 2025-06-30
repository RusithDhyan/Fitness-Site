"use client";

import { motion } from "framer-motion";

const weeklyPlan = [
  {
    day: "Monday",
    title: "Cardio Kickstart",
    activities: [
      "20 minutes brisk walking",
      "5 minutes jumping jacks or low-impact step-ups",
      "Cool-down with light stretching",
    ],
  },
  {
    day: "Tuesday",
    title: "Strength Foundations",
    activities: [
      "Bodyweight squats – 3 sets of 10",
      "Wall push-ups – 3 sets of 8",
      "Resistance band rows – 2 sets of 12",
    ],
  },
  {
    day: "Wednesday",
    title: "Flexibility Focus",
    activities: [
      "10-minute guided stretching",
      "Cat-cow spinal mobility",
      "Hamstring and quad stretches",
    ],
  },
  {
    day: "Thursday",
    title: "Endurance Builder",
    activities: [
      "Lunges – 3 sets of 12 per leg",
      "Plank – hold for 30 seconds (repeat x2)",
      "Mountain climbers – slow pace, 30 sec rounds",
    ],
  },
  {
    day: "Friday",
    title: "Core & Balance",
    activities: [
      "Bird-dogs – 2 sets of 10 per side",
      "Single-leg balance – hold 30 seconds each leg",
      "Side planks – 20 seconds each side",
    ],
  },
  {
    day: "Saturday",
    title: "Active Recovery",
    activities: [
      "Gentle yoga or tai chi for 20 minutes",
      "Slow walking in nature",
      "Breathing exercises or meditation",
    ],
  },
  {
    day: "Sunday",
    title: "Rest & Reflect",
    activities: [
      "Full rest (or gentle mobility)",
      "Reflect on progress in a journal",
      "Plan for the week ahead",
    ],
  },
];

export default function WeeklyPlan() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-10 py-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-orange-600"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Weekly Fitness Plan
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {weeklyPlan.map((dayPlan, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg border-l-4 border-orange-500 p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {dayPlan.day}: {dayPlan.title}
            </h2>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              {dayPlan.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
