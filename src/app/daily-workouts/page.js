"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const workouts = [
  {
    day: "Monday",
    focus: "Cardiovascular Endurance",
    description:
      "Start the week with heart-healthy activities such as brisk walking, cycling, or light jogging. Cardiovascular workouts improve lung capacity, circulation, and overall stamina. Even 20–30 minutes can make a difference.",
    tips: "Try interval walking — alternate 2 minutes of fast walking with 1 minute of normal pace for 20 minutes.",
  },
  {
    day: "Tuesday",
    focus: "Muscle Strength",
    description:
      "Build foundational strength with bodyweight exercises like squats, push-ups (wall or floor), and resistance band workouts. These movements enhance joint stability and posture.",
    tips: "Focus on form over reps. Start with 2 sets of 8–10 reps for each movement.",
  },
  {
    day: "Wednesday",
    focus: "Flexibility & Mobility",
    description:
      "Recover and restore your body midweek with gentle stretching routines, yoga poses, and mobility drills. This improves range of motion and prevents stiffness.",
    tips: "Hold each stretch for 20–30 seconds without bouncing. Breathe deeply and relax into each movement.",
  },
  {
    day: "Thursday",
    focus: "Muscular Endurance",
    description:
      "Train your muscles to work longer without fatigue. Use light weights or bodyweight for higher repetitions (15–20 reps) with minimal rest between sets.",
    tips: "Combine exercises like lunges, step-ups, and band rows into a circuit for 3 rounds.",
  },
  {
    day: "Friday",
    focus: "Core & Balance",
    description:
      "A strong core supports your spine and prevents injuries. Add planks, bird-dogs, and balance-focused exercises to improve your center of gravity and coordination.",
    tips: "Try a 30-second plank, followed by 10 bird-dogs per side and single-leg stands for balance.",
  },
  {
    day: "Saturday",
    focus: "Active Recovery",
    description:
      "Engage in gentle movements like walking, light swimming, or tai chi. This promotes blood flow, reduces soreness, and helps the body recover from the week’s workouts.",
    tips: "Enjoy nature walks or do a 15-minute mobility session indoors.",
  },
  {
    day: "Sunday",
    focus: "Rest & Mindfulness",
    description:
      "Give your body a chance to fully rest and regenerate. Practice breathing exercises or guided meditation. Rest is a crucial part of your progress.",
    tips: "Spend 10–15 minutes reflecting, journaling, or doing slow deep breathing.",
  },
];

export default function DailyWorkouts() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-10 py-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Your Guided Daily Workout Plan
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {workouts.map((workout, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 shadow-md rounded-md border-l-4 border-orange-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-orange-600">
              {workout.day}: {workout.focus}
            </h2>
            <p className="text-gray-700 mt-2">{workout.description}</p>
            <p className="mt-2 italic text-sm text-gray-600">💡 {workout.tips}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/health-benifits">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-700 transition duration-300">
            Learn the Benefits of These Workouts
          </button>
        </Link>
      </div>
    </div>
  );
}
