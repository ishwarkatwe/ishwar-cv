"use client"

import React, { useState, useEffect } from "react";
import Panel from "@/app/components/core/Panel";

interface Course {
  title: string;
  description: string;
  link: string;
  image?: string;
}

function RecentNotes() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Replace with your real API endpoint
    fetch("https://dummyjson.com/c/ac18-aee7-48b4-908c")
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching courses:", error));
  }, []);

  const latestCourses = courses.slice(-5).reverse(); // Get the latest 5 courses

  return (
    <Panel title={"Latest Courses"}>
      <ul className="space-y-4">
        {latestCourses.map((course, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex items-center">
            {course.image && (
              <img src={course.image} alt={course.title} className="w-30 h-20 rounded-sm mr-4" />
            )}
            <div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <a href={course.link} className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export default RecentNotes;