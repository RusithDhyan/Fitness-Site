"use client"
import Image from "next/image";
import { useState } from "react";

function Contact() {
    const [chooseIndex, setChooseIndex] = useState(0);


  const data = [
    { name: "Email", value: "contact@serendib.com" },
    { name: "Phone", value: "+265 123 456 789" },
  ];


  const chooseItems = [
  {
    title: "World-Class Service",
    desc: "At Serendib, hospitality is more than a profession it's our promise. From the moment you arrive at our doorstep, our dedicated staff ensures that every detail is handled with care, warmth, and professionalism. Whether you’re staying at a serene lakeside resort, a boutique city hotel, or an adventure lodge at the foot of a mountain, our service is personalized, prompt, and infused with heart",
    img: "/all-images/about/choose1.jpeg",
  },
  {
    title: "Local Connection: Stay Where Malawi Lives",
    desc: "At Serendib Hotels & Resorts, we don’t just operate in Malawi, we are part of it. Each of our hotels are thoughtfully integrated into its local setting, offering guests an authentic gateway into the heart of Malawian life.",
    img: "/all-images/about/choose2.JPG",
  },
  {
    title: "Authentic Experience",
    desc: "Every Serendib property is a window into the soul of Malawi. We believe that travel should connect you with people, place, and culture. Whether you're enjoying a traditional cooking class at Kara O'Mula, joining a local village tour, or listening to live Malawian music under the stars, our experiences are designed to be immersive, meaningful, and true to the land. This isn’t just a stay—it’s a story you become part of.",
    img: "/all-images/about/choose3.jpeg",
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
                  className="mb-4 sm:h-50 object-cover"
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
                className="mb-4 h-48 object-cover rounded"
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

      {/* Contact Info Section */}
      <div className="flex flex-col items-center mt-10 px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Reservations</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-lg">
          {data.map((item, index) => (
            <div key={index}>
              <span className="font-semibold">{item.name}:</span> {item.value}
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="mx-4 md:mx-10 mt-10 p-6 md:pt-10 flex flex-col items-center">
        {/* <ContactForm/> */}

        {/* <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full border border-gray-300 shadow-sm p-2"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 shadow-sm p-2"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="question"
              className="block text-sm font-medium text-gray-700"
            >
              Ask Any Questions
            </label>
            <textarea
              name="question"
              id="question"
              rows="5"
              className="mt-1 block w-full border border-gray-300 shadow-sm p-2"
              placeholder="Type your question here..."
              value={formData.question}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 px-4 hover:bg-gray-600 transition"
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
