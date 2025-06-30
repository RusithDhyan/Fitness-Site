"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Contact() {
  const [chooseIndex, setChooseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChooseIndex((prev) => (prev + 1) % chooseItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chooseItems = [
    {
      title: "D.K Amarathunga",
      desc: "UCP/2020/535",
      img: "/all-images/about/img1.jpeg",
    },
    {
      title: "K.J.Y.P Jayasooriya",
      desc: "UCP/2020/536",
      img: "/all-images/about/img2.jpeg",
    },
    {
      title: "S.A.L Malithi",
      desc: "UCP/2020/538",
      img: "/all-images/about/img3.jpeg",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header image */}
      <div className="w-full relative">
        <Image
          src="/all-images/contact/image.jpg"
          alt="contact-img"
          width={1500}
          height={300}
          className="object-cover w-full h-100"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-white pb-4 font-bold">
          About Us
        </h1>
      </div>

      {/* Title & Intro */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 md:px-20 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          Contact Our Team – We're Here to Assist You!
        </h1>
        <p className="font-extralight max-w-3xl text-sm md:text-base">
          Have questions about our fitness programs or physiotherapy guidance?
          We’re here to help you on your journey to better health and movement.
          Whether you're looking for personalized exercise plans, support during
          recovery, or just need advice on where to begin, feel free to reach
          out.
          <br />
          Our team is happy to answer your inquiries, schedule consultations, or
          provide more information about our services. Simply fill out the form
          below or contact us using the details provided. Let’s take the next
          step toward a healthier, stronger you — together.
        </p>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:px-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
            We Are A Team Of Physiotherapy
          </h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid gap-10 md:grid-cols-3">
            {chooseItems.map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md p-6 flex flex-col items-center text-center"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1500}
                  height={200}
                  className="mb-4 sm:h-auto object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="block md:hidden">
            <div className="bg-white shadow-md p-4 flex flex-col items-center text-center transition duration-500 ease-in-out">
              <Image
                src={chooseItems[chooseIndex].img}
                alt={chooseItems[chooseIndex].title}
                width={1500}
                height={200}
                className="mb-4 h-auto object-cover rounded"
              />
              <h3 className="text-xl font-semibold mb-2">
                {chooseItems[chooseIndex].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {chooseItems[chooseIndex].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
