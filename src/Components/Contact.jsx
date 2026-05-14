import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 flex items-center justify-center">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-light text-gray-900 mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Thank you for your interest in Nepali Pasal. Please leave us a
            message and our team will get back to you within 1–3 business days.
            Some questions may already be answered in our FAQs or Size Guide.
          </p>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md">

         <form action="https://formsubmit.co/anujghimire41@gmail.com" method="POST"  className="space-y-4">

            {/* IMPORTANT: disables captcha popup */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500"
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Reason for contact?"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;