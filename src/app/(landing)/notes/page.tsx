"use client";

import React, { useState, useEffect } from "react";
import Panel from "@/app/components/core/Panel";

interface Course {
  title: string;
  description: string;
  link: string;
  image?: string;
}

const ITEMS_PER_PAGE = 12;

function Notes() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // Replace with your real API endpoint
    fetch("https://dummyjson.com/c/ac18-aee7-48b4-908c")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Panel title={"Recent Notes"}>
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full md:w-[50%]"
        />
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg"
          >
            {course.image && (
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <a href={'notes/'+index+1} className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </Panel>
  );
}

export default Notes;
