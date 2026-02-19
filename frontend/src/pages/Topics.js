import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import "./Topic.css";

const Topics = () => {
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

  const getStatus = (topic) => {
    return topic.subTopics.every((st) => st.status === "Done")
      ? "Done"
      : "Pending";
  };

  return (
    <div className="topics-container">
      <h2 className="topics-title">📘 DSA Learning Dashboard</h2>

      <div className="topics-grid">
        {topics.map((topic) => {
          const status = getStatus(topic);

          return (
            <div key={topic._id} className="topic-card">
              <Link to={`/topics/${topic._id}`} className="topic-link">
                {topic.name}
              </Link>

              <span
                className={`status-badge ${
                  status === "Done" ? "done" : "pending"
                }`}
              >
                {status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
