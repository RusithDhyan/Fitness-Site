import Image from "next/image";

export default function Blog4() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image */}
      <div className="w-full">
        <Image
          src="/all-images/blogs/blog1/bg.jpg"
          alt="blog-img"
          width={1500}
          height={10}
          className="h-100 object-cover w-full"
        />
      </div>

      {/* Blog Text Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-10 px-4 sm:px-10">
        <h1 className="text-xl sm:text-2xl text-center">
          Straighten Up: Daily Moves to Fix Poor Posture
        </h1>
        <h3 className="text-sm">15/08/2024</h3>
        <p className="font-extralight text-sm sm:text-base text-justify">
          Discover 5 easy-to-follow exercises that realign your spine, open up
          your chest, and reduce tension — perfect for desk workers and
          students.
        </p>
      </div>

      {/* First Info Card */}
      <div className="flex flex-col md:flex-row items-center w-full px-4 sm:px-10 gap-5 mt-6">
        <div className="w-full h-80 relative aspect-video">
          <Image
            src="/all-images/blogs/blog1/blog.jpeg"
            alt="Chef Special"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Stronger Back, Better Posture: Your 5-Step Routine
          </h1>
          <p>
            Improve posture and reduce back pain with these expert-recommended
            moves that strengthen core muscles and support long-term alignment.
          </p>
        </div>
      </div>
    </div>
  );
}
