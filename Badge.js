import React from "react";

const Badge = ({ completed }) => {
  if (completed >= 5) return <p> Master Learner Badge</p>;
  if (completed >= 3) return <p> Advanced Learner Badge</p>;
  if (completed >= 1) return <p> Beginner Badge</p>;
  return <p> Start learning to earn badges!</p>;
};

export default Badge;
