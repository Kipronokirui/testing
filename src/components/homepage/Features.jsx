import React from "react";
import { FaListUl } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

const features = [
  {
    id: 1,
    title: "Instant",
    description:
      "With access to the GSP Tier 2 platform, you have access into a whole new world where you can easily convert GSP funds to top cryptocurrencies.",
    icon: <FaListUl className="text-green-500 text-2xl w-10 h-10" />,
  },
  {
    id: 2,
    title: "Global Acknoledgement ",
    description:
      "The GSP funds in Tier 2 platform are globally accepted assets all around different continents. ",
    icon: <FaGlobe className="text-green-500 text-2xl w-10 h-10" />,
  },
  {
    id: 3,
    title: "Versatille",
    description: "Availability in different continents and accessible to all.",
    icon: <MdCurrencyExchange className="text-green-500 text-2xl w-10 h-10" />,
  },
  {
    id: 4,
    title: "Safe and Secure",
    description:
      "With the introduction of security phrase, our GSP funds are secured more than ever thereby making it highly valued worldwide.",
    icon: <FaLock className="text-green-500 text-2xl w-10 h-10" />,
  },
];
export default function Features() {
  return (
    <section className="bg-white">
      <div className="container px-4 md:px-12 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 border rounded-lg shadow p-4 md:p-6 text-center">
          {features.map((feature, index) => {
            return (
              <div
                className="flex flex-wrap flex-col items-center justify-center px-6"
                key={index}
              >
                <div className="flex items-center justify-center w-20 h-20 bg-white border-4 border-green-500 rounded-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    {feature.icon}
                  </div>
                </div>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
                  {feature.title}
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
