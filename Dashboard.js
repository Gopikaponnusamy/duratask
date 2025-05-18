import React from "react";
import Badge from "./Badge";

const Dashboard = ({ user, progress = {}, courses = [], onSelectCourse }) => {
  const completedCount = courses.filter(course => progress[course.id]?.completed).length;

  return (
    <div className="box" style={{ padding: 20 }}>
      <h2>Hello {user?.name || "User"}, here's your dashboard!</h2>
      <p>Courses completed: {completedCount} / {courses.length}</p>
      <Badge completed={completedCount} />

      <h3 style={{ marginTop: 20 }}>Continue Learning:</h3>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        courses.map(course => {
          const isCompleted = progress[course.id]?.completed;
          return (
            <div
              key={course.id}
              className="card"
              onClick={() => onSelectCourse(course)}
              style={{
                cursor: "pointer",
                backgroundColor: isCompleted ? "#e0f7e9" : "#fff5f5",
                border: `1px solid ${isCompleted ? "#28a745" : "#dc3545"}`,
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{course.title}</span>
              {isCompleted && <span style={{ color: "#28a745", fontWeight: "bold" }}>✅ Completed</span>}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Dashboard;
