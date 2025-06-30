"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function HomeSlider({ sectionRef }) {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingInterval = useRef(null);

  const homeSlider = [
    {
      url: "/all-images/home_slider/img1.jpg",
      title: "Empower Your Body – One Movement at a Time...",
    },
    {
      url: "/all-images/home_slider/img2.jpg",
      title: "Daily Fitness Routines for a Healthier You",
    },
    {
      url: "/all-images/home_slider/img3.png",
      title: "Rebuild Strength. Improve Mobility. Live Better.",
    },
    {
      url: "/all-images/home_slider/img4.jpg",
      title: "Move Well. Feel Strong. Stay Active.",
    },
  ];

  // Typing effect with first letter fix
  useEffect(() => {
  const fullText = homeSlider[currentIndex].title;
  let charIndex = 0;

  clearInterval(typingInterval.current);
  setTypedText(""); // Reset typed text BEFORE starting interval

  typingInterval.current = setInterval(() => {
    if (charIndex <= fullText.length) {
      setTypedText(fullText.slice(0, charIndex));
      charIndex++;
    } else {
      clearInterval(typingInterval.current);
    }
  }, 100);

  return () => clearInterval(typingInterval.current);
}, [currentIndex]);


  const smoothScrollTo = (targetY, duration = 2500) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 2);

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleScroll = () => {
    if (sectionRef.current) {
      const targetY = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY);
    }
  };

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {homeSlider.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.url}
                alt="slide-img"
                fill
                className="object-cover w-full h-full"
                priority
              />

              {/* Title with typing effect */}
              <div className="absolute inset-0 flex justify-center items-center sm:px-10">
                {index === currentIndex && (
                  <h1 className="text-2xl md:text-3xl lg:text-6xl text-white font-bold px-2 text-center drop-shadow-md mb-2">
                    {typedText}
                  </h1>
                )}
              </div>

              {/* Scroll down icon */}
              <div className="sm:hidden absolute inset-0 flex justify-center items-end mb-20">
                <a onClick={handleScroll} className="cursor-pointer">
                  <ChevronsDown size={40} color="white" className="animate-pulse" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
