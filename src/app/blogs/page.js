"use client";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Exercises to Improve Posture",
    description:
      "Learn simple yet effective movements that correct posture and relieve back pain.",
    image: "/all-images/blogs/img1.jpeg",
    url: "/blogs/improve-posture",
    date: "June 30, 2025",
  },
  {
    id: 2,
    title: "Beginner’s Guide to Building Muscle Safely",
    description:
      "Explore how to gain strength with physiotherapy-friendly routines designed for all levels.",
    image: "/all-images/blogs/img2.jpeg",
    url: "/blogs/build-muscle-guide",
    date: "June 27, 2025",
  },
  {
    id: 3,
    title: "The Importance of Flexibility in Daily Life",
    description:
      "Discover how flexibility training improves mobility, reduces injury, and supports overall wellness.",
    image: "/all-images/blogs/img3.jpeg",
    url: "/blogs/flexibility-benefits",
    date: "June 25, 2025",
  },
  {
    id: 4,
    title: "Weekly Full-Body Workout Plan You Can Follow",
    description:
      "Follow this 7-day plan to build endurance, strength, and better movement habits.",
    image: "/all-images/blogs/img4.jpeg",
    url: "/blogs/weekly-workout-plan",
    date: "June 20, 2025",
  },

  {
    id: 6,
    title: "Safe Cardio for Beginners: Start at Home",
    description:
      "Boost your heart health with low-impact cardio routines you can do from anywhere.",
    image: "/all-images/blogs/img5.jpeg",
    url: "/blogs/safe-cardio",
    date: "June 15, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Top Cover */}
      <div className="w-full relative">
        <Image
          src="/all-images/blogs/bg.jpg"
          alt="Blog Cover"
          width={1500}
          height={100}
          className="object-cover w-full h-100"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl text-white pb-4 font-bold text-center px-4">
          Blogs
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10 px-4 md:px-10 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          FitLife Blog – Your Daily Dose of Fitness & Wellness{" "}
        </h1>
        <p className="font-light max-w-6xl text-sm md:text-base">
          Explore expert tips, workout routines, nutrition guides, and
          motivational content to help you live stronger, move better, and feel
          healthier every day. Whether you're a beginner or a fitness pro, our
          blog has something for everyone on their wellness journey.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-10">
        {/* Blog Cards Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((blog) => (
            <div
              key={blog.id}
              className="w-full bg-white shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-48 md:h-60 w-full group">
                <Link href={blog.url}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className=" transition-transform duration-300 group-hover:scale-105 rounded-md"
                  />
                </Link>
              </div>
              <div className="p-2">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <h5 className="text-gray-500">{blog.date}</h5>
                <p className="text-sm md:text-base">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
