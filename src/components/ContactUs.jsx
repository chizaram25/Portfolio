import React from 'react'
import { useState } from "react";

const ContactUs = () => {

  {/* Form submission status */}
  const [status, setStatus] = useState(""); 

  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;

  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    setStatus("Thanks for your message!");
    form.reset();
  } else {
    setStatus("Oops! Something went wrong.");
  }
};

  return (
    <section>
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center" data-aos="fade-right">
        <h2 className="text-6xl font-extrabold tracking-tight text-balance text-yellow-400 sm:text-5xl">Contact Us</h2>
      </div>
      <form 
        action="https://formspree.io/f/mvgblrqw" 
        method="POST" 
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit}> 
  <div className="grid grid-cols-1 gap-x-8 gap-y-6 w-full">
    <div>
      <label htmlFor="name" className="text-sm/6 font-semibold text-yellow-400" data-aos="fade-left">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        autoComplete="given-name"
        required
        className="w-full mt-2.5 rounded-md bg-white/5 px-3.5 py-2 text-base text-yellow-400 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        data-aos="fade-right"
      />
    </div>

    <div className="sm:col-span-2">
      <label htmlFor="email" className="block text-sm/6 font-semibold text-yellow-400" data-aos="fade-left">
        Email
      </label>
      <div className="mt-2.5">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-yellow-400 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
          data-aos="fade-right"
        />
      </div>
    </div>

    <div className="sm:col-span-2">
      <label htmlFor="message" className="block text-sm/6 font-semibold text-yellow-400" data-aos="fade-left">
        Message
      </label>
      <div className="mt-2.5">
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
          data-aos="fade-right"
        />
      </div>
    </div>
  </div>

  <div className="mt-10" data-aos="fade-left">
    <button
      type="submit"
      className="block w-full rounded-md bg-purple-900 px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-white shadow-xs hover:bg-purple-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      Submit
    </button>
    </div>
  </form>
{/* Status Message */}
      {status && (
        <p className="mt-6 text-center text-sm font-medium text-green-400">
          {status}
        </p>
      )}

    </div>

    </section>
  )
}
export default ContactUs
