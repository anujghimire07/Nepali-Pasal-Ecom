import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 flex items-center justify-center">

      <div className="max-w-3xl w-full text-center">

        {/* Heading */}
        <h1 className="text-5xl font-light text-gray-900 mb-6">
          Nepali Pasal
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Nepali Pasal is a factory brand produced by one of the world’s
          leading makers of fleece fabric and apparel, Roopa Knitting Mills.
          We focus on quality, simplicity, and timeless comfort — clothing
          designed to feel as good as it looks.
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="1936.gif"
            alt="About"
            className="w-200 h-96 object-cover rounded-2xl shadow-md grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

      </div>
    </div>
  );
};

export default About;