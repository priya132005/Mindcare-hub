'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from  "@/components/ui/background-beams";

function MindCareContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="relative min-h-screen py-12 bg-gray-100 dark:bg-gray-900 pt-36">
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 z-0 w-full h-full" />
      
      {/* Content with higher z-index */}
      <div className="relative z-10 max-w-2xl p-4 mx-auto">
        <h1 className="mb-8 font-sans text-lg font-bold text-center text-white md:text-7xl">
          Contact Us
        </h1>
        <p className="max-w-lg mx-auto my-2 text-sm text-center text-neutral-500">
          We&apos;re here to help with any questions about our facilites,
          programs, or events. Reach out and let us know how we can assist you
          in your improvment journey.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full p-4 border rounded-lg border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="w-full p-4 border rounded-lg border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default MindCareContactUs;
