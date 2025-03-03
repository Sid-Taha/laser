import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center p-8 w-full">
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-screen h-screen">
            <iframe
              className="w-full h-full absolute inset-0 rounded-none shadow-lg border border-gray-300 dark:border-gray-700"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d231586.0509788908!2d67.0417302286562!3d24.913938797153794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splot%20no%20109%20%2C%20sector%209%2Fd%20orangi%20town%2C%20karachi%20pakistan!5e0!3m2!1sen!2s!4v1739540138291!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: "0", filter: "grayscale(0.5) contrast(1.2) opacity(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-8">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="mb-4 sm:mb-0 sm:w-1/2">
                <h2 className="text-lg font-semibold text-gray-900">ADDRESS</h2>
                <p className="mt-1 text-gray-700">
                  Plot No.109, Sector 9/D, Orangi Town, Karachi-Pakistan
                </p>
              </div>
              <div className="sm:w-1/2">
                <h2 className="text-lg font-semibold text-gray-900">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed block">huzaifaarqam674@gmail.com</a>
                <h2 className="text-lg font-semibold text-gray-900 mt-4">PHONE</h2>
                <p className="leading-relaxed">03186960221</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
