"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HealthBenefits() {
  return (
    <div className="w-full px-4 sm:px-10 max-w-screen-2xl mx-auto py-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Health Benefits of Our Fitness Programs
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Benefit 1 */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/all-images/health-benifits/img1.jpeg"
            alt="Cardiovascular Health"
            width={800}
            height={600}
            className="rounded-md w-full h-[250px] object-cover"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-orange-600">
            Boosted Cardiovascular Health
          </h2>
          <p className="text-gray-700 text-justify">
            Regular cardio-focused routines increase heart efficiency, improve blood circulation, and reduce the risk of hypertension, stroke, and heart disease. Our exercises ensure safe, progressive heart health development even for beginners and recovery patients.
          </p>
        </motion.div>

        {/* Benefit 2 */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/all-images/health-benifits/img2.jpeg"
            alt="Strength"
            width={800}
            height={600}
            className="rounded-md w-full h-[250px] object-cover"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-orange-600">
            Increased Muscle Strength & Stability
          </h2>
          <p className="text-gray-700 text-justify">
            Targeted strength-building routines improve core stability, joint support, and bone density. They are designed with physiotherapy principles to prevent injury and support long-term structural health—perfect for all fitness levels.
          </p>
        </motion.div>

        {/* Benefit 3 */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/all-images/health-benifits/img3.jpeg"
            alt="Flexibility"
            width={800}
            height={600}
            className="rounded-md w-full h-[250px] object-cover"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-orange-600">
            Enhanced Flexibility & Posture
          </h2>
          <p className="text-gray-700 text-justify">
            Our flexibility-focused sessions reduce stiffness, correct muscle imbalances, and improve range of motion. This reduces chronic pain, boosts posture, and helps you move better throughout your daily life.
          </p>
        </motion.div>

        {/* Benefit 4 */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/all-images/health-benifits/img4.jpeg"
            alt="Mental Health"
            width={800}
            height={600}
            className="rounded-md w-full h-[250px] object-cover"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-orange-600">
            Mental Wellness & Stress Relief
          </h2>
          <p className="text-gray-700 text-justify">
            Exercise isn’t just physical—it’s emotional. Daily movement enhances mood, reduces anxiety and depression, and improves sleep quality. Our calm, guided programs are crafted to bring both body and mind into harmony.
          </p>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <Link href="/daily-workouts">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 transition duration-300">
            View Workout Plans
          </button>
        </Link>
      </div>
    </div>
  );
}
