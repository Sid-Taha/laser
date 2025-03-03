import React from "react";
import { FaFacebookF, FaLinkedin, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-gray-200 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image 
              src="/main_logo.png" // Update with your logo path
              alt="Company Logo"
              className="h-28 w-auto mb-4"
            />
            <div className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
              <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <p>Plot No.109, Sector 9/D</p>
                <p>Orangi Town, Karachi</p>
                <p>Karachi-Pakistan</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-gray-800 text-sm font-semibold mb-2 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Shop', '/shop'],
                ['Board', '/board'],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link href={url} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors text-sm">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h3 className="text-gray-800 text-sm font-semibold mb-2 dark:text-gray-200">Support</h3>
            <ul className="space-y-2">
              {[
                ['Cart', '/cart'],
                ['Grills', '/grills'],
                ['Search', '/search'],
                ['Contact', '/contact'],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link href={url} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors text-sm">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 flex flex-col items-start md:items-end">
            <Link href="/contact" className="w-full md:w-auto">
              <button className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 ease-in-out 
                flex items-center justify-center space-x-2 group dark:bg-blue-700 dark:hover:bg-blue-600">
                <span>Join Now</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            
            <div className="flex space-x-4 mt-4">
              {[
                [FaFacebookF, 'https://facebook.com', 'blue-600'],
                [FaLinkedin, 'https://linkedin.com', 'blue-600'],
                [FaWhatsapp, 'tel:+923186960221', 'green-500'],
              ].map(([Icon, href, color], index) => (
                <Link 
                  key={index}
                  href={String(href)}
                  target="_blank"
                  className={`p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow 
                    dark:bg-gray-800 text-${color} hover:text-${color}-700 dark:hover:text-${color}-400`}
                >
                  <Icon className="text-lg" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2024 Laser Edge Tech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;