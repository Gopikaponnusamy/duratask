import React from "react";

function CourseList({ courses, onSelect }) {
  return (
    <div className="box">
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <div key={course.id} className="card" onClick={() => onSelect(course)}>
          <h4>{course.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
