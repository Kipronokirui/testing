import React from "react";
import background01 from '../../assets/background01.webp'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={background01}
          alt="Background Imag"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Send and Receive money instantly
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          You can instantly receive and send money to almost anyone anywhere in
          the world, anytime.
        </p>
        <a
          href="/#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started Now
        </a>
      </div>
    </div>
  );
}
