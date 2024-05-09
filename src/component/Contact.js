import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import linkedin from "../assets/socials/linkedin.png";
import insta from "../assets/socials/insta.png";
import facebook from "../assets/socials/facebook.png";
const Contact = () => {
  return (
    <section
      class="bg-center bg-no-repeat  bg-[#1F2527] bg-blend-multiply"
      id="contact"
    >
      <div class="pt-4 pb-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo-300 md:text-5xl lg:text-6xl">
          Lets Connect !!
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Don't miss out on the latest updates, events, and exclusive content.
          Subscribe to our newsletter to stay in the loop.
        </p>

        <div className="flex justify-center space-x-6">
          {/* Card 1 */}
          <div className="w-[220px] bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end mt-3"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={insta}
                alt="Bonnie image"
              />
              <FaInstagramSquare className=" p-1 border border-gray-200 rounded-full text-[2.5rem] mb-2" />
              <h5 className="mb-1 text-xl font-medium text-green-900 dark:text-white">
                @sunilnambu
              </h5>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="https://www.instagram.com/sunilnambu/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#FB8569] rounded-lg hover:bg-[#FB8569] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#FB8569]dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[220px] bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end mt-3"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={facebook}
                alt="Bonnie image"
              />
              <FaFacebookSquare className=" p-1 border border-gray-200 rounded-full text-[2.5rem] mb-2" />
              <h5 className="mb-1 text-xl font-medium text-green-900 dark:text-white">
                @Sunil Nambu
              </h5>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="https://www.facebook.com/sunilraj.p/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#FB8569] rounded-lg hover:bg-[#FB8569] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#FB8569]dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[220px] bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end mt-3"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={linkedin}
                alt="Bonnie image"
              />
              <FaLinkedin className=" p-1 border border-gray-200 rounded-full text-[2.5rem] mb-2" />

              <h5 className="mb-1 text-xl font-medium text-green-900 dark:text-white">
                @Sunil Raj P
              </h5>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="https://www.linkedin.com/in/sunil-raj-p-9517741a/details/experience/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#FB8569] rounded-lg hover:bg-[#FB8569] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#FB8569]dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
