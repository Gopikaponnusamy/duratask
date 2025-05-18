import React, { useState } from "react";

const FeedbackForm = ({ course, onSubmit }) => {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="box">
      <h3>Feedback for {course.title}</h3>
      <textarea
        placeholder="Share your thoughts..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows="5"
        style={{ width: "100%" }}
      />
      <button onClick={onSubmit}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackForm;
