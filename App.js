import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import Assessment from "./components/Assessment";
import Dashboard from "./components/Dashboard";
import FeedbackForm from "./components/FeedbackForm";
import Navbar from "./components/Navbar";
import coursesData from "./data/courses";
import "./styles.css";

function App() {
  const [user, setUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [assessmentMode, setAssessmentMode] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [progress, setProgress] = useState({});
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleAssessmentComplete = (courseId, score) => {
    setProgress((prev) => ({
      ...prev,
      [courseId]: { score, completed: true },
    }));
    setAssessmentMode(false);
    setFeedbackGiven(false);
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setShowDashboard(false);
    setFeedbackGiven(!!progress[course.id]?.completed); // Skip feedback if already completed
  };

  if (!user) return <RegistrationForm onRegister={setUser} />;

  return (
    <div className="container">
      <Navbar
        user={user}
        onHome={() => {
          setShowDashboard(true);
          setSelectedCourse(null);
        }}
      />

      {assessmentMode ? (
        <Assessment
          course={selectedCourse}
          onBack={() => setAssessmentMode(false)}
          onComplete={handleAssessmentComplete}
        />
      ) : selectedCourse ? (
        feedbackGiven ? (
          <CourseDetails
            course={selectedCourse}
            onStartAssessment={() => setAssessmentMode(true)}
            progress={progress[selectedCourse.id]}
          />
        ) : (
          <FeedbackForm
            course={selectedCourse}
            onSubmit={() => setFeedbackGiven(true)}
          />
        )
      ) : showDashboard ? (
        <Dashboard
          user={user}
          progress={progress}
          courses={coursesData}
          onSelectCourse={handleSelectCourse}
        />
      ) : (
        <CourseList
          courses={coursesData}
          onSelect={handleSelectCourse}
        />
      )}
    </div>
  );
}

export default App;
