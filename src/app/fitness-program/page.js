
import Image from "next/image";

function Contact() {

  const data = [
    { name: "Email", value: "contact@serendib.com" },
    { name: "Phone", value: "+265 123 456 789" },
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
          Contact Us
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
