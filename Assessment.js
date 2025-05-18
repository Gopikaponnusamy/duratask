import React, { useState } from "react";

// Define questions per course
const courseQuestions = {
  "React Basics": [
    {
      question: "What is React?",
      options: ["Library", "Framework", "Database", "Language"],
      answer: "Library",
    },
    {
      question: "What hook is used for state management?",
      options: ["useData", "useState", "useFetch", "useEffect"],
      answer: "useState",
    },
    {
      question: "Which of these is a lifecycle method?",
      options: ["componentDidMount", "componentStart", "initApp", "startRender"],
      answer: "componentDidMount",
    },
  ],
  "JavaScript Fundamentals": [
    {
      question: "Which keyword declares a constant variable?",
      options: ["var", "let", "const", "define"],
      answer: "const",
    },
    {
      question: "Which method converts JSON to a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "decode()"],
      answer: "JSON.parse()",
    },
    {
      question: "What will `typeof null` return?",
      options: ["object", "null", "undefined", "number"],
      answer: "object",
    },
  ],
  "Web Development": [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Transfer Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "What does CSS control?",
      options: ["Database", "Server", "Structure", "Style"],
      answer: "Style",
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "Hyperlink Text Transfer Program",
        "Home Tool Transfer Protocol",
        "Hyper Trainer Transfer Protocol",
      ],
      answer: "HyperText Transfer Protocol",
    },
  ],
  "UI/UX Design": [
    {
      question: "What principle focuses on keeping interface elements consistent?",
      options: ["Contrast", "Alignment", "Consistency", "Hierarchy"],
      answer: "Consistency",
    },
    {
      question: "What does “responsive design” mean?",
      options: [
        "Design that reacts to user emotions",
        "Design that adapts to different screen sizes",
        "Design that uses animations",
        "Design using only HTML",
      ],
      answer: "Design that adapts to different screen sizes",
    },
    {
      question: "What is a wireframe?",
      options: [
        "A type of color scheme",
        "A prototype with animations",
        "A visual guide representing layout",
        "A backend layout tool",
      ],
      answer: "A visual guide representing layout",
    },
  ],
  "Backend Development": [
    {
      question: "Which of the following is a backend language?",
      options: ["HTML", "CSS", "Node.js", "Photoshop"],
      answer: "Node.js",
    },
    {
      question: "What is the purpose of a database?",
      options: [
        "To design UI",
        "To store and retrieve data",
        "To host images",
        "To deploy the frontend",
      ],
      answer: "To store and retrieve data",
    },
    {
      question: "Which protocol is commonly used to fetch APIs?",
      options: ["SMTP", "FTP", "HTTP", "SSH"],
      answer: "HTTP",
    },
  ],
};

function Assessment({ course, onBack }) {
  if (!course || !course.title) {
    return <div>No course selected.</div>;
  }

  const questions = courseQuestions[course.title] || [];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (index, answer) => {
    const updated = [...userAnswers];
    updated[index] = answer;
    setUserAnswers(updated);
  };

  const calculateScore = () => {
    return userAnswers.reduce(
      (acc, answer, i) => (answer === questions[i].answer ? acc + 1 : acc),
      0
    );
  };

  const handleSubmit = () => {
    if (userAnswers.some((answer) => answer === "")) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <div className="box" style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
        <h2>Assessment - {course.title}</h2>

        {submitted ? (
          <>
            <p><strong>Your Score:</strong> {calculateScore()} / {questions.length}</p>
            <button onClick={onBack} style={{ padding: "10px 20px", cursor: "pointer" }}>
              Back to Courses
            </button>
          </>
        ) : (
          <>
            {questions.map((q, i) => (
              <div key={i} className="card" style={{ marginBottom: 20 }}>
                <p>{i + 1}. {q.question}</p>
                {q.options.map((opt) => (
                  <label key={opt} style={{ display: "block", marginBottom: 6 }}>
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={opt}
                      checked={userAnswers[i] === opt}
                      onChange={() => handleOptionChange(i, opt)}
                      style={{ marginRight: 8 }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ))}
            <button
              onClick={handleSubmit}
              style={{ padding: "10px 20px", cursor: "pointer" }}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Assessment;
