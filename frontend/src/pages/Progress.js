import React, { useEffect, useState } from "react";
import API from "../api";
import "./Progress.css";

const Progress = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const { data } = await API.get("/topics");
        setTopics(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTopics();
  }, []);

  const calculateProgress = (level) => {
    let total = 0,
      done = 0;

    topics.forEach((topic) => {
      topic.subTopics.forEach((st) => {
        if (st.level === level) {
          total++;
          if (st.status === "Done") done++;
        }
      });
    });

    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  const easy = calculateProgress("Easy");
  const medium = calculateProgress("Medium");
  const hard = calculateProgress("Hard");

  return (
    <div className="progress-container">
      <h2 className="progress-title">📊 DSA Progress Tracker</h2>

      <div className="progress-card">
        <h3>Easy</h3>
        <div className="progress-bar">
          <div
            className="progress-fill easy"
            style={{ width: `${easy}%` }}
          ></div>
        </div>
        <span>{easy}% Completed</span>
      </div>

      <div className="progress-card">
        <h3>Medium</h3>
        <div className="progress-bar">
          <div
            className="progress-fill medium"
            style={{ width: `${medium}%` }}
          ></div>
        </div>
        <span>{medium}% Completed</span>
      </div>

      <div className="progress-card">
        <h3>Hard</h3>
        <div className="progress-bar">
          <div
            className="progress-fill hard"
            style={{ width: `${hard}%` }}
          ></div>
        </div>
        <span>{hard}% Completed</span>
      </div>
    </div>
  );
};

export default Progress;
