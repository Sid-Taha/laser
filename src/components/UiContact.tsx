"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { Meteors } from "./ui/meteors";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);

    form.append("access_key", "9bda5b9c-29c1-402e-b099-2de22660da48");

    const object = Object.fromEntries(form);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-gray-900 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-6">
        <div className="w-full md:w-2/3 lg:w-4/5 relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 sm:px-8 py-10 sm:py-12 overflow-hidden rounded-2xl">
            <section className="text-gray-600 body-font">
              <div className="container mx-auto">
                <div className="flex flex-col text-center w-full mb-6 sm:mb-12">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-white">
                    Contact Us
                  </h1>
                </div>
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                  <div className="flex flex-wrap -mx-2">
                    <div className="p-2 w-full sm:w-1/2">
                      <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3"
                          required
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full sm:w-1/2">
                      <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button type="submit" className="flex mx-auto text-black bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </section>
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/5 flex flex-col justify-center items-center bg-gray-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Get In Touch</h2>
          <div className="flex flex-col items-center space-y-6">
            <Link href="https://www.facebook.com/share/18da5Tojb2/"><FaFacebookF className="text-blue-600 text-2xl sm:text-3xl hover:text-blue-800 transition duration-300" /></Link>
            <Link href="https://www.linkedin.com/in/huzaifa-arqam-838296289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="text-blue-500 text-2xl sm:text-3xl hover:text-blue-700 transition duration-300" /></Link>
            <a href="tel:+923186960221"><FaWhatsapp className="text-green-500 text-2xl sm:text-3xl hover:text-green-700 transition duration-300" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
