
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ContactCard() {
  return (
    <div className="w-full h-1/2 flex flex-col justify-center items-center bg-gray-900 text-white p-8 sm:p-10 rounded-2xl shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get In Touch</h2>
      <p className="text-gray-300 text-center text-sm sm:text-base max-w-sm">
        Lets connect! Reach out via social media or give me a call. I m always happy to chat.
      </p>
      <div className="flex space-x-6 mt-6">
        <Link href="https://www.facebook.com/share/18da5Tojb2/">
          <FaFacebookF className="text-blue-600 text-3xl sm:text-4xl hover:text-blue-400 transition duration-300 transform hover:scale-110" />
        </Link>
        <Link href="https://www.linkedin.com/in/huzaifa-arqam-838296289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin className="text-blue-500 text-3xl sm:text-4xl hover:text-blue-300 transition duration-300 transform hover:scale-110" />
        </Link>
        <a href="tel:+923186960221">
          <FaWhatsapp className="text-green-500 text-3xl sm:text-4xl hover:text-green-300 transition duration-300 transform hover:scale-110" />
        </a>
      </div>
    </div>
  );
}
