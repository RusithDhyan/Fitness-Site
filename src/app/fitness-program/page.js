"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const programs = [
  {
    title: "Day 1 – Muscular Strength (Gym-Based Upper Body)",
    duration: "1 Day",
    gif: "/all-images/exercise/img1.jpeg",
    description: `Warm-Up : Arm circles, treadmill walk

Workout:
- Bench press – 3 sets of 8 reps
- Lat pulldown – 3 sets of 10 reps
- Dumbbell shoulder press – 3 sets of 10 reps
- Cable rows – 3 sets of 10 reps
- Plank – 3 sets of 30 seconds

Cool-Down : Shoulder and chest stretches

Details:
✅ Component: Muscular Strength
✅ Method: Gym
✅ Effect: Builds upper body power`,
    focus: ["Gym", "Upper Body", "Power"],
  },
  {
    title: "Day 2 – Cardiopulmonary Endurance (Zumba Session)",
    duration: "1 Day",
    gif: "/all-images/exercise/img2.jpeg",
    description: `Warm-Up : Light dancing, arm swings

Workout (30 minutes):
- Full-body Zumba dance with high tempo music
- Includes side steps, grapevines, dance squats

Cool-Down : Gentle dance and deep breathing

Details:
✅ Component: Cardiopulmonary Endurance
✅ Method: Zumba
✅ Effect: Improves heart and lung function, burns calories`,
    focus: ["Cardio", "Zumba", "Endurance"],
  },
  {
    title: "Day 3 – Muscular Endurance (Pilates-Based)",
    duration: "1 Day",
    gif: "/all-images/exercise/img3.jpeg",
    description: `Warm-Up : Shoulder rolls, gentle stretching

Workout:
- Pilates leg lifts – 3 sets of 15 reps
- Pilates swimming – 3 sets of 1 minute
- Side-lying leg circles – 2 sets each leg
- Modified push-ups – 3 sets of 12 reps

Cool-Down : Spinal twists and hamstring stretch

Details:
✅ Component: Muscular Endurance
✅ Method: Pilates
✅ Effect: Improves posture, core and muscular stamina`,
    focus: ["Pilates", "Core", "Endurance"],
  },
  {
    title: "Day 4 – Flexibility (Yoga-Based)",
    duration: "1 Day",
    gif: "/all-images/exercise/img4.jpeg",
    description: `Warm-Up : Breathing exercises, gentle neck stretches

Routine:
- Downward Dog
- Cobra Pose
- Child’s Pose
- Cat-Cow
- Seated Forward Fold
- Pigeon Pose
(Hold each pose for 30 seconds)

Cool-Down : Shavasana (2 minutes)

Details:
✅ Component: Flexibility
✅ Method: Yoga
✅ Effect: Increases joint range, calms mind`,
    focus: ["Yoga", "Flexibility", "Mindfulness"],
  },
  {
    title: "Day 5 – Body Composition (HIIT-Based)",
    duration: "1 Day",
    gif: "/all-images/exercise/img5.jpeg",
    description: `Warm-Up : Jumping jacks, bodyweight squats

Workout (Repeat 3 rounds):
- Jump Squats – 30 sec
- Burpees – 30 sec
- Mountain Climbers – 30 sec
- Rest – 30 sec
- Push-ups – 30 sec
- High knees – 30 sec

Cool-Down : Light walk and full-body stretches

Details:
✅ Component: Body Composition
✅ Method: HIIT
✅ Effect: Burns fat, improves metabolism`,
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
            className="bg-white p-6 rounded-md shadow-md border-l-4 border-orange-500 flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className=" items-center">
              <Image
                src={program.gif}
                alt={program.title}
                width={300}
                height={200}
                className="rounded-md w-200 h-60 object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 whitespace-pre-line">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {program.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{program.duration} Program</p>
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
