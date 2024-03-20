import React from 'react'

export default function CardList({ imageUrl, title, description }) {
    return (
      <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="relative overflow-hidden rounded-xl">
          <img src={imageUrl} alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
        </div>
        <div className="mt-6 relative">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">{description}</p>
          <a className="inline-block" href="#">
            <span className="text-primary">Read more</span>
          </a>
        </div>
      </div>
    );
  }