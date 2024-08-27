"use client";
import React from "react";
import Pagination from "./pagination";
import Link from "next/link";

type BlogCardProps = {
  date: string;
  title: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ date, title, description }) => {
  return (
    <>
      <div id="blog" className="flex flex-col md:flex-row items-center gap-6 md:gap-10 space-y-6 md:space-y-0">
        <div className="relative w-full md:w-1/2 bg-gray-400 rounded-3xl h-64 sm:h-72 lg:h-80">
          <button className="absolute bottom-4 sm:bottom-6 right-4 bg-indigo-600 text-white py-2 px-4 sm:px-6 rounded-full shadow-md">
            Read More &rarr;
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-sm sm:text-base text-blue-500">{date}</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {title}
          </h3>
          <p className="text-gray-700">{description}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="text-gray-700 py-2 px-4 border border-gray-300 rounded-full">
                Our Category
              </button>
              <button className="text-gray-700 py-2 px-4 border border-gray-300 rounded-full">
                Our Category
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 space-y-6 md:space-y-0">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-sm sm:text-base text-blue-500">{date}</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {title}
          </h3>
          <p className="text-gray-700">{description}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="text-gray-700 py-2 px-4 border border-gray-300 rounded-full">
                Our Category
              </button>
              <button className="text-gray-700 py-2 px-4 border border-gray-300 rounded-full">
                Our Category
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 bg-gray-400 rounded-3xl h-64 sm:h-72 lg:h-80">
          <button className="absolute bottom-4 sm:bottom-6 right-4 bg-indigo-600 text-white py-2 px-4 sm:px-6 rounded-full shadow-md">
            Read More &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-3">
          <Link href={"#Blogs"} className="text-blue-400 hover:underline">
            Blogs & News
          </Link>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Exploring the headlines,
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          uncovering the truth
        </h2>
        <div className="space-y-12">
          <BlogCard
            date="Monday, 23 Jun 2024"
            title="Cybersecurity Awareness: Empowering Individuals and Organizations"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"
          />
          <BlogCard
            date="Monday, 23 Jun 2024"
            title="Cybersecurity Awareness: Empowering Individuals and Organizations"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"
          />
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default BlogSection;
