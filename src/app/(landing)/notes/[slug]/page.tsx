import React from "react";
import Panel from "@/app/components/core/Panel";
import Breadcrumb from "@/app/components/core/Breadcrumb";

interface Course {
  title: string;
  description: string;
  link: string;
  image?: string;
  createdOn: string;
}

async function fetchCourse(slug: string): Promise<Course | null> {
  try {
    const response = await fetch(
      `https://dummyjson.com/c/ac18-aee7-48b4-908c/${slug}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch course details");
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching course details:", error);
    return null;
  }
}

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const course = await fetchCourse(slug);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Panel title={""}>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Notes", href: "/notes" },
          { label: course.title, href: `/notes/${slug}` },
        ]}
      />
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {course.image && (
          <img
            src={course.image}
            alt={course.title}
            className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
          />
        )}
        <div className="flex-1 w-full">
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-gray-500 text-sm mb-4">
            Created on: {new Date(course.createdOn).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <a href={course.link} className="text-blue-500 hover:underline">
            Learn more
          </a>
        </div>
      </div>
    </Panel>
  );
}
