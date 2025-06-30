"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";
import HomeSlider from "../(components)/(home)/HomeSlider";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);

  const activateHover = () => setIsActive(true);
  const deactivateHover = () => setIsActive(false);
  const handleTouch = () => setShowNav((prev) => !prev);

  return (
    <div className="w-full">
      <HomeSlider sectionRef={sectionRef} />

      <div className="max-w-screen-2xl mx-auto h-auto mt-10 w-full px-4 sm:px-10 flex flex-col lg:flex-row items-center gap-6 xl:gap-10 2xl:gap-20">
        <Image
          src="/all-images/home/home1.jpg"
          alt="card-image1"
          width={1500}
          height={100}
          className="w-full sm:w-80 sm:h-80 md:w-100 md:h-100 lg:w-[30rem] lg:h-[34rem] object-cover"
        />

        <div
          ref={sectionRef}
          className="flex flex-col gap-4 text-sm md:text-base lg:text-lg xl:text-xl px-1 md:px-10 mt-10 max-w-4xl"
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl">
            Balanced Fitness for Life
          </h1>

          <p className="text-justify">
            Our fitness programs are thoughtfully designed to target all key
            components of physical health — cardiovascular endurance, muscle
            strength, flexibility, and body composition. By combining principles
            of physiotherapy with modern exercise science, we ensure every
            workout not only builds your body but also supports recovery,
            reduces pain, and improves mobility. Whether you’re rehabilitating
            from an injury or simply looking to enhance your daily fitness, our
            guided routines provide clear, step-by-step instructions to help you
            safely and effectively reach your goals. Empower yourself to live an
            active, healthy life with exercises tailored for all ages and
            abilities.
          </p>

          <div>
            <Link
              href="/about"
              className="text-sm md:text-base text-gray-500 hover:text-gray-400 duration-300"
            >
              Read more
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/all-images/home/home2.jpg"
              alt="card-image1"
              width={500}
              height={300}
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <Image
              src="/all-images/home/home3.jpg"
              alt="card-image2"
              width={500}
              height={300}
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <Image
              src="/all-images/home/home4.jpg"
              alt="card-image3"
              width={500}
              height={300}
              className="w-full md:w-1/3 h-56 object-cover"
            />
          </div>
        </div>
      </div>
      {/* 
      <div className="h-auto my-20 w-full max-w-screen-2xl mx-auto">
        <HotelSlider />
      </div> */}

      <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-center sm:gap-20 xl:gap-32 md:justify-between mt-20 px-5 sm:px-10">
        <div className="flex flex-col text-left text-sm sm:text-base md:text-md lg:text-lg max-w-xl">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4">
            Functional Strength for Everyday Living..
          </h1>
          <p className="leading-relaxed">
            Understanding the importance of balanced fitness, our website offers
            a comprehensive approach to improving overall health through daily
            exercises. Each workout plan is designed to gradually increase your
            endurance and strength while promoting flexibility and joint health.
            <br className="hidden sm:block" />
            We focus on functional movements that mimic everyday activities,
            ensuring that you gain practical strength that translates into
            better posture, reduced risk of injury, and improved quality of
            life. Our mission is to make fitness accessible and enjoyable,
            guiding you with expert advice and encouraging consistent progress
            toward your wellness journey.
          </p>
        </div>

        <div
          className="relative flex items-center justify-center overflow-hidden group w-full"
          onTouchStart={handleTouch}
        >
          <Image
            src="/all-images/home/img3.jpeg"
            alt="card-image2"
            width={1500}
            height={100}
            className="object-cover w-200 h-100"
          />

          {/* <HotelNav /> */}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-2 sm:px-10 py-10">
        <Image
          src="/all-images/home/img2.jpeg"
          alt="card-image2"
          width={500}
          height={300}
          className="w-full sm:w-[80%] md:w-[50%] h-64 sm:h-85 md:h-125 object-cover"
        />

        <div className="flex flex-col text-left text-sm sm:text-base md:text-md lg:text-lg w-full md:w-[50%]">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4">
            A Holistic Approach to Wellness
          </h1>
          <p className="leading-relaxed">
            Physical fitness is more than just working out — it’s about
            nurturing your body’s ability to perform, heal, and adapt. Our
            exercise plans integrate cardiovascular training, muscle endurance,
            and flexibility exercises to create a holistic fitness routine that
            promotes long-term health. With detailed instructions and
            educational content, we help you understand the benefits of each
            component and how it contributes to your overall well-being. By
            following our weekly plans, you will build strength, improve
            mobility, and develop habits that support a sustainable, active
            lifestyle. Join us in embracing a fitness journey that prioritizes
            your body’s needs and helps you thrive every day.
          </p>

          <div className="mt-4">
            <Link href="/blogs" className="text-sm lg:text-lg md:text-md">
              <button
                className="relative text-black py-1 border-b-2 border-transparent"
                onMouseEnter={activateHover}
                onMouseLeave={deactivateHover}
                onTouchStart={activateHover}
                onTouchEnd={deactivateHover}
              >
                Discover
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-8"
                  }`}
                ></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
