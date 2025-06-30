import Image from "next/image";

export default function Blog4() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full">
        <Image
          src="/all-images/blogs/blog2/bg.jpg"
          alt="blog-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Blog Text Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10">
        <h1 className="text-xl sm:text-2xl text-center">
          Build Strength Without Injury: A Beginner’s Plan{" "}
        </h1>
        <h3 className="text-sm">15/08/2024</h3>
        <p className="font-extralight text-sm sm:text-base text-justify">
          Learn how to develop lean muscle safely with low-impact,
          physio-approved exercises designed for people of all fitness levels —
          no gym required.
        </p>
      </div>

      {/* First Info Card */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          <Image
            src="/all-images/blogs/blog2/blog.jpeg"
            alt="Chef Special"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Smart Strength Training: Start Strong, Stay Safe{" "}
          </h1>
          <p>
            Starting your muscle-building journey can feel overwhelming —
            especially if you're concerned about doing it the right way without
            risking injury. This beginner-friendly guide is designed to help you
            build strength gradually using physiotherapy-approved methods that
            protect your joints, support your posture, and focus on long-term
            results. Rather than pushing your body through intense or unsafe
            routines, our approach emphasizes controlled movements, proper form,
            and consistency.
          </p>
        </div>
      </div>
    </div>
  );
}
