import React from "react";
import "../styles/Books.css";
import book1 from "../assets/books/book1.jpg";
import book2 from "../assets/books/book2.jpg";
const Books = () => {
  return (
    <section className="books-section" id="books">
      <div>
        <h1 className="books-title">My Books</h1>
        <p className="text-books">
          Step into a world of wonder with our artist's delightful books
          published by Penguin Books. These cartoon graphical stories promise
          entertainment and laughter with whimsical characters and witty
          dialogues. Whether you're a seasoned reader or new to graphical
          storytelling, these books are sure to captivate and inspire. So, grab
          a copy and embark on an adventure you won't soon forget!
        </p>
      </div>

      <div className="flex justify-between gap-12 mt-8">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={book1} alt="" />
          <div className="p-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-green-900">
              Roaming-Graphic Novel
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy Book
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={book2} alt="" />
          </a>
          <div className="p-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-green-900">
              St.John Abraham- Graphic Novel
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
