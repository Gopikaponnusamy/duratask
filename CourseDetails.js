import React from "react";

// Descriptions for known courses
const courseDescriptions = {
  "React Basics":
    "Learn the fundamentals of building user interfaces using React. This course covers components, hooks, JSX, and the virtual DOM.",
  "JavaScript Fundamentals":
    "Master the basics of JavaScript including variables, data types, functions, and control structures. Essential for all web developers.",
  "Web Development":
    "Understand how to build modern websites using HTML, CSS, and JavaScript. Explore layout, responsiveness, and interactive design.",
  "UI/UX Design":
    "Explore the principles of user-centered design. Learn about wireframes, prototyping, and creating engaging and accessible interfaces.",
  "Backend Development":
    "Dive into server-side programming with Node.js, databases, and RESTful APIs. Learn how backend systems support web applications.",
};

function CourseDetails({ course, onStartAssessment }) {
  if (!course || !course.title) return <div>No course selected.</div>;

  const description = courseDescriptions[course.title] || "No description available for this course.";

  return (
    <div className="container" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <div className="box" style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
        <h2>{course.title}</h2>
        <p style={{ marginBottom: 20 }}>{description}</p>
        <button onClick={onStartAssessment} style={{ padding: "10px 20px", cursor: "pointer" }}>
          Take Assessment
        </button>
      </div>
    </div>
  );
}

export default CourseDetails;
